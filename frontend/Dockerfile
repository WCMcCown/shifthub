# Use Node 20 LTS
FROM node:20

# Set working directory
WORKDIR /app

# Copy package files first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the frontend code
COPY . .

# Build the Vite app
RUN npm run build

# Expose frontend port
EXPOSE 3000

# Start Vite preview server
CMD ["npm", "run", "preview"]
