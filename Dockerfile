FROM node:18-alpine

# Установка рабочего каталога
WORKDIR /app

# Копирование файлов
COPY package*.json ./

# Установка зависимостей
RUN npm install --only=production

# Копирование исходного кода
COPY . .

# Компиляция TypeScript
RUN npm run build

# Экспонирование порта
EXPOSE 3000

# Запуск приложения
CMD ["npx", "pm2-runtime", "ecosystem.config.js"]
