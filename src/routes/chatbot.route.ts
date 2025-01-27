import { Router } from 'express';
import { handleChatRequest } from '../controllers/chatbot.controller';

const router = Router();

router.post('/chat', handleChatRequest);

export default router;
