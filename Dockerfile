FROM node:14.17.6-alpine3.12

USER node

WORKDIR /home/api

RUN npm i -g @nestjs/cli

