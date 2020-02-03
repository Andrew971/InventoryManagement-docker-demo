FROM node:12
WORKDIR /usr/app

COPY package*.json ./

RUN yarn --pure-lockfile --no-progress && yarn cache clean
# RUN mkdir ./logs
COPY . /usr/app
HEALTHCHECK --interval=30s CMD node healthcheck.js

EXPOSE $PORT
ENV PORT $PORT
ENV NODE_ENV $NODE_ENV
CMD npm run dev