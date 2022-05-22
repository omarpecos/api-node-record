FROM node:16-alpine
WORKDIR /api
COPY package.json yarn.lock ./
RUN yarn --frozen-lockfile
COPY . .
EXPOSE 9000
CMD yarn start