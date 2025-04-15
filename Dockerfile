FROM node:19 AS build
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build --configuration production

FROM nginx:1.25-alpine
COPY --from=build /app/dist/tarefas-front /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]