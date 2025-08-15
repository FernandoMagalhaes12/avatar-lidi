import React, { useState, useEffect } from "react";
import "./App.css";
import Avatar from "./components/Avatar";
import ProductShowcase from "./components/ProductShowcase";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { Sparkles, Gift } from "lucide-react";
import { Toaster } from "./components/ui/toaster";

const AppContent = () => {
  const [productsOpen, setProductsOpen] = useState(false);
  const [currentInteraction, setCurrentInteraction] = useState(null);

  // Remove automaticamente o "Made with Emergent" ao carregar
  useEffect(() => {
    const removeEmergent = () => {
      const elems = [...document.body.querySelectorAll("*")];
      elems.forEach((el) => {
        if (el.textContent.includes("Made with Emergent")) {
          el.remove();
        }
      });
    };
    removeEmergent();
  }, []);

  const handleAvatarInteraction = (type) => {
    setCurrentInteraction(type);

    switch (type) {
      case "products":
        setProductsOpen(true);
        break;
      default:
        break;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-orange-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Shopee Brasil</h1>
              <p className="text-sm text-gray-600">
                Com a Lidi, sua consultora virtual
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://play.google.com/store/apps/details?id=com.shopee.br"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                Baixar App
              </Button>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12 flex-grow">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Conheça a <span className="text-orange-500">Lidi</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Sua consultora virtual personalizada da Shopee. Ela te ajuda a
            encontrar os melhores produtos, ofertas exclusivas e responde todas
            as suas dúvidas sobre compras online.
          </p>
        </div>

        <div className="flex justify-center mb-16">
          <Avatar
            imageUrl="https://i.imgur.com/5qVK5jN.png"
            onInteraction={handleAvatarInteraction}
          />
        </div>

        {/* Features Section - cards centralizados */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-lg md:max-w-2xl mx-auto">
          {/* Card Recomendação */}
          <a
            href="https://s.shopee.com.br/4flu5MLHPQ"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col">
              <CardContent className="p-6 text-center flex flex-col justify-between h-full">
                <div>
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-6 h-6 text-orange-500" />
                  </div>
                  <h3 className="font-semibold mb-2">
                    Recomendações Personalizadas
                  </h3>
                  <p className="text-sm text-gray-600">
                    A Lidi analisa suas preferências e sugere produtos perfeitos
                    para você.
                  </p>
                </div>
              </CardContent>
            </Card>
          </a>

          {/* Card Ofertas */}
          <a
            href="https://chat.whatsapp.com/EVllvpCpbUM3S8f9pAjNju"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col">
              <CardContent className="p-6 text-center flex flex-col justify-between h-full">
                <div>
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Gift className="w-6 h-6 text-orange-500" />
                  </div>
                  <h3 className="font-semibold mb-2">Ofertas Exclusivas</h3>
                  <p className="text-sm text-gray-600">
                    Acesso prioritário a promoções e descontos especiais da
                    Shopee.
                  </p>
                </div>
              </CardContent>
            </Card>
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-700 text-white py-8 mt-auto">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>© 2025 Shopee Brasil - Avatar Virtual Lidi</p>
        </div>
      </footer>

      {/* Product Showcase Modal */}
      <ProductShowcase
        isVisible={productsOpen}
        onClose={() => setProductsOpen(false)}
      />

      {/* Toast notifications */}
      <Toaster />
    </div>
  );
};

function App() {
  return <AppContent />;
}

export default App;