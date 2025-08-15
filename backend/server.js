// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const OpenAI = require('openai');

const app = express();
app.use(cors());
app.use(express.json());

// Configuração da OpenAI
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// Rota de teste simples
app.get('/', (req, res) => {
  res.send('Servidor do Avatar Lidi rodando 🚀');
});

// Rota para o chat
app.post('/chat', async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Mensagem não fornecida' });
    }

    const completion = await client.chat.completions.create({
      model: 'gpt-3.5-turbo', // Pode trocar para outro modelo se quiser
      messages: [{ role: 'user', content: message }]
    });

    res.json({ reply: completion.choices[0].message.content });
  } catch (error) {
    console.error('Erro na API OpenAI:', error);
    res.status(500).json({ error: 'Erro ao processar a resposta da IA' });
  }
});

// Inicia o servidor
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});