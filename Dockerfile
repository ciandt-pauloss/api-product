FROM node:lts-alpine
RUN mkdir -p /opt/app
WORKDIR /opt/app
COPY package.json .
RUN npm install --production
COPY src/ .
EXPOSE 3000
CMD ["npm", "start"]