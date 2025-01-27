import { Request, Response } from 'express';
import { FormService } from '../services/form.service';

const formService = new FormService();

export const submitForm = async (req: Request, res: Response) => {
  try {
    const { formId, data } = req.body;

    if (!formId || !data) {
      return res.status(400).json({ error: 'Form ID and data are required' });
    }

    const result = await formService.processForm(formId, data);
    res.status(200).json({ message: 'Form submitted successfully', result });
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
