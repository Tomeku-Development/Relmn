# 1. Base Image
FROM node:18-alpine AS base

# 2. Install pnpm
RUN npm install -g pnpm

# 3. Create app directory
WORKDIR /usr/src/app

# 4. Copy dependency definitions
COPY package.json pnpm-lock.yaml ./

# 5. Install dependencies
RUN pnpm install --prod

# 6. Copy source code
COPY dist ./dist

# 7. Expose port and run the app
EXPOSE 3001
CMD [ "node", "dist/main" ]
