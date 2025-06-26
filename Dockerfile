# Use lightweight Node 16 Alpine image
FROM node:16-alpine

# Set working directory inside container
WORKDIR /app

# Copy only dependency manifest files first
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the rest of your source code
COPY . .

# Expose port (must match your server.js port)
EXPOSE 5000

# Start the app
CMD ["node", "server.js"]
