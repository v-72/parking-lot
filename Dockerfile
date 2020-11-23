FROM node:12
WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install
COPY . .

EXPOSE 9001 3306
CMD [ "node", "app.js" ]