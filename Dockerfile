FROM node:14-alpine AS builder
MAINTAINER Kamil Kalisz <kamil.kalisz@gmail.com>

ENV NODE_ENV production
# Add a work directory
WORKDIR /app
# Cache and Install dependencies
COPY build/package.json .
COPY build/yarn.lock .
RUN yarn install
# Copy app files
COPY build/ .
# Build the app

RUN echo $(ls)

RUN yarn install

RUN yarn build


# Bundle static assets with nginx
#FROM node:14-alpine as production
#ENV NODE_ENV production
#
#WORKDIR /app
#
## Copy built assets from builder
#COPY --from=builder /app/build .
#
## Install `serve` to run the application.
#RUN npm install -g serve
#
#EXPOSE 3000
## Start nginx
##CMD [ "yarn", "start" ]
#CMD serve -s build

# Bundle static assets with nginx
FROM nginx:1.21.0-alpine as production
MAINTAINER Kamil Kalisz <kamil.kalisz@gmail.com>

ENV NODE_ENV production
# Copy built assets from builder
COPY --from=builder /app/build /usr/share/nginx/html
# Add your nginx.conf
COPY build/nginx.conf /etc/nginx/conf.d/default.conf
# Expose port
EXPOSE 3000
# Start nginx
CMD ["nginx", "-g", "daemon off;"]