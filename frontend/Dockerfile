# Step 1: Build stage
FROM node:20 AS builder

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy project files
COPY . .

# Build the frontend
RUN npm run build

# Step 2: Production stage to serve static files
FROM node:20

# Install `serve` to serve the built frontend
RUN npm install -g serve

# Copy built files from builder stage
COPY --from=builder /app/dist /app/dist

# Set working directory
WORKDIR /app

# Expose the port (same as in vite.config.js and IIS URL)
EXPOSE 1100

# Start the server
CMD ["serve", "-s", "dist", "-l", "1100"]
