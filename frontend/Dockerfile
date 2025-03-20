# 1. Usar la imagen oficial de Node.js para construir Angular
FROM node:18-alpine AS build

# 2. Establecer el directorio de trabajo
WORKDIR /app

# 3. Copiar archivos del frontend
COPY package.json package-lock.json ./

# 4. Instalar dependencias
RUN npm install

# 5. Copiar el resto del código y construir Angular
COPY . .
RUN npx ng build --configuration=production

# 6. Usar Nginx para servir la app en el contenedor final
FROM nginx:alpine
COPY --from=build /app/dist/frontend/browser /usr/share/nginx/html

# 7. Exponer el puerto de Nginx
EXPOSE 80
