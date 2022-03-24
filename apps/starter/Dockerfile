# Stage 0, "build-stage", based on Node.js
FROM node:14.15.4 as build-stage

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package.json .gitignore ./

# Bundle app source
COPY . .

#RUN rm -rf node_modules

# RUN npm run init

# If you are building your code for production
#RUN npm install --only=production
# RUN npm cache verify
ENV GITLAB_AUTH_TOKEN=mBs8zs7Agwd7eoYREBbh

RUN npm install

RUN npm run build

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:latest

COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html
# Copy the default nginx.conf
# COPY --from=build-stage /usr/src/app/nginx.conf /etc/nginx/nginx.conf
COPY --from=build-stage /usr/src/app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

