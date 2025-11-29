# budhgaya.com

## Simple Cloud Run deploy (Windows PowerShell)

Use the provided script to build and deploy using the root Dockerfile:

```powershell
# From repo root
./scripts/deploy.ps1 -Project bodhgaya -Region us-central1 -Service budhgaya-server
```

Defaults if omitted:
- Project: bodhgaya
- Region: us-central1
- Service: budhgaya-server

Prereqs:
- gcloud CLI authenticated: `gcloud auth login`
- Docker available (Cloud Build runs in GCP; local Docker not required)

## Email Subscription Setup

The email subscription feature requires Gmail credentials to send emails. To set this up:

1. **Create a Gmail App Password:**
   - Go to your Google Account settings
   - Enable 2-Step Verification if not already enabled
   - Go to Security → App passwords
   - Generate a new app password for "Mail"
   - Copy the 16-character password

2. **Set Environment Variables:**
   - For local development, create a `.env` file in the `server` directory:
     ```
     GMAIL_USER=your-email@gmail.com
     GMAIL_APP_PASSWORD=your-16-char-app-password
     ```
   - For Cloud Run deployment, set these as environment variables in your Cloud Run service:
     ```powershell
     gcloud run services update budhgaya-server --set-env-vars GMAIL_USER=your-email@gmail.com,GMAIL_APP_PASSWORD=your-16-char-app-password
     ```

**Note:** The entered emails will be sent to the Gmail address specified in `GMAIL_USER`.