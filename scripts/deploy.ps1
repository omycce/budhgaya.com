Param(
  [string]$Project = "bodhgaya",
  [string]$Region = "us-central1",
  [string]$Service = "budhgaya-server"
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

Write-Host "Setting gcloud project to $Project"
gcloud config set project $Project | Out-Null

$SHORT_SHA = (git rev-parse --short HEAD).Trim()
if (-not $SHORT_SHA) { $SHORT_SHA = (Get-Date -Format yyyyMMddHHmmss) }

Write-Host "Building and pushing image gcr.io/${Project}/${Service}:${SHORT_SHA}"
gcloud builds submit --tag "gcr.io/${Project}/${Service}:${SHORT_SHA}" .

Write-Host "Deploying to Cloud Run: service=${Service} region=${Region} image=gcr.io/${Project}/${Service}:${SHORT_SHA}"
gcloud run deploy $Service --image "gcr.io/${Project}/${Service}:${SHORT_SHA}" --region $Region --platform managed --allow-unauthenticated

Write-Host "Done."


