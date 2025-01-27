import axios from 'axios';
import config from '../config';

interface FormConfig {
  endpoint: string;
  fields: string[];
}

export class FormService {
  private formConfigs: Record<string, FormConfig>;

  constructor() {
    this.formConfigs = config.FORM_CONFIGS;
  }

  async processForm(formId: string, data: Record<string, any>): Promise<any> {
    const formConfig = this.formConfigs[formId];

    if (!formConfig) {
      throw new Error(`Form with ID "${formId}" not found`);
    }

    // Валидация данных
    const missingFields = formConfig.fields.filter(field => !data[field]);
    if (missingFields.length > 0) {
      throw new Error(`Missing required fields: ${missingFields.join(', ')}`);
    }

    // Отправка данных на указанный API
    const response = await axios.post(formConfig.endpoint, data);
    return response.data;
  }
}
