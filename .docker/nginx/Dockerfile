FROM nginx

# COPY nginx.conf /etc/nginx/conf.d/nginx.conf
COPY default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]