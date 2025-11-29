#!/usr/bin/env pwsh
# Fixes Cloud Build trigger logging configuration issues

param(
    [string]$Project = "advance-block-471015-k4",
    [string]$TriggerId = "0e432dc7-8de7-48b5-830f-5d480d11453a",
    [string]$ServiceAccount = "projects/advance-block-471015-k4/serviceAccounts/469438830100-compute@developer.gserviceaccount.com",
    [switch]$TestBuild
)

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Cloud Build Trigger Setup" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Step 1: Verify prerequisites
Write-Host "[1/4] Verifying prerequisites..." -ForegroundColor Green
try {
    $gcloud = gcloud --version 2>&1 | Select-Object -First 1
    Write-Host "OK gcloud CLI found: $gcloud" -ForegroundColor Green
}
catch {
    Write-Host "FAIL gcloud CLI not found. Please install Google Cloud SDK." -ForegroundColor Red
    exit 1
}

if (-not (Test-Path "client/cloudbuild.yaml")) {
    Write-Host "FAIL client/cloudbuild.yaml not found!" -ForegroundColor Red
    exit 1
}
Write-Host "OK client/cloudbuild.yaml exists" -ForegroundColor Green
Write-Host ""

# Step 2: Check current trigger status
Write-Host "[2/4] Checking current trigger configuration..." -ForegroundColor Green
try {
    $trigger = gcloud beta builds triggers describe $TriggerId --project=$Project --format=json 2>&1 | ConvertFrom-Json
    Write-Host "OK Trigger found: $($trigger.name)" -ForegroundColor Green
    if ($trigger.filename) {
        Write-Host "  Current filename: $($trigger.filename)" -ForegroundColor DarkGray
    }
    elseif ($trigger.autodetect) {
        Write-Host "  Current mode: autodetect (will be changed to explicit filename)" -ForegroundColor DarkGray
    }
}
catch {
    Write-Host "FAIL Failed to fetch trigger: $_" -ForegroundColor Red
    exit 1
}
Write-Host ""

# Step 3: Update trigger
Write-Host "[3/4] Updating trigger configuration..." -ForegroundColor Green
try {
    Write-Host "  Updating to use client/cloudbuild.yaml..." -ForegroundColor DarkGray
    gcloud builds triggers update github $TriggerId `
      --project=$Project `
      --build-config="client/cloudbuild.yaml" `
      --service-account=$ServiceAccount `
      2>&1 | Out-Null
    Write-Host "OK Trigger updated successfully" -ForegroundColor Green
}
catch {
    Write-Host "FAIL Failed to update trigger: $_" -ForegroundColor Red
    exit 1
}
Write-Host ""

# Step 4: Verify the fix
Write-Host "[4/4] Verifying configuration..." -ForegroundColor Green
try {
    $updatedTrigger = gcloud beta builds triggers describe $TriggerId --project=$Project --format=json 2>&1 | ConvertFrom-Json
    if ($updatedTrigger.filename -eq "client/cloudbuild.yaml") {
        Write-Host "OK Trigger correctly configured with filename: $($updatedTrigger.filename)" -ForegroundColor Green
    }
    else {
        Write-Host "WARNING: filename not set as expected" -ForegroundColor Yellow
    }
    
    # Check cloudbuild.yaml for logging option
    $buildContent = Get-Content "client/cloudbuild.yaml" -Raw
    if ($buildContent -match "logging:\s*(CLOUD_LOGGING_ONLY|NONE)") {
        Write-Host "OK cloudbuild.yaml has logging configured: $($matches[1])" -ForegroundColor Green
    }
    else {
        Write-Host "WARNING: cloudbuild.yaml missing logging configuration" -ForegroundColor Yellow
    }
}
catch {
    Write-Host "WARNING: Could not fully verify: $_" -ForegroundColor Yellow
}
Write-Host ""

# Step 5: Optional test build
if ($TestBuild) {
    Write-Host "[BONUS] Testing with a manual build..." -ForegroundColor Green
    try {
        Write-Host "  Starting manual build..." -ForegroundColor DarkGray
        $build = gcloud beta builds triggers run $TriggerId --branch=master --project=$Project --format=json 2>&1 | ConvertFrom-Json
        Write-Host "OK Build triggered successfully" -ForegroundColor Green
        Write-Host "  Build ID: $($build.metadata.build.id)" -ForegroundColor DarkGray
        Write-Host "  Log URL: $($build.metadata.build.logUrl)" -ForegroundColor DarkGray
    }
    catch {
        Write-Host "WARNING: Could not trigger build: $_" -ForegroundColor Yellow
    }
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "OK Setup Complete!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "  1. Verify the fix: .\scripts\verify-cloud-build-trigger.ps1" -ForegroundColor DarkGray
Write-Host "  2. Run a test build: gcloud beta builds triggers run $TriggerId --branch=master --project=$Project" -ForegroundColor DarkGray
Write-Host "  3. Check logs: https://console.cloud.google.com/cloud-build/builds?project=$Project" -ForegroundColor DarkGray
Write-Host ""
