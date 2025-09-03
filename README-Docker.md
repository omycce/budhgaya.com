# Dockerfile added for Cloud Build

This repository didn't have a Dockerfile at the repository root which Cloud Build expects at `/workspace/Dockerfile`.

The included `Dockerfile` builds the `server/` Node app and exposes port 8080.

To build locally on Windows PowerShell:

```powershell
# Build the image
docker build -t budhgaya-server:latest .

# Run the container
docker run -p 8080:8080 budhgaya-server:latest
```
