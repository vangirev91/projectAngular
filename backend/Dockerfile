# 1. Usar la imagen oficial de Node.js
FROM node:18-alpine

# 2. Establecer el directorio de trabajo
WORKDIR /app

# 3. Copiar los archivos del backend
COPY package.json package-lock.json ./

# 4. Instalar dependencias
RUN npm install

# 5. Copiar el resto del código
COPY . .

# 6. Construir el código de TypeScript a JavaScript
RUN npm run build

# 7. Exponer el puerto de NestJS
EXPOSE 3000

# 8. Comando de inicio del backend
CMD ["npm", "run", "start:prod"]
