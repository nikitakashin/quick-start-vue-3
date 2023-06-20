FROM node:16.13.0-alpine

RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app

ENV DOCKER=true

COPY . /usr/src/nuxt-app/
RUN npm i
RUN npm run build

EXPOSE 3003

CMD [ "npx", "http-server", "dist", "-p", "3003" ]
