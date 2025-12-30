#!/bin/sh
set -e

# Genera env.js reemplazando variables
envsubst < /usr/share/nginx/html/env.template.js > /usr/share/nginx/html/env.js

# Arranca nginx
exec nginx -g "daemon off;"
