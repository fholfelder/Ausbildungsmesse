# ---------- Base ----------
FROM oven/bun:1 AS base

WORKDIR /app

# ---------- Dependencies ----------
FROM base AS install

COPY package.json bun.lock* ./

# install deps (Bun statt npm)
RUN bun install

# ---------- Build ----------
FROM install AS build

COPY . .

RUN bun run build

# ---------- Run ----------
FROM oven/bun:1 AS run

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3210

# optional: simple static server via bun
RUN bun add -g serve

COPY --from=build /app/dist ./dist

EXPOSE 3210

CMD ["serve", "-s", "dist", "-l", "3210"]