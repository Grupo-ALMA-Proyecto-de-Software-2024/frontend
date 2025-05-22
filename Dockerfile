FROM node:18-alpine

WORKDIR /app

# Copy everything and install all dependencies
COPY . .
RUN npm install

# Set proper environment variables
ENV NEXT_PUBLIC_API_URL=http://backend:8000
ENV NODE_ENV=production

# Build the app
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
