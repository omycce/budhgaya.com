# Use a small static webserver image to serve the build
FROM nginx:stable-alpine AS runtime
COPY build /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 8080 (Cloud Run uses 8080 by default)
EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
