FROM node:alpine
## Disable colour output from yarn to make logs easier to read.

# Stage 2b: Production build mode.
## Set the working directory to `/opt/docusaurus`.
RUN mkdir /app
WORKDIR /app
## Copy over the source code.
COPY . /app
## Install dependencies with `--immutable` to ensure reproducibility.
RUN npm install
RUN npm run build

EXPOSE 3000
## Run the production server.
CMD ["npm", "run", "serve", "--", "--host", "0.0.0.0", "--no-open"]
