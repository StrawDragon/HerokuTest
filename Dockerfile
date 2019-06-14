FROM mhart/alpine-node:11.6.0
WORKDIR /usr/src/tp-app

COPY package.json ./

RUN npm i

COPY . ./

RUN npm run build-landing

EXPOSE 3000

CMD [ "npm", "run", "start-server"]