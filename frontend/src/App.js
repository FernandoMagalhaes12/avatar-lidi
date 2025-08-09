import React, { useState } from "react";
import "./App.css";
import Avatar from "./components/Avatar";
import ChatInterface from "./components/ChatInterface";
import ProductShowcase from "./components/ProductShowcase";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { Sparkles, Zap, Heart, Gift } from "lucide-react";

function App() {
  const [chatOpen, setChatOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [currentInteraction, setCurrentInteraction] = useState(null);

  const handleAvatarInteraction = (type) => {
    setCurrentInteraction(type);
    
    switch (type) {
      case 'chat':
        setChatOpen(true);
        break;
      case 'products':
        setProductsOpen(true);
        break;
      case 'search':
        setChatOpen(true);
        break;
      case 'support':
        setChatOpen(true);
        break;
      default:
        setChatOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-orange-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Shopee Brasil</h1>
              <p className="text-sm text-gray-600">Com a Lidi, sua consultora virtual</p>
            </div>
          </div>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white">
            Baixar App
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Conheça a <span className="text-orange-500">Lidi</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Sua consultora virtual personalizada da Shopee. Ela te ajuda a encontrar os melhores produtos, 
            ofertas exclusivas e responde todas as suas dúvidas sobre compras online.
          </p>
        </div>

        {/* Avatar Section */}
        <div className="flex justify-center mb-16">
          <Avatar onInteraction={handleAvatarInteraction} />
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="font-semibold mb-2">Recomendações Personalizadas</h3>
              <p className="text-sm text-gray-600">
                A Lidi analisa suas preferências e sugere produtos perfeitos para você.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="font-semibold mb-2">Atendimento Instantâneo</h3>
              <p className="text-sm text-gray-600">
                Respostas rápidas 24/7 para todas suas dúvidas sobre produtos e entregas.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="font-semibold mb-2">Experiência Humanizada</h3>
              <p className="text-sm text-gray-600">
                Interação natural e amigável, como conversar com um amigo especialista.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="font-semibold mb-2">Ofertas Exclusivas</h3>
              <p className="text-sm text-gray-600">
                Acesso prioritário a promoções e descontos especiais da Shopee.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl text-white p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Experimente agora a Lidi!</h3>
          <p className="text-lg mb-6 opacity-90">
            Clique no avatar da Lidi e descubra uma nova forma de comprar na Shopee.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            onClick={() => handleAvatarInteraction('chat')}
            className="bg-white text-orange-600 hover:bg-gray-100"
          >
            Começar Conversa
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 Shopee Brasil - Avatar Virtual Lidi desenvolvido com tecnologia avançada de IA
          </p>
        </div>
      </footer>

      {/* Modals */}
      <ChatInterface 
        isOpen={chatOpen} 
        onClose={() => setChatOpen(false)}
        interactionType={currentInteraction}
      />
      
      <ProductShowcase 
        isVisible={productsOpen}
        onClose={() => setProductsOpen(false)}
      />
    </div>
  );
}

export default App;