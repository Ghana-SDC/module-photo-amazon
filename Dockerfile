FROM node:9
RUN mkdir /Photo_Gallery
WORKDIR /Photo_Gallery
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 1337
CMD ["npm", "start"]