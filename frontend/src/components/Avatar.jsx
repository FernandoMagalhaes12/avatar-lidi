import React, { useState, useEffect } from 'react';
import { MessageCircle, ShoppingBag, Search, Headphones, Gift, Smartphone } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent } from './ui/card';

const Avatar = ({ onInteraction }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentExpression, setCurrentExpression] = useState('smile');
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    // Animação de piscada automática
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 200);
    }, 3000);

    return () => clearInterval(blinkInterval);
  }, []);

  const handleInteraction = (type) => {
    setIsAnimating(true);
    setCurrentExpression('talking');
    onInteraction(type);
    
    setTimeout(() => {
      setIsAnimating(false);
      setCurrentExpression('smile');
    }, 2000);
  };

  return (
    <div className="relative">
      {/* Avatar Container */}
      <div className={`relative transition-transform duration-500 ${isAnimating ? 'scale-105' : 'scale-100'}`}>
        {/* Background decorativo */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-pink-200 rounded-full w-80 h-80 -z-10 opacity-50"></div>
        
        {/* Flores decorativas */}
        <div className="absolute -top-4 -left-4 text-pink-300 opacity-60">
          <div className="w-8 h-8 bg-pink-300 rounded-full opacity-40"></div>
        </div>
        <div className="absolute -top-6 right-8 text-pink-300 opacity-60">
          <div className="w-6 h-6 bg-pink-300 rounded-full opacity-40"></div>
        </div>
        <div className="absolute bottom-4 -right-6 text-pink-300 opacity-60">
          <div className="w-10 h-10 bg-pink-300 rounded-full opacity-40"></div>
        </div>

        {/* Avatar principal */}
        <div className="relative w-72 h-80 mx-auto">
          {/* Corpo */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
            <div className="w-40 h-32 bg-orange-500 rounded-t-3xl relative">
              {/* Camiseta da Shopee */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-white font-bold text-lg">
                Shopee
              </div>
              {/* Crachá */}
              <div className="absolute top-16 left-1/2 transform -translate-x-1/2">
                <div className="bg-white rounded px-3 py-1 text-black text-sm font-semibold border-2 border-gray-300">
                  Lidi
                </div>
                <div className="w-1 h-8 bg-black mx-auto"></div>
              </div>
            </div>
          </div>

          {/* Cabeça */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
            <div className="w-32 h-36 bg-orange-200 rounded-full relative">
              {/* Cabelo */}
              <div className="absolute -top-2 -left-4 w-40 h-32 bg-amber-900 rounded-full"></div>
              <div className="absolute -top-1 -left-2 w-36 h-28 bg-amber-800 rounded-full"></div>
              
              {/* Rosto */}
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-28 h-24 bg-orange-200 rounded-full">
                {/* Sobrancelhas */}
                <div className="absolute top-4 left-6 w-4 h-1 bg-amber-900 rounded-full transform rotate-12"></div>
                <div className="absolute top-4 right-6 w-4 h-1 bg-amber-900 rounded-full transform -rotate-12"></div>
                
                {/* Olhos */}
                <div className="absolute top-6 left-5 w-4 h-4 bg-white rounded-full">
                  <div className={`absolute top-1 left-1 w-3 h-3 bg-black rounded-full transition-all ${isBlinking ? 'h-0' : 'h-3'}`}>
                    <div className="absolute top-0.5 left-0.5 w-1 h-1 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="absolute top-6 right-5 w-4 h-4 bg-white rounded-full">
                  <div className={`absolute top-1 left-1 w-3 h-3 bg-black rounded-full transition-all ${isBlinking ? 'h-0' : 'h-3'}`}>
                    <div className="absolute top-0.5 left-0.5 w-1 h-1 bg-white rounded-full"></div>
                  </div>
                </div>

                {/* Nariz */}
                <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-1 h-2 bg-orange-300 rounded-full"></div>

                {/* Boca */}
                <div className={`absolute top-14 left-1/2 transform -translate-x-1/2 transition-all ${
                  currentExpression === 'talking' ? 'w-4 h-3 bg-red-400 rounded-full' : 'w-6 h-1 bg-red-400 rounded-full'
                }`}></div>
              </div>
            </div>
          </div>

          {/* Braços */}
          <div className="absolute top-32 -left-8">
            <div className="w-6 h-16 bg-orange-200 rounded-full transform rotate-12"></div>
          </div>
          <div className="absolute top-32 -right-8">
            <div className="w-6 h-16 bg-orange-200 rounded-full transform -rotate-12"></div>
          </div>
        </div>

        {/* Efeitos de interação */}
        {isAnimating && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-4 h-4 bg-orange-400 rounded-full animate-ping"></div>
          </div>
        )}
      </div>

      {/* Botões de interação */}
      <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 flex gap-2 flex-wrap justify-center max-w-xs">
        <Button 
          size="sm" 
          variant="outline" 
          onClick={() => handleInteraction('chat')}
          className="bg-orange-50 hover:bg-orange-100 border-orange-200"
        >
          <MessageCircle className="w-4 h-4 mr-1" />
          Conversar
        </Button>
        <Button 
          size="sm" 
          variant="outline" 
          onClick={() => handleInteraction('products')}
          className="bg-orange-50 hover:bg-orange-100 border-orange-200"
        >
          <ShoppingBag className="w-4 h-4 mr-1" />
          Produtos
        </Button>
        <Button 
          size="sm" 
          variant="outline" 
          onClick={() => handleInteraction('search')}
          className="bg-orange-50 hover:bg-orange-100 border-orange-200"
        >
          <Search className="w-4 h-4 mr-1" />
          Buscar
        </Button>
        <Button 
          size="sm" 
          variant="outline" 
          onClick={() => handleInteraction('support')}
          className="bg-orange-50 hover:bg-orange-100 border-orange-200"
        >
          <Headphones className="w-4 h-4 mr-1" />
          Ajuda
        </Button>
      </div>
    </div>
  );
};

export default Avatar;