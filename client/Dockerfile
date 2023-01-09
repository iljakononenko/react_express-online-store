FROM node:17.5 as build-stage

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

#CMD ["npm", "start"]

RUN npm run build

FROM nginx:latest as production-stage
RUN mkdir /app
COPY --from=build-stage /app/build /app
COPY nginx.conf /etc/nginx/nginx.conf
