# Patch Cloud Build Trigger to add CLOUD_LOGGING_ONLY logging option
# This fixes: "if 'build.service_account' is specified, the build must either... use CLOUD_LOGGING_ONLY / NONE logging options"

param(
    [string]$Project = "advance-block-471015-k4",
    [string]$TriggerId = "0e432dc7-8de7-48b5-830f-5d480d11453a"
)

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Cloud Build Trigger Logging Patch" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Step 1: Get auth token
Write-Host "[1/5] Retrieving access token..." -ForegroundColor Green
$TOKEN = gcloud auth print-access-token
if (-not $TOKEN) {
    Write-Host "ERROR: Failed to get access token. Ensure 'gcloud auth login' is run." -ForegroundColor Red
    exit 1
}
Write-Host "OK Token retrieved" -ForegroundColor Green
Write-Host ""

# Step 2: Download current trigger
Write-Host "[2/5] Downloading current trigger configuration..." -ForegroundColor Green
$uri = "https://cloudbuild.googleapis.com/v1/projects/$Project/triggers/$TriggerId"
try {
    $response = Invoke-RestMethod -Method Get `
      -Uri $uri `
      -Headers @{ Authorization = "Bearer $TOKEN"; "Content-Type" = "application/json" }
    Write-Host "OK Trigger downloaded" -ForegroundColor Green
}
catch {
    Write-Host "ERROR: Failed to download trigger: $_" -ForegroundColor Red
    exit 1
}
Write-Host ""

# Step 3: Ensure build object exists and add logging option
Write-Host "[3/5] Merging logging option into build configuration..." -ForegroundColor Green
Write-Host "DEBUG: Current build object structure:" -ForegroundColor DarkGray
Write-Host ($response.build | ConvertTo-Json -Depth 3) -ForegroundColor DarkGray
if (-not $response.build) {
    Write-Host "WARNING: No build object found, creating new one" -ForegroundColor Yellow
    $response | Add-Member -NotePropertyName "build" -NotePropertyValue @{}
}
if (-not $response.build.options) {
    $response.build | Add-Member -NotePropertyName "options" -NotePropertyValue @{}
}
$response.build.options.logging = "CLOUD_LOGGING_ONLY"
Write-Host "OK Logging option set to CLOUD_LOGGING_ONLY" -ForegroundColor Green
Write-Host "DEBUG: Updated build object:" -ForegroundColor DarkGray
Write-Host ($response.build | ConvertTo-Json -Depth 5) -ForegroundColor DarkGray
Write-Host ""

# Step 4: Patch the trigger
Write-Host "[4/5] Applying patch to trigger..." -ForegroundColor Green
try {
    $patchUri = "$uri`?updateMask=build"
    # When using updateMask, only include the fields you want to update
    $patchPayload = @{
        build = $response.build
    }
    $patchBody = $patchPayload | ConvertTo-Json -Depth 10
    Write-Host "DEBUG: Payload size: $($patchBody.Length) bytes" -ForegroundColor DarkGray
    $patchResponse = Invoke-RestMethod -Method Patch `
      -Uri $patchUri `
      -Headers @{ Authorization = "Bearer $TOKEN"; "Content-Type" = "application/json" } `
      -Body $patchBody -ErrorAction Stop
    Write-Host "OK Trigger patched successfully" -ForegroundColor Green
}
catch {
    Write-Host "ERROR: Failed to patch trigger" -ForegroundColor Red
    Write-Host "Status: $($_.Exception.Response.StatusCode)" -ForegroundColor Red
    # Try to read error details from response
    try {
        $errorBody = $_.Exception.Response.GetResponseStream()
        $reader = [System.IO.StreamReader]::new($errorBody)
        $errorContent = $reader.ReadToEnd()
        Write-Host "Error details: $errorContent" -ForegroundColor Red
    } catch { }
    exit 1
}
Write-Host ""

# Step 5: Verify the change
Write-Host "[5/5] Verifying patch..." -ForegroundColor Green
try {
    $verifyResponse = Invoke-RestMethod -Method Get `
      -Uri $uri `
      -Headers @{ Authorization = "Bearer $TOKEN"; "Content-Type" = "application/json" }
    $loggingOption = $verifyResponse.build.options.logging
    if ($loggingOption -eq "CLOUD_LOGGING_ONLY") {
        Write-Host "OK Verification successful: logging is set to $loggingOption" -ForegroundColor Green
    }
    else {
        Write-Host "WARNING: Expected logging=CLOUD_LOGGING_ONLY, got: $loggingOption" -ForegroundColor Yellow
    }
}
catch {
    Write-Host "WARNING: Could not verify patch: $_" -ForegroundColor Yellow
}
Write-Host ""

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Patch Complete!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "  1. Run the trigger manually to test:"
Write-Host "     gcloud beta builds triggers run $TriggerId --branch=main --project=$Project"
Write-Host ""
Write-Host "  2. Monitor the build in Cloud Console:"
Write-Host "     https://console.cloud.google.com/cloud-build/builds?project=$Project"
Write-Host ""
