# Dockerfile - builds the Node server located in the `server/` folder
FROM node:18-alpine

WORKDIR /app

# Install only production dependencies from server/package.json
COPY server/package*.json ./
RUN npm ci --only=production

# Copy server source
COPY server/ ./

ENV PORT=8080
EXPOSE 8080

CMD ["node", "index.js"]
