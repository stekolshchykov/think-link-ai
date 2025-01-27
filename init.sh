#!/bin/bash

# Инициализация npm
npm init -y

# Создание файлов и директорий
mkdir -p src/{controllers,middlewares,routes,services,interfaces,tests}
touch src/{app.ts,server.ts,config.ts}
touch Dockerfile tsconfig.json ecosystem.config.js README.md

# Создание примера контроллеров, маршрутов и тестов
echo "// Placeholder for chatbot controller" > src/controllers/chatbot.controller.ts
echo "// Placeholder for chatbot route" > src/routes/chatbot.route.ts
echo "// Placeholder for chatbot tests" > src/tests/chatbot.test.ts

echo "// Placeholder for form controller" > src/controllers/form.controller.ts
echo "// Placeholder for form route" > src/routes/form.route.ts
echo "// Placeholder for form tests" > src/tests/form.test.ts

echo "// Placeholder for system controller" > src/controllers/system.controller.ts
echo "// Placeholder for system route" > src/routes/system.route.ts
echo "// Placeholder for system tests" > src/tests/system.test.ts

echo "// Placeholder for session interface" > src/interfaces/session.interface.ts
echo "// Placeholder for form interface" > src/interfaces/form.interface.ts

# Инициализация git-репозитория
git init
echo "node_modules/" > .gitignore

# Вывод успешного завершения
echo "Проект ThinkLink AI успешно инициализирован!"
