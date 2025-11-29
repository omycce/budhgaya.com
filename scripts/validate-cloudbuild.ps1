#!/usr/bin/env powershell
<#
.SYNOPSIS
Validates Cloud Build YAML files for common issues (basic validation without Python dependency).
#>

param(
    [string]$Path = $null,
    [switch]$Verbose = $false
)

$ErrorActionPreference = 'Stop'

function Test-CloudBuildYaml {
    param([string]$FilePath)
    
    Write-Host "[cloudbuild] Validating: $FilePath" -ForegroundColor Cyan
    
    if (-not (Test-Path $FilePath)) {
        Write-Error "File not found: $FilePath"
        return $false
    }
    
    $content = Get-Content $FilePath -Raw
    
    # Check for required sections
    if (-not ($content -match 'steps:')) {
        Write-Error "No 'steps:' section found"
        return $false
    }
    
    # Warn if no logging configured
    if (-not ($content -match 'logging:')) {
        Write-Warning "No 'logging:' found in options - ensure trigger has logging configured"
    }
    
    # Find all ${...} substitution references
    $refs = [regex]::Matches($content, '\$\{([A-Za-z_][A-Za-z0-9_]*)\}')
    if ($refs.Count -eq 0) {
        Write-Host "  Valid (no substitutions)" -ForegroundColor Green
        return $true
    }
    
    $referencedVars = @{}
    $refs | ForEach-Object { $referencedVars[$_.Groups[1].Value] = $true }
    
    # Built-in Cloud Build substitutions
    $builtIn = @{
        'PROJECT_ID' = $true; 'BUILD_ID' = $true; 'COMMIT_SHA' = $true
        'BRANCH_NAME' = $true; 'REPO_NAME' = $true; 'REPO_FULL_NAME' = $true
        'REVISION_ID' = $true; 'SHORT_SHA' = $true; 'REF_NAME' = $true
        'TAG_NAME' = $true; 'TRIGGER_NAME' = $true
        'TRIGGER_BUILD_CONFIG_PATH' = $true; 'PUSH_BRANCH' = $true
    }
    
    # Extract substitutions defined in file
    $definedInFile = @{}
    $inSubstitutions = $false
    
    foreach ($line in ($content -split "`n")) {
        if ($line -match '^\s*substitutions:\s*$') { 
            $inSubstitutions = $true
            continue
        }
        if ($inSubstitutions) {
            if ($line -match '^\s+([A-Za-z_][A-Za-z0-9_]*):') {
                $definedInFile[$matches[1]] = $true
            } elseif ($line -match '^\s*[a-z]' -and $line -notmatch '^\s+') {
                $inSubstitutions = $false
            }
        }
    }
    
    # Check for undefined substitutions
    $undefined = @()
    $referencedVars.Keys | ForEach-Object {
        if (-not $builtIn.ContainsKey($_) -and -not $definedInFile.ContainsKey($_)) {
            $undefined += $_
        }
    }
    
    if ($undefined.Count -gt 0) {
        Write-Error "Undefined substitutions: $($undefined -join ', ')"
        return $false
    }
    
    Write-Host "  Valid" -ForegroundColor Green
    return $true
}

$filesToValidate = @()
if ($Path) {
    $filesToValidate = @($Path)
} else {
    $filesToValidate = @(Get-ChildItem -Path (Get-Location) -Filter "cloudbuild.yaml" -Recurse -ErrorAction SilentlyContinue | 
        ForEach-Object { $_.FullName })
}

if ($filesToValidate.Count -eq 0) {
    Write-Host "[cloudbuild] No cloudbuild.yaml files found"
    exit 0
}

$allValid = $true
foreach ($file in $filesToValidate) {
    if (-not (Test-CloudBuildYaml $file)) {
        $allValid = $false
    }
}

if (-not $allValid) {
    exit 1
}

Write-Host "[cloudbuild] All files validated successfully" -ForegroundColor Green
exit 0
