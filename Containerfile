# ---------- Build ----------
FROM oven/bun:1.3.0-alpine AS build

WORKDIR /app

# Copiamos solo lo necesario para cachear dependencias
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# Copiamos el resto y construimos
COPY . .
RUN bun run build


# ---------- Runtime ----------
FROM nginx:1.27-alpine

# Eliminamos config por defecto
RUN rm -f /etc/nginx/conf.d/default.conf \
    && rm -rf /usr/share/nginx/html/*

# Copiamos configuración optimizada
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiamos solo el resultado final
COPY --from=build /app/dist /usr/share/nginx/html

# Variables de entorno en runtime
COPY public/env.template.js /usr/share/nginx/html/env.template.js

COPY env.sh /env.sh

RUN chmod +x /env.sh

EXPOSE 80

ENTRYPOINT ["/env.sh"]


# Evita que nginx corra en background
# CMD ["nginx", "-g", "daemon off;"]
