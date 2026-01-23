# ---------- Build ----------
FROM oven/bun:1.3.0-alpine AS build
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile
COPY . .
RUN bun run build

# ---------- Runtime ----------
FROM nginx:1.27-alpine
WORKDIR /usr/share/nginx/html

# Limpieza y configuración
RUN rm -f /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiamos el build
COPY --from=build /app/dist .

# Crear plantilla inmutable para envsubst
RUN cp index.html index.html.template

EXPOSE 80

# Inyección dinámica al arrancar el contenedor
CMD ["/bin/sh", "-c", "envsubst < index.html.template > index.html && nginx -g 'daemon off;'"]
