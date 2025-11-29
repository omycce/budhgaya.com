param(
  [string]$Project = "bodhgaya",
  [string]$Region = "europe-west1",
  [string]$Service = "budhgaya-com",
  [string]$Image = "budhgaya-client"
)

# Simple deploy script that wraps gcloud builds submit and forwards substitutions.
try {
  $SHORT = (git rev-parse --short HEAD).Trim()
} catch {
  Write-Host "Warning: git not available or not a git repo. Falling back to 'local' for short sha." -ForegroundColor Yellow
  $SHORT = "local"
}

$subs = "_SHORT_SHA=$SHORT,_REGION=$Region,_SERVICE=$Service,_IMAGE=$Image"

Write-Host "Submitting Cloud Build with substitutions: $subs"
Write-Host "Project: $Project  Region: $Region  Service: $Service  Image: $Image"

# Ensure we submit from the repository root so Cloud Build uploads the full repo as the build context.
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Definition
$RepoRoot = Resolve-Path (Join-Path $ScriptDir "..")
Push-Location $RepoRoot
try {
  $ConfigPath = Resolve-Path (Join-Path $ScriptDir 'cloudbuild.yaml')
  Write-Host "Running gcloud builds submit from: $($PWD) with config: $ConfigPath"
  & gcloud builds submit --project=$Project --config="$ConfigPath" --substitutions=$subs
} finally {
  Pop-Location
}

Write-Host "Cloud Build submit finished. Check Cloud Console or the output above for logs and deployed URL." -ForegroundColor Green
