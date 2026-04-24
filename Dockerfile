# Use Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Copy files
COPY . .

# Install dependencies (if package.json exists)
RUN npm install

# Expose port
EXPOSE 3000

# Start app
CMD ["node", "app.js"]
