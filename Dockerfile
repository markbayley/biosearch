FROM nginx:1.19-alpine

COPY /build/ /usr/share/nginx/html/

COPY dockerfiles/nginx/ /etc/nginx/

# customise config file at /usr/share/nginx/html/config/config.json