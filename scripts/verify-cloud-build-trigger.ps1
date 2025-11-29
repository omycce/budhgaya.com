#!/usr/bin/env pwsh
# Verifies that the Cloud Build trigger is correctly configured

param(
    [string]$Project = "advance-block-471015-k4",
    [string]$TriggerId = "0e432dc7-8de7-48b5-830f-5d480d11453a"
)

Write-Host "======================================" -ForegroundColor Cyan
Write-Host "Cloud Build Trigger Verification" -ForegroundColor Cyan
Write-Host "======================================" -ForegroundColor Cyan
Write-Host ""

$allChecks = $true

# Check 1: Trigger has filename set
Write-Host "[1/3] Checking trigger filename configuration..." -ForegroundColor Green
try {
    $trigger = gcloud beta builds triggers describe $TriggerId --project=$Project --format=json | ConvertFrom-Json
    if ($trigger.filename -eq "client/cloudbuild.yaml") {
        Write-Host "OK PASS: Trigger uses 'client/cloudbuild.yaml'" -ForegroundColor Green
    }
    elseif ($trigger.filename) {
        Write-Host "WARNING: Trigger uses '$($trigger.filename)' instead of 'client/cloudbuild.yaml'" -ForegroundColor Yellow
        $allChecks = $false
    }
    elseif ($trigger.autodetect) {
        Write-Host "FAIL: Trigger uses autodetect=true (should be explicit filename)" -ForegroundColor Red
        Write-Host "  Fix: gcloud builds triggers update github $TriggerId --project=$Project --build-config='client/cloudbuild.yaml'" -ForegroundColor Yellow
        $allChecks = $false
    }
    else {
        Write-Host "WARNING: Could not determine trigger configuration" -ForegroundColor Yellow
        $allChecks = $false
    }
}
catch {
    Write-Host "FAIL: Could not fetch trigger: $_" -ForegroundColor Red
    $allChecks = $false
}
Write-Host ""

# Check 2: Trigger has serviceAccount
Write-Host "[2/3] Checking service account configuration..." -ForegroundColor Green
try {
    if ($trigger.serviceAccount) {
        Write-Host "OK PASS: Service account configured: $($trigger.serviceAccount)" -ForegroundColor Green
    }
    else {
        Write-Host "WARNING: No service account configured" -ForegroundColor Yellow
    }
}
catch {
    Write-Host "WARNING: Could not check service account: $_" -ForegroundColor Yellow
}
Write-Host ""

# Check 3: cloudbuild.yaml has logging option
Write-Host "[3/3] Checking cloudbuild.yaml logging configuration..." -ForegroundColor Green
if (Test-Path "client/cloudbuild.yaml") {
    $content = Get-Content "client/cloudbuild.yaml" -Raw
    if ($content -match "logging:\s*(CLOUD_LOGGING_ONLY|NONE)") {
        Write-Host "OK PASS: cloudbuild.yaml has logging configured: $($matches[1])" -ForegroundColor Green
    }
    elseif ($content -match "logging:") {
        Write-Host "WARNING: cloudbuild.yaml has logging but with different value" -ForegroundColor Yellow
        $allChecks = $false
    }
    else {
        Write-Host "FAIL: cloudbuild.yaml missing logging configuration" -ForegroundColor Red
        Write-Host "  Add this to client/cloudbuild.yaml under 'options:'" -ForegroundColor Yellow
        Write-Host "    logging: CLOUD_LOGGING_ONLY" -ForegroundColor Yellow
        $allChecks = $false
    }
}
else {
    Write-Host "FAIL: client/cloudbuild.yaml not found" -ForegroundColor Red
    $allChecks = $false
}
Write-Host ""

# Summary
Write-Host "======================================" -ForegroundColor Cyan
if ($allChecks) {
    Write-Host "OK All checks passed!" -ForegroundColor Green
    Write-Host "Trigger is correctly configured." -ForegroundColor Green
}
else {
    Write-Host "WARNING Some checks failed or need attention" -ForegroundColor Yellow
    Write-Host "See recommendations above." -ForegroundColor Yellow
}
Write-Host "======================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "Quick Commands:" -ForegroundColor Cyan
Write-Host "  View trigger: gcloud beta builds triggers describe $TriggerId --project=$Project --format=json" -ForegroundColor DarkGray
Write-Host "  Test build: gcloud beta builds triggers run $TriggerId --branch=master --project=$Project" -ForegroundColor DarkGray
Write-Host ""

exit $(if ($allChecks) { 0 } else { 1 })
