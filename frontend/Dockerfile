# filepath: c:\Users\pesca\OneDrive\trading-studio\frontend\Dockerfile
FROM node:18-bullseye
RUN apk add --no-cache python3 make g++
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm rebuild --force && npm install --force --silent
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host"]