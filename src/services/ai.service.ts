import { generateText } from 'ai';
import { openai } from '@ai-sdk/openai';
import { deepseek } from '@ai-sdk/deepseek';
import config from '../config';

function getProvider() {
  switch (config.AI_PROVIDER) {
    case 'openai':
      if (!config.OPENAI_API_KEY) {
        throw new Error('OPENAI_API_KEY is not defined');
      }
      return openai('gpt-4', {
        apiKey: config.OPENAI_API_KEY,
      } as any);
    case 'deepseek':
      if (!config.DEEPSEEK_API_KEY) {
        throw new Error('DEEPSEEK_API_KEY is not defined');
      }
      return deepseek('deepseek-chat', {
        apiKey: config.DEEPSEEK_API_KEY,
      } as any);
    default:
      throw new Error(`Unsupported AI provider: ${config.AI_PROVIDER}`);
  }
}

export async function generateResponse(prompt: string): Promise<string> {
  const model = getProvider();
  const { text } = await generateText({
    model,
    prompt,
  });
  return text;
}
