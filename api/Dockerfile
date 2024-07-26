FROM node 

WORKDIR /usr/app

COPY package.json .

RUN yarn

COPY . .

EXPOSE 8080

CMD ["npm", "run", "dev"]