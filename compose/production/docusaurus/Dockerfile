## Base ########################################################################
# Use a larger node image to do the build for native deps (e.g., gcc, python)
FROM node:lts

# Reduce npm log spam and colour during install within Docker
ENV NPM_CONFIG_LOGLEVEL=warn
ENV NPM_CONFIG_COLOR=false

# We'll run the app as the `node` user, so put it in their home directory
WORKDIR /home/node/app
# Copy the source code over
COPY --chown=node:node . /home/node/app/

RUN npm install

RUN npm run build

USER node
# Expose port 3000
EXPOSE 3000

# CMD ["npm", "run", "serve", "--", "--host", "0.0.0.0", "--no-open"]

