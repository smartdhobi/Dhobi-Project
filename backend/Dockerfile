# Base image
FROM node:20

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Install optional global tools if needed (optional)
# RUN npm install -g nodemon

# Expose the port from .env (default: 1200)
EXPOSE 1200

# Start the app
CMD ["node", "index.js"]
