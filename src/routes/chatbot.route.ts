import { Router } from 'express';
import { handleChatRequest } from '../controllers/chatbot.controller';

const router = Router();

router.post('/chat', async (req, res, next) => {
  try {
    await handleChatRequest(req, res);
  } catch (error) {
    next(error);
  }
});

export default router;
