import { createAIClient, AIClient } from '@vercel/ai';
import config from '../config';
import { createLogger, transports, format } from 'winston';

interface FAQ {
  question: string;
  answer: string;
}

// Логгер для записей запросов и ответов
const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp(),
    format.json()
  ),
  transports: [new transports.Console()],
});

export class ChatbotService {
  private client: AIClient;
  private knowledgeBase: FAQ[];

  constructor() {
    // Инициализация AI-клиента с использованием API-ключа
    this.client = createAIClient({
      provider: 'deepseek', // Укажите провайдера
      apiKey: config.AI_API_KEY,
    });

    // Загрузка базы знаний из конфигурации
    this.knowledgeBase = config.KNOWLEDGE_BASE.faq || [];
  }

  // Обработка сообщений пользователя
  async processMessage(sessionId: string, message: string): Promise<string> {
    // Проверяем базу знаний
    const matchedFAQ = this.knowledgeBase.find(faq =>
      message.toLowerCase().includes(faq.question.toLowerCase())
    );

    if (matchedFAQ) {
      logger.info({
        sessionId,
        question: message,
        answer: matchedFAQ.answer,
        source: 'knowledgeBase',
      });
      return matchedFAQ.answer;
    }

    // Если нет совпадений, отправляем запрос через AI-клиент
    const response = await this.client.query({
      input: message,
      sessionId,
    });

    const answer = response.answer || 'Извините, я не могу ответить на этот вопрос.';
    logger.info({
      sessionId,
      question: message,
      answer,
      source: 'AIClient',
    });

    return answer;
  }
}
