import request from 'supertest';
import app from '../app';

describe('Chatbot with Knowledge Base', () => {
  it('should return an answer from the knowledge base', async () => {
    const response = await request(app)
      .post('/api/chatbot/query')
      .send({ message: 'Как вернуть товар?' });

    expect(response.status).toBe(200);
    expect(response.body.response).toBe('Свяжитесь с поддержкой через форму возврата.');
  });

  it('should return a default answer if no match is found', async () => {
    const response = await request(app)
      .post('/api/chatbot/query')
      .send({ message: 'Непонятный вопрос' });

    expect(response.status).toBe(200);
    expect(response.body.response).toBe('Извините, я не могу ответить на этот вопрос.');
  });
});
