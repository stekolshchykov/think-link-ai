FROM node:18-alpine

# Установка рабочего каталога
WORKDIR /app

# Копирование файлов
COPY package*.json ./

# Установка всех зависимостей
RUN npm install

# Копирование исходного кода
COPY . .

# Компиляция TypeScript
RUN npm run build

# Удаление devDependencies после сборки
RUN npm prune --production

# Экспонирование порта
EXPOSE 3000

# Запуск приложения
CMD ["npx", "pm2-runtime", "ecosystem.config.js"]
