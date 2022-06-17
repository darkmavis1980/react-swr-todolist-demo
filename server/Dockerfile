# Cached node
FROM node:lts-alpine AS base

# Change workdir
WORKDIR /usr/src/workdir

COPY . .

RUN npm install

EXPOSE 7878

CMD ["npm", "start"]