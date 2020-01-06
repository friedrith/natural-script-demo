###############################################################################
# Step 1 : Builder image
#
FROM mhart/alpine-node:10

WORKDIR /app

# Define working directory and copy source
COPY . .

WORKDIR /app/frontend


RUN yarn config set cache ~/.yarn-cache
# Install dependencies and build whatever you have to build
# (babel, grunt, webpack, etc.)
RUN yarn --mutex network
RUN yarn
RUN yarn build

WORKDIR /app/backend

RUN yarn --mutex network
RUN yarn
RUN yarn build

WORKDIR /app

# Expose ports (for orchestrators and dynamic reverse proxies)
EXPOSE 3000

# Start the app
CMD ["node", "backend/dist/bin.js"]
