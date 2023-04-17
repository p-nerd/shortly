FROM node:18-alpine
WORKDIR /usr/src/app
RUN npm i -g yarn
COPY package.json .
COPY yarn.lock .
RUN yarn install
COPY . .
EXPOSE 4000
CMD [ "yarn", "dev" ]
