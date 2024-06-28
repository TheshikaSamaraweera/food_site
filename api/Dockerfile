FROM node:17-alpine

WORKDIR /app/api

COPY package.json .

RUN npm install

COPY . .

EXPOSE 5001

CMD [ "npm", "start" ]
