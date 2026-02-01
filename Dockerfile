# Giai đoạn 1: Development
FROM node:20-alpine AS dev
WORKDIR /app

COPY package*.json ./
RUN npm install --include=dev

COPY . .
EXPOSE 5173
CMD ["npm", "start"]

# Giai đoạn 2: Build (for production)
FROM node:20-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm install --include=dev

COPY . .
RUN npm run build

# Giai đoạn 3: Serve bằng Nginx (production)
FROM nginx:stable-alpine AS production
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
