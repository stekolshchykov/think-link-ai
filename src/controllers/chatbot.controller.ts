import { Request, Response } from 'express';
import { ChatbotService } from '../services/chatbot.service';

const chatbotService = new ChatbotService();

export const handleChat = async (req: Request, res: Response) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const response = await chatbotService.processMessage(req.sessionID, message);
    res.json({ response });
  } catch (error) {
    console.error('Error in chatbot controller:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
