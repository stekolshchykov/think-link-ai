import { Request, Response } from 'express';
import { generateResponse } from '../services/ai.service';

export async function handleChatRequest(req: Request, res: Response) {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  try {
    const response = await generateResponse(message);
    res.json({ response });
  } catch (error) {
    console.error('Error generating response:', error);
    res.status(500).json({ error: 'Failed to generate response' });
  }
}
