import React, { useState, useEffect, useRef } from 'react';
import { Send, X } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardHeader } from './ui/card';

const ChatInterface = ({ isOpen, onClose, interactionType }) => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Gere um userId simples para identificar o usuário na sessão
  const userId = React.useMemo(() => {
    return (
      localStorage.getItem('userId') ||
      (() => {
        const newId = `user-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
        localStorage.setItem('userId', newId);
        return newId;
      })()
    );
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && interactionType) {
      const welcomeMessage = 'Oi! Sou a Lidi, sua consultora da Shopee. Como posso te ajudar hoje?';
      setMessages([
        {
          id: Date.now(),
          text: welcomeMessage,
          sender: 'lidi',
          timestamp: new Date(),
        },
      ]);
    }
  }, [isOpen, interactionType]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    try {
      const response = await fetch('http://localhost:4000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, message: userMessage.text }),
      });

      const data = await response.json();

      const lidiMessage = {
        id: Date.now() + 1,
        text: data.reply || 'Desculpe, não consegui obter resposta.',
        sender: 'lidi',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, lidiMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          text: 'Erro ao conectar com a assistente. Tente novamente mais tarde.',
          sender: 'lidi',
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md h-96 flex flex-col">
        <CardHeader className="flex flex-row items-center justify-between py-3 bg-orange-500 text-white rounded-t-lg">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-orange-500 font-bold text-sm">L</span>
            </div>
            <span className="font-semibold">Lidi - Consultora Shopee</span>
          </div>
          <Button size="sm" variant="ghost" onClick={onClose} className="text-white hover:bg-orange-600">
            <X className="w-4 h-4" />
          </Button>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col p-0">
          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-3 py-2 rounded-lg ${
                    message.sender === 'user' ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <span className="text-xs opacity-70">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 px-3 py-2 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: '0.1s' }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: '0.2s' }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t flex gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Digite sua mensagem..."
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              className="flex-1"
            />
            <Button
              onClick={handleSendMessage}
              disabled={!inputValue.trim()}
              className="bg-orange-500 hover:bg-orange-600"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChatInterface;
