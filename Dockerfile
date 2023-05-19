FROM node:alpine

WORKDIR /app

COPY package*.json .

RUN npm ci

COPY trainee_backend .

EXPOSE 5000

CMD ["npm","run","server"]