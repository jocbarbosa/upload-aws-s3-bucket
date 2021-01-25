FROM node:14.15.4
ENV NODE_ENV=PRODUCTION
COPY . /var/www
WORKDIR /var/www
RUN npm install
ENTRYPOINT [ "npm", "start" ]
EXPOSE 3000