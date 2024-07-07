# Development Dockerfile

# Use an official Node runtime as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package.json package-lock.json ./

# Install the project dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose port 5173 to the outside world
EXPOSE 5173

# Start the app
CMD ["npm", "run", "dev"]
