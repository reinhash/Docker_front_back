FROM node:alpine
WORKDIR /usr/src/app
RUN yarn add express && yarn install
COPY . .
EXPOSE 3001
CMD ["yarn", "start"]