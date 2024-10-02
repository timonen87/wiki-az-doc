# FROM node:21.7.3-alpine as build
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . ./
# RUN npm run build
# EXPOSE 3000
# CMD ["npm", "start"]
## Base ########################################################################
# Use a larger node image to do the build for native deps (e.g., gcc, python)
# FROM node:lts as base

# # Reduce npm log spam and colour during install within Docker
# ENV NPM_CONFIG_LOGLEVEL=warn
# ENV NPM_CONFIG_COLOR=false

# # We'll run the app as the `node` user, so put it in their home directory
# RUN mkdir /app && chown node:node /app
# WORKDIR /app
# # Copy the source code over

# # USER node
# COPY --chown=node:node package.json package-lock.json* ./

# COPY --chown=node:node . .
# ## Development #################################################################
# # Define a development target that installs devDeps and runs in dev mode
# FROM base as development
# # WORKDIR /app
# # Install (not ci) with dependencies, and for Linux vs. Linux Musl (which we use for -alpine)
# RUN npm install
# # RUN npm run build
# # Switch to the node user vs. root
# USER node
# # Expose port 3000
# EXPOSE 3000
# # Start the app in debug mode so we can attach the debugger
# CMD ["npm", "start"]

# ## Production ##################################################################
# # Also define a production target which doesn't use devDeps
# FROM base as production
# WORKDIR /app
# COPY --chown=node:node --from=development ./app/node_modules /app/node_modules
# # Build the Docusaurus app
# RUN npm run build

# # ## Deploy ######################################################################
# # # Use a stable nginx image
# # FROM nginx:stable-alpine as deploy
# # WORKDIR /home/node/app
# # # Copy what we've installed/built from production
# # COPY --chown=node:node --from=production /home/node/app/build /usr/share/nginx/html/

# syntax=docker/dockerfile:1

# Stage 1: Base image.
## Start with a base image containing NodeJS so we can build Docusaurus.
FROM node:lts as base
## Disable colour output from yarn to make logs easier to read.
ENV FORCE_COLOR=0
## Enable corepack.
RUN corepack enable
## Set the working directory to `/opt/docusaurus`.
WORKDIR /opt/docusaurus

# Stage 2a: Development mode.
FROM base as dev
## Set the working directory to `/opt/docusaurus`.
WORKDIR /opt/docusaurus
## Expose the port that Docusaurus will run on.
EXPOSE 3000
## Run the development server.
CMD [ -d "node_modules" ] && npm run start --host 0.0.0.0 --poll 1000 || npm run install && npm run start --host 0.0.0.0 --poll 1000

# Stage 2b: Production build mode.
FROM base as prod
## Set the working directory to `/opt/docusaurus`.
WORKDIR /opt/docusaurus
## Copy over the source code.
COPY . /opt/docusaurus/
## Install dependencies with `--immutable` to ensure reproducibility.
# RUN npm ci
## Build the static site.
RUN npm run build

# Stage 3a: Serve with `docusaurus serve`.
FROM prod as serve
## Expose the port that Docusaurus will run on.
EXPOSE 3000
## Run the production server.
CMD ["npm", "run", "serve", "--", "--host", "0.0.0.0", "--no-open"]

# # Stage 3b: Serve with Caddy.
# FROM caddy:2-alpine as caddy
# ## Copy the Caddyfile.
# COPY --from=prod /opt/docusaurus/Caddyfile /etc/caddy/Caddyfile
# ## Copy the Docusaurus build output.
# COPY --from=prod /opt/docusaurus/build /var/docusaurus
