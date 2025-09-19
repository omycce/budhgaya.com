FROM node:18-alpine
WORKDIR /app
COPY server/package*.json ./
RUN npm install --only=production
COPY server/ ./
ENV PORT=8080
EXPOSE 8080
CMD ["node","index.js"]
