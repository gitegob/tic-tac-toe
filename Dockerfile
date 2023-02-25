FROM node:16.16-slim As development
WORKDIR /usr/src/app
COPY ./package.json ./yarn.lock ./
RUN yarn install
COPY . .
RUN chown -R node /usr/src/app
USER node
CMD ["yarn", "start"]