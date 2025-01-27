import request from 'supertest';
import app from '../app';

describe('Form Controller', () => {
  it('should successfully submit a valid form', async () => {
    const response = await request(app)
      .post('/api/forms/submit')
      .send({
        formId: 'contactForm',
        data: { name: 'John Doe', email: 'john@example.com', message: 'Hello!' },
      });

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Form submitted successfully');
  });

  it('should return an error for missing fields', async () => {
    const response = await request(app)
      .post('/api/forms/submit')
      .send({
        formId: 'contactForm',
        data: { name: 'John Doe' }, // Missing email and message
      });

    expect(response.status).toBe(400);
    expect(response.body.error).toContain('Missing required fields');
  });

  it('should return an error for invalid form ID', async () => {
    const response = await request(app)
      .post('/api/forms/submit')
      .send({
        formId: 'invalidForm',
        data: { name: 'John Doe', email: 'john@example.com', message: 'Hello!' },
      });

    expect(response.status).toBe(500);
    expect(response.body.error).toContain('Form with ID "invalidForm" not found');
  });
});
