#FROM node
#RUN npm i -g nodemon
#USER node
#RUN mkdir /home/node/code
#WORKDIR /home/node/code
#COPY --chown=node:node package-lock.json package.json ./
#RUN npm ci
#COPY --chown=node:node . . 
#EXPOSE 3000
#CMD ["nodemon", "index.js"]

#  Dockerfile for Node Express Backend api (development)

FROM node:10.16-alpine

# ARG NODE_ENV=development

# Create App Directory
RUN mkdir -p /home/node/code
WORKDIR /home/node/code

# Install Dependencies
COPY package.json ./

RUN npm i

# Copy app source code
COPY . .

# Exports
EXPOSE 3001
CMD ["npm","start"]
COPY --chown=node:node package-lock.json package.json ./
RUN npm ci
COPY --chown=node:node . . 
EXPOSE 3001
CMD ["nodemon", "index.js"]
