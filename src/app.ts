import express, { Application } from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
import config from './config';
import { sessionMiddleware } from './middlewares/session.middleware';
import chatbotRoutes from './routes/chatbot.route';
import formRoutes from './routes/form.route';
import systemRoutes from './routes/system.route';

const app: Application = express();

// Middleware для обработки данных и сессий
app.use(bodyParser.json());
app.use(sessionMiddleware);

// Подключение маршрутов
app.use('/api/chatbot', chatbotRoutes);
app.use('/api/forms', formRoutes);
app.use('/api/system', systemRoutes);

export default app;
