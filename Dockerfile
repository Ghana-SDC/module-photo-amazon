FROM node:9
RUN mkdir /Photo_Gallery
ADD /component /Photo_Gallery
WORKDIR /Photo_Gallery
RUN npm install
RUN npm run build

EXPOSE 1337
