FROM node:12

WORKDIR /usr/app

COPY package*.json ./

RUN yarn --pure-lockfile --no-progress && yarn cache clean

COPY . /usr/app

EXPOSE $PORT
ENV PORT $PORT
ENV NODE_ENV $NODE_ENV
CMD yarn dev-test