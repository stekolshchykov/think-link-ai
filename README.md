# Think-Link-AI 🤖✨

Advanced AI assistant with multi-provider support and dynamic response routing.

This is a test project created for Simulated Work Experience by the Barber 4 group. It was developed by Vitali Stekolshchykov and Kateryna Butska.

The code serves as a working prototype and requires thorough testing before deployment to production.


## Features 🚀

- **Multi-provider AI**: Switch between OpenAI GPT-4o and DeepSeek
- **Smart Routing**: Automatic choice between knowledge base and AI generation
- **Multi-language Support**: Native handling of any language
- **Session Cache**: Redis-powered conversation context
- **Model Configuration**: Fine-tune parameters for each provider

## Quick Start 🛠️

### Prerequisites
- Node.js 18.x+
- Redis Server 6.x+
- API keys for selected providers

### Installation
```bash
git clone https://github.com/yourusername/think-link-ai.git
cd think-link-ai
npm install
cp .env.example .env
```

## Configuration ⚙️
Edit the .env file:


```JSON
PORT=3000
REDIS_URL=redis://localhost:6379
SESSION_SECRET=your_session_secret
FORM_CONFIGS={"contactForm":{"fields":["name","email","message"]}}
KNOWLEDGE_BASE='{"faq":[{"question":"What products do you offer?","answer":"We offer a wide range of electronics, including smartphones, laptops, and accessories."},{"question":"What are your shipping options?","answer":"We provide standard and express shipping options. Standard shipping is free for orders over $50."},{"question":"What is your return policy?","answer":"You can return any product within 30 days of purchase for a full refund. Please ensure the item is in its original condition."},{"question":"Do you offer customer support?","answer":"Yes, our customer support team is available 24/7 via live chat and email."},{"question":"Are there any ongoing promotions?","answer":"Currently, we have a 10% discount on all accessories. Use code 'ACCESSORY10' at checkout."}]}'
AI_PROVIDER=openai/deepseek
OPENAI_API_KEY=openai_api_key
DEEPSEEK_API_KEY=deepseek_api_key
```


## Running the System 🖥️
```bash
npm run dev
#or
npm run build
npm start
```

## System Architecture 🏗️

```bash
graph TD
    A[Client] --> B{API Gateway}
    B --> C[Knowledge Base]
    B --> D[AI Router]
    D -->|OpenAI| E[GPT-4o]
    C --> G[Response]
    E --> G
    F --> G
    G --> H[Redis Session]
API Endpoints 📡
Chat Interface
POST /api/v1/chat
```

Example Request:

```JSON
{
  "message": "How do I upgrade my subscription?"
}

```

Example Response:

```JSON
{
    "response": "We offer a wide range of electronics, including smartphones, laptops, and accessories."
}
```

License 📄
Distributed under the MIT License. See  [LICENSE](https://opensource.org/license/MIT)
