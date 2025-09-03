# Dockerfile - builds the Node server located in the `server/` folder
FROM node:18-alpine AS builder

WORKDIR /app

# Install client dependencies and build the React app
COPY client/package*.json ./client/
WORKDIR /app/client
# Use npm install with --legacy-peer-deps to avoid peer dependency conflicts (react-scripts vs typescript)
RUN npm install --legacy-peer-deps
COPY client/ ./
RUN npm run build

FROM node:18-alpine


WORKDIR /app

# Copy server files
COPY server/package*.json ./
# Install only production deps for the server
RUN npm install --only=production
COPY server/ ./

# Copy built client into server/build
COPY --from=builder /app/client/build ./build

ENV PORT=8080
EXPOSE 8080

CMD ["node", "index.js"]
