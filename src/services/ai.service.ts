import config from '../config';
import { generateText } from 'ai';
import { openai } from '@ai-sdk/openai';
import { deepseek } from '@ai-sdk/deepseek';

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
  // Check the knowledge base first
  const matchedFAQ = config.KNOWLEDGE_BASE.faq.find((faq: { question: string }) =>
    prompt.toLowerCase().includes(faq.question.toLowerCase())
  );

  console.log('Matched FAQ:', JSON.stringify(config.KNOWLEDGE_BASE.faq));
  console.log("prompt", prompt)

  if (matchedFAQ) {
    return matchedFAQ.answer;
  }

  // If no match is found, proceed with AI model
  const model = getProvider();
  const { text } = await generateText({
    model,
    prompt: `${prompt}. Check if the answer is in my knowledge base first: ${config.KNOWLEDGE_BASE.faq}`,
  });
  return text;
}
