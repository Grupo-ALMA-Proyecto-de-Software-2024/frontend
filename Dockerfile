# Stage 1: Base image with dependencies for development and production
FROM node:18-alpine AS base
WORKDIR /app
# Copy package.json and the lock file
COPY package.json package-lock.json* ./
# Install dependencies. Using npm install to match original Dockerfile.
RUN npm install

# Stage 2: Development server
# This stage is used for local development with docker-compose.
FROM base AS development
WORKDIR /app
COPY . .
# The command is specified in docker-compose.yaml, but this provides a good default.
CMD ["npm", "run", "dev"]

# Stage 3: Production builder
# This stage builds the application for production.
FROM base AS builder
WORKDIR /app
COPY . .
RUN npm run build

# Stage 4: Production image
# This is the final, lean image for production.
FROM node:18-alpine AS production
WORKDIR /app
ENV NODE_ENV=production

# Copy only the necessary files from the builder and base stages
COPY --from=builder /app/.next ./.next
COPY --from=base /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

COPY --from=builder /app/public ./public

EXPOSE 3000
CMD ["npm", "start"]
