require('dotenv').config();
const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

(async () => {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: 'Olá, teste!' }],
    });
    console.log('Resposta da OpenAI:', response.choices[0].message.content);
  } catch (error) {
    console.error('Erro ao chamar a OpenAI:', error);
  }
})();
