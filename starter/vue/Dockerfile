# Stage 0, "build-stage", based on Node.js
FROM node:16.15.0 as build-stage

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY pnpm-lock.yaml .gitignore ./
COPY . .

# If you are building your code for production
#RUN npm install --only=production
# RUN npm cache verify

RUN npm i -g pnpm
RUN pnpm config set store-dir /usr/src/app/.pnpm-store
RUN pnpm install
RUN pnpm build-only

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:latest

COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html
# Copy the default nginx.conf
# COPY --from=build-stage /usr/src/app/nginx.conf /etc/nginx/nginx.conf
COPY --from=build-stage /usr/src/app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
