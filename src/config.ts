import dotenv from 'dotenv';

dotenv.config();

interface Config {
  PORT: number;
  REDIS_URL: string;
  AI_API_KEY: string;
  SESSION_SECRET: string;
  FORM_CONFIGS: Record<string, any>;
  KNOWLEDGE_BASE: Record<string, any>;
}

const config: Config = {
  PORT: Number(process.env.PORT) || 3000,
  REDIS_URL: process.env.REDIS_URL || 'redis://localhost:6379',
  AI_API_KEY: process.env.AI_API_KEY || '',
  SESSION_SECRET: process.env.SESSION_SECRET || 'default_secret',
  FORM_CONFIGS: process.env.FORM_CONFIGS ? JSON.parse(process.env.FORM_CONFIGS) : {},
  KNOWLEDGE_BASE: process.env.KNOWLEDGE_BASE ? JSON.parse(process.env.KNOWLEDGE_BASE) : {},
};

export default config;
