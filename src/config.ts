import dotenv from 'dotenv';

dotenv.config();

interface Config {
  AI_PROVIDER: string;
  OPENAI_API_KEY?: string;
  DEEPSEEK_API_KEY?: string;
  PORT: number;
  REDIS_URL: string;
  SESSION_SECRET: string;
  FORM_CONFIGS: Record<string, any>;
  KNOWLEDGE_BASE: { faq: FAQ[] };
}

interface FAQ {
  question: string;
  answer: string;
}

const config: Config = {
  AI_PROVIDER: process.env.AI_PROVIDER || 'openai',
  OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  DEEPSEEK_API_KEY: process.env.DEEPSEEK_API_KEY,
  PORT: Number(process.env.PORT) || 3000,
  REDIS_URL: process.env.REDIS_URL || 'redis://localhost:6379',
  SESSION_SECRET: process.env.SESSION_SECRET || 'default_secret',
  FORM_CONFIGS: process.env.FORM_CONFIGS ? JSON.parse(process.env.FORM_CONFIGS) : {},
  KNOWLEDGE_BASE: process.env.KNOWLEDGE_BASE ? JSON.parse(process.env.KNOWLEDGE_BASE) : { faq: [] },
};

export default config;
