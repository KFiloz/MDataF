# Usar una imagen base oficial de Node.js
FROM node:18-alpine AS builder

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos del proyecto al contenedor
COPY package.json package-lock.json ./ 

# Instalar las dependencias
RUN npm install

# Copiar el resto de los archivos del proyecto
COPY . .

# Crear una compilación de producción del proyecto Next.js
RUN npm run build

# Fase de producción
FROM node:18-alpine AS production

# Establecer el directorio de trabajo para producción
WORKDIR /app

# Copiar las dependencias necesarias para producción
COPY --from=builder /app/package.json /app/package-lock.json ./
RUN npm install --production

# Copiar los archivos compilados
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Configurar la variable de entorno para Next.js
ENV NODE_ENV=production
ENV PORT=3000

# Exponer el puerto donde correrá la aplicación
EXPOSE 3000

# Comando por defecto para iniciar la aplicación
CMD ["npm", "start"]

#COPY .env.local .env.local

