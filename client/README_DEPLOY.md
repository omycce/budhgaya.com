# Deploying the client (simplified)

This folder contains a small helper and an improved `cloudbuild.yaml` to simplify building and deploying the React client to Google Cloud Run.

Quick steps (PowerShell)

1. From repo root (where this README lives) run the PowerShell helper:

```powershell
cd client
.\deploy.ps1 -Project bodhgaya -Region europe-west1 -Service budhgaya-com -Image budhgaya-client
```

2. The script will compute a short git SHA, submit a Cloud Build using `client/cloudbuild.yaml`, build the app, build & push a Docker image and deploy to Cloud Run. The `cloudbuild.yaml` now accepts either a short image name (like `budhgaya-client`) or a full registry path (`gcr.io/myproj/budhgaya-client`) in the `_IMAGE` substitution.

Notes

- If you prefer to run `gcloud` directly, you can run:

```powershell
$SHORT = (git rev-parse --short HEAD).Trim()
gcloud builds submit --project=bodhgaya --config="client/cloudbuild.yaml" --substitutions=_SHORT_SHA=$SHORT,_REGION=europe-west1,_SERVICE=budhgaya-com,_IMAGE=budhgaya-client
```

- The `cloudbuild.yaml` computes a final image name so there's no accidental duplicated `gcr.io/...` prefix. It will build, push and deploy in one step.

- To make Cloud Run public (if not already), grant `roles/run.invoker` to `allUsers`:

```powershell
gcloud run services add-iam-policy-binding budhgaya-com --region=europe-west1 --member="allUsers" --role="roles/run.invoker" --project=bodhgaya
```

Troubleshooting

- If you hit peer-dependency resolution errors during `npm install` on Cloud Build, the build uses `--legacy-peer-deps` (no changes required).
- If you need deterministic builds, consider committing `package-lock.json` and pinning dependency versions; document this workflow in the repo.
