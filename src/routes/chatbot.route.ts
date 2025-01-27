import { Router } from 'express';
import { handleChat } from '../controllers/chatbot.controller';

const router = Router();

// POST маршрут для обработки сообщений чат-бота
router.post('/query', handleChat);

export default router;
