FROM node:8.11.4-alpine

ENV APPF=/appFront

WORKDIR $APPF
COPY package.json $APPF
COPY package-lock.json $APPF

RUN npm install

COPY . $APPF

CMD ["npm", "start"]
