
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
# WORKDIR /home/node/app
# # Copy the source code over
# Stage 1: Base image.
## Start with a base image containing NodeJS so we can build Docusaurus.
FROM node:lts as base
## Disable colour output from yarn to make logs easier to read.

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
