# # backend/Dockerfile

# # --- Build Stage ---
#   FROM node:20-alpine AS builder
#   WORKDIR /app
  
#   # 1) Bring in manifest & install ALL deps (including dev)
#   COPY package*.json tsconfig.json ./
#   RUN npm ci
  
#   # 2) Copy and compile your TS source
#   COPY src ./src
#   RUN npm run build
  
#   # --- Runtime Stage ---
#   FROM node:20-alpine
#   WORKDIR /app
  
#   # 3) Copy manifest (optional) and the full node_modules from build
#   COPY --from=builder /app/package*.json ./
#   COPY --from=builder /app/node_modules ./node_modules
  
#   # 4) Copy only your compiled output
#   COPY --from=builder /app/dist ./dist
  
#   # 5) Set defaults, expose port, add healthcheck
#   ENV PORT=3000 HOST=0.0.0.0
#   EXPOSE 3000
#   HEALTHCHECK --interval=30s --timeout=5s --start-period=10s \
#   CMD wget -qO- http://localhost:${PORT}/ping || exit 1
  
#   # 6) Drop to non-root user & start your server
#   CMD ["node","dist/index.js"]

# --- Build Stage ---
  FROM node:20-alpine AS builder
  WORKDIR /app
  
  COPY package*.json tsconfig.json ./
  RUN npm ci
  
  COPY src ./src
  RUN npm run build
  
  # --- Runtime Stage ---
  FROM node:20-alpine
  WORKDIR /app
  
  COPY --from=builder /app/package*.json ./
  COPY --from=builder /app/node_modules ./node_modules
  COPY --from=builder /app/dist ./dist
  
  ENV PORT=3000 HOST=0.0.0.0
  EXPOSE 3000
  
  CMD ["node", "dist/index.js"]
  