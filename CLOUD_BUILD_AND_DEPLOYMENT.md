# Cloud Build & Deployment Complete Guide

## Table of Contents
1. [Quick Start](#quick-start)
2. [Issue Resolution](#issue-resolution)
3. [Cloud Build Configuration](#cloud-build-configuration)
4. [Deployment](#deployment)
5. [Automation Scripts](#automation-scripts)
6. [Troubleshooting](#troubleshooting)
7. [Team Reference](#team-reference)

---

## Quick Start

### For Developers
Before any deployment, verify the configuration:
```powershell
.\scripts\verify-cloud-build-trigger.ps1
```

### Deploy Client (React)
```powershell
cd client
.\deploy.ps1
```

### Deploy Server (Node.js)
```powershell
cd scripts
.\deploy.ps1
```

---

## Issue Resolution

### Problem: Cloud Build Trigger Logging Error

**Error Message:**
```
if 'build.service_account' is specified, the build must either (a) specify 'build.logs_bucket', 
(b) use the REGIONAL_USER_OWNED_BUCKET build.options.default_logs_bucket_behavior option, 
or (c) use either CLOUD_LOGGING_ONLY / NONE logging options: invalid argument
```

### Root Cause

The Cloud Build trigger had:
- ✗ `autodetect: true` (no explicit build file)
- ✓ `serviceAccount` configured
- ✗ No logging options specified at trigger level

GCP requires that when a trigger specifies a service account, the build must also have logging options.

### Solution Applied

**Before:**
```json
{
  "autodetect": true,
  "serviceAccount": "..."
}
```

**After:**
```json
{
  "filename": "client/cloudbuild.yaml",
  "serviceAccount": "..."
}
```

Now the trigger explicitly uses `client/cloudbuild.yaml` which contains:
```yaml
options:
  logging: CLOUD_LOGGING_ONLY
  logStreamingOption: STREAM_ON
```

### Verification

All checks passing:
```
✅ Trigger uses 'client/cloudbuild.yaml'
✅ Service account configured correctly
✅ cloudbuild.yaml has logging: CLOUD_LOGGING_ONLY
✅ All checks passed!
```

---

## Cloud Build Configuration

### Trigger Details

| Setting | Value |
|---------|-------|
| **Trigger Name** | Budhgaya |
| **Trigger ID** | 0e432dc7-8de7-48b5-830f-5d480d11453a |
| **Project** | advance-block-471015-k4 |
| **Repository** | omycce/budhgaya.com |
| **Branch** | ^master$ |
| **Build Config** | client/cloudbuild.yaml |
| **Service Account** | 469438830100-compute@developer.gserviceaccount.com |
| **Logging** | CLOUD_LOGGING_ONLY |

### Build File Configuration

**File:** `client/cloudbuild.yaml`

```yaml
options:
  logging: CLOUD_LOGGING_ONLY
  logStreamingOption: STREAM_ON

timeout: "1200s"

substitutions:
  _SHORT_SHA: "2a111f2"
  _REGION: "europe-west1"
  _SERVICE: "budhgaya-com"
  _IMAGE: "budhgaya-client"

steps:
  - id: "Build-app"
    name: "node:18"
    entrypoint: bash
    args:
      - -lc
      - |
        set -e
        cd client
        npm install --legacy-peer-deps --prefer-offline --no-audit --no-fund
        npm run build

  - id: "Build-image"
    name: "gcr.io/cloud-builders/docker"
    args:
      - build
      - -t
      - gcr.io/$PROJECT_ID/${_IMAGE}:${_SHORT_SHA}
      - client

  - id: "Push-image"
    name: "gcr.io/cloud-builders/docker"
    args:
      - push
      - gcr.io/$PROJECT_ID/${_IMAGE}:${_SHORT_SHA}

  - id: "Deploy-to-Cloud-Run"
    name: "gcr.io/cloud-builders/gcloud"
    entrypoint: bash
    args:
      - -lc
      - |
        set -euo pipefail
        echo "Deploying to Cloud Run service: ${_SERVICE} (region: ${_REGION})"
        gcloud run deploy "${_SERVICE}" --image gcr.io/$PROJECT_ID/${_IMAGE}:${_SHORT_SHA} \
          --region "${_REGION}" --platform managed --allow-unauthenticated
```

### How It Works

1. **Build App** - Compiles React app with npm
2. **Build Image** - Creates Docker image
3. **Push Image** - Pushes to Google Container Registry (GCR)
4. **Deploy** - Deploys to Cloud Run

### Triggered Automatically

When you push to master branch:
```bash
git push origin master
```

The trigger automatically:
1. Fetches the code
2. Runs the cloudbuild.yaml steps
3. Builds and pushes Docker image
4. Deploys to Cloud Run

---

## Deployment

### Overview

| Service | Script | Region | Purpose |
|---------|--------|--------|---------|
| **Client** | `client/deploy.ps1` | europe-west1 | React app |
| **Server** | `scripts/deploy.ps1` | us-central1 | Node.js server |

### Client Deployment

**Location:** `client/deploy.ps1`

```powershell
param(
  [string]$Project = "advance-block-471015-k4",
  [string]$Region = "europe-west1",
  [string]$Service = "budhgaya-com",
  [string]$Image = "budhgaya-client"
)
```

**Run:**
```powershell
cd client
.\deploy.ps1
```

**Custom parameters:**
```powershell
.\deploy.ps1 -Project "advance-block-471015-k4" -Region "europe-west1"
```

**What it does:**
1. Computes git short SHA
2. Submits Cloud Build with `client/cloudbuild.yaml`
3. Builds React app
4. Builds Docker image
5. Pushes to GCR
6. Deploys to Cloud Run

### Server Deployment

**Location:** `scripts/deploy.ps1`

```powershell
Param(
  [string]$Project = "advance-block-471015-k4",
  [string]$Region = "us-central1",
  [string]$Service = "budhgaya-server"
)
```

**Run:**
```powershell
cd scripts
.\deploy.ps1
```

**What it does:**
1. Computes git short SHA
2. Builds Docker image
3. Pushes to GCR
4. Deploys to Cloud Run

### Manual Build with gcloud

**Client:**
```powershell
$SHORT = (git rev-parse --short HEAD).Trim()
gcloud builds submit `
  --project=advance-block-471015-k4 `
  --config="client/cloudbuild.yaml" `
  --substitutions=_SHORT_SHA=$SHORT,_REGION=europe-west1,_SERVICE=budhgaya-com,_IMAGE=budhgaya-client
```

**Server:**
```powershell
$SHORT = (git rev-parse --short HEAD).Trim()
gcloud builds submit `
  --project=advance-block-471015-k4 `
  --tag "gcr.io/advance-block-471015-k4/budhgaya-server:${SHORT}" `
  .
```

### Monitor Deployments

**View recent builds:**
```powershell
gcloud builds list --project=advance-block-471015-k4 --limit=10
```

**View build logs:**
```powershell
gcloud builds log BUILD_ID --project=advance-block-471015-k4 --stream
```

**Check service status:**
```powershell
gcloud run services describe budhgaya-com `
  --region=europe-west1 `
  --project=advance-block-471015-k4
```

**Get service URL:**
```powershell
gcloud run services describe budhgaya-com `
  --region=europe-west1 `
  --project=advance-block-471015-k4 `
  --format='value(status.url)'
```

---

## Automation Scripts

### 1. Verify Cloud Build Trigger

**File:** `scripts/verify-cloud-build-trigger.ps1`

**Purpose:** Health check for trigger configuration

**Run:**
```powershell
.\scripts\verify-cloud-build-trigger.ps1
```

**Checks:**
- ✓ Trigger uses explicit `client/cloudbuild.yaml` (not autodetect)
- ✓ Service account is configured
- ✓ `client/cloudbuild.yaml` contains logging option

**Output:**
```
✅ All checks passed!
Trigger is correctly configured.
```

**Exit codes:**
- `0` - All checks passed
- `1` - At least one check failed

### 2. Setup/Fix Cloud Build Trigger

**File:** `scripts/setup-cloud-build-trigger.ps1`

**Purpose:** Automatically fix trigger configuration if needed

**Run:**
```powershell
.\scripts\setup-cloud-build-trigger.ps1
```

**With test build:**
```powershell
.\scripts\setup-cloud-build-trigger.ps1 -TestBuild $true
```

**What it does:**
1. Verifies prerequisites (gcloud CLI, cloudbuild.yaml)
2. Checks current trigger configuration
3. Updates trigger if needed
4. Verifies the fix
5. Optionally runs a test build

---

## Troubleshooting

### Build Fails with Logging Error

1. **Verify configuration:**
   ```powershell
   .\scripts\verify-cloud-build-trigger.ps1
   ```

2. **If checks fail, fix it:**
   ```powershell
   .\scripts\setup-cloud-build-trigger.ps1 -TestBuild $true
   ```

3. **Check build logs:**
   ```powershell
   gcloud builds log BUILD_ID --project=advance-block-471015-k4 --stream
   ```

### Trigger Shows "autodetect: true"

This means trigger reverted to auto-detection. Fix it:
```powershell
gcloud builds triggers update github 0e432dc7-8de7-48b5-830f-5d480d11453a `
  --project=advance-block-471015-k4 `
  --build-config="client/cloudbuild.yaml" `
  --service-account="projects/advance-block-471015-k4/serviceAccounts/469438830100-compute@developer.gserviceaccount.com"
```

### Service Not Responding

```powershell
# Check service status
gcloud run services describe budhgaya-com `
  --region=europe-west1 `
  --project=advance-block-471015-k4

# View logs
gcloud logging read "resource.type=cloud_run_revision AND resource.labels.service_name=budhgaya-com" `
  --project=advance-block-471015-k4 `
  --limit=50 `
  --format=json
```

### Permission Issues

Ensure service account has these roles:
- `roles/cloudbuild.builds.editor` - Build management
- `roles/run.admin` - Cloud Run management
- `roles/storage.admin` - GCR image storage
- `roles/iam.serviceAccountUser` - Service account usage

### npm Install Fails

If you see peer-dependency resolution errors during npm install:
- The build uses `--legacy-peer-deps` automatically
- No changes required - this is handled in cloudbuild.yaml

---

## Team Reference

### For Developers

**Before deployment:**
```powershell
.\scripts\verify-cloud-build-trigger.ps1
```

**Deploy client:**
```powershell
cd client && .\deploy.ps1
```

**Important:**
- Never modify the `logging` option in `client/cloudbuild.yaml`
- Don't use `autodetect` mode with custom service accounts
- Always run verification before major deployments

### For DevOps/Cloud Admins

**Monthly maintenance:**
1. Run verification: `.\scripts\verify-cloud-build-trigger.ps1`
2. Review Cloud Console trigger settings
3. Check recent build logs for errors
4. Document any configuration changes

**If trigger breaks:**
```powershell
.\scripts\setup-cloud-build-trigger.ps1
```

**Check trigger configuration:**
```powershell
gcloud beta builds triggers describe 0e432dc7-8de7-48b5-830f-5d480d11453a `
  --project=advance-block-471015-k4 --format=json
```

### For New Team Members

1. **Read this file** (you're reading it!)
2. **Understand the trigger** - Section: "Trigger Details"
3. **Learn deployment** - Section: "Deployment"
4. **Run verification** - `.\scripts\verify-cloud-build-trigger.ps1`
5. **Ask questions** if anything is unclear

---

## Configuration Summary

### Project
- **ID:** `advance-block-471015-k4`
- **Repository:** `omycce/budhgaya.com`
- **Branch:** `master`

### Services
- **Client:** `budhgaya-com` in europe-west1
- **Server:** `budhgaya-server` in us-central1

### Service Accounts
- **Build Service Account:** `469438830100@cloudbuild.gserviceaccount.com`
- **Compute Service Account:** `469438830100-compute@developer.gserviceaccount.com`

### Build Configuration
- **File:** `client/cloudbuild.yaml`
- **Logging:** `CLOUD_LOGGING_ONLY`
- **Timeout:** 1200 seconds

---

## Best Practices

1. **Always verify before deploying**
   ```powershell
   .\scripts\verify-cloud-build-trigger.ps1
   ```

2. **Use git commits for tracking**
   ```bash
   git push origin master  # Triggers automatic build
   ```

3. **Keep logging options**
   - Never remove `logging: CLOUD_LOGGING_ONLY` from `client/cloudbuild.yaml`
   - Never use `autodetect: true` with custom service accounts

4. **Monitor after deployment**
   - Check Cloud Run service metrics
   - Review application logs
   - Run smoke tests

5. **Document changes**
   - Update this file if you change configuration
   - Keep commit messages clear
   - Note any manual fixes applied

---

## Quick Commands Reference

```powershell
# Verify trigger
.\scripts\verify-cloud-build-trigger.ps1

# Fix trigger
.\scripts\setup-cloud-build-trigger.ps1 -TestBuild $true

# Deploy client
cd client && .\deploy.ps1

# Deploy server
cd scripts && .\deploy.ps1

# View trigger JSON
gcloud beta builds triggers describe 0e432dc7-8de7-48b5-830f-5d480d11453a `
  --project=advance-block-471015-k4 --format=json

# View recent builds
gcloud builds list --project=advance-block-471015-k4 --limit=10

# View build logs
gcloud builds log BUILD_ID --project=advance-block-471015-k4 --stream

# Test trigger
gcloud beta builds triggers run 0e432dc7-8de7-48b5-830f-5d480d11453a `
  --branch=master --project=advance-block-471015-k4

# Check service status
gcloud run services describe budhgaya-com --region=europe-west1 `
  --project=advance-block-471015-k4

# Get service URL
gcloud run services describe budhgaya-com --region=europe-west1 `
  --project=advance-block-471015-k4 --format='value(status.url)'
```

---

## Prevention & Validation

### Validate cloudbuild.yaml Before Committing

To catch configuration issues early, use the validation script:

```powershell
# Validate a specific file
.\scripts\validate-cloudbuild.ps1 -Path client/cloudbuild.yaml

# Validate all cloudbuild.yaml files in the repo
.\scripts\validate-cloudbuild.ps1

# Verbose output (shows warnings for unused substitutions)
.\scripts\validate-cloudbuild.ps1 -Verbose
```

This script checks for:
- ✅ Valid YAML syntax
- ✅ Undefined substitution references (errors)
- ✅ Unused defined substitutions (warnings)
- ✅ Proper use of built-in Cloud Build substitutions

### Git Pre-Commit Hook

A pre-commit hook is installed at `.git/hooks/pre-commit` and will automatically validate all `cloudbuild.yaml` files before each commit. If validation fails:

```bash
# Bypass the hook if needed
git commit --no-verify
```

### Key Rules

When modifying `cloudbuild.yaml`:
1. **Always use built-in substitutions:** `${SHORT_SHA}`, `${COMMIT_SHA}`, `${PROJECT_ID}`, etc.
2. **Define custom substitutions:** Start with `_` (e.g., `_IMAGE`, `_REGION`, `_SERVICE`)
3. **Never leave unused substitutions:** Remove or use all defined custom substitutions
4. **Keep logging options:** Never remove or modify `options.logging: CLOUD_LOGGING_ONLY`
5. **Validate before push:** Run the validation script or let the pre-commit hook catch issues

---

## Support & References

- **Cloud Build Docs:** https://cloud.google.com/cloud-build/docs
- **Cloud Run Docs:** https://cloud.google.com/run/docs
- **Service Accounts:** https://cloud.google.com/cloud-build/docs/cloud-build-service-account

---

## Files Reference

| File | Purpose |
|------|---------|
| `client/cloudbuild.yaml` | Build configuration (do not modify logging) |
| `client/deploy.ps1` | Client deployment script |
| `client/Dockerfile` | Client container image |
| `scripts/deploy.ps1` | Server deployment script |
| `scripts/verify-cloud-build-trigger.ps1` | Trigger health check |
| `scripts/setup-cloud-build-trigger.ps1` | Trigger auto-fix |
| `CLOUD_BUILD_AND_DEPLOYMENT.md` | This file |

---

## Version History

| Date | Change |
|------|--------|
| 2025-11-29 | Cloud Build trigger fixed, deployment scripts updated, consolidated documentation |

---

**Status:** ✅ PRODUCTION READY

**Last Updated:** November 29, 2025

**Maintained By:** DevOps Team
