FROM nginx:1.15.0-alpine
COPY default.conf etc/nginx/conf.d/default.conf
COPY ./dist /usr/share/nginx/html
