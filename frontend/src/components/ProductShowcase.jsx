import React, { useState } from 'react';
import { Star, Heart, Eye, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { mockProducts } from '../data/mock';

const ProductShowcase = ({ isVisible, onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [favorites, setFavorites] = useState([]);

  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'electronics', name: 'Eletrônicos' },
    { id: 'fashion', name: 'Moda' },
    { id: 'home', name: 'Casa' },
    { id: 'beauty', name: 'Beleza' },
    { id: 'recommendations', name: 'Recomendações Personalizadas' }
  ];

  const filteredProducts =
    selectedCategory === 'all'
      ? mockProducts
      : mockProducts.filter(product => product.category === selectedCategory);

  const toggleFavorite = (productId) => {
    setFavorites(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  if (!isVisible) return null;

  // Links para os cards clicáveis
  const recomendacoesLink = 'https://s.shopee.com.br/4flu5MLHPQ';
  const ofertasWhatsappLink = 'https://wa.me/5531971747783';

  // Função para abrir link Shopee app
  const openShopeeAppLink = () => {
    window.open('https://s.shopee.com.br/4flu5MLHPQ', '_blank');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-4xl h-5/6 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b bg-orange-500 text-white rounded-t-lg">
          <h2 className="text-xl font-bold">Produtos Recomendados pela Lidi</h2>
          <Button variant="ghost" onClick={onClose} className="text-white hover:bg-orange-600">
            ✕
          </Button>
        </div>

        {/* Cards clicáveis conforme a imagem enviada */}
        <div className="flex flex-col md:flex-row gap-6 p-6">
          <Card
            onClick={() => window.open(recomendacoesLink, '_blank')}
            className="flex-1 cursor-pointer hover:shadow-lg transition-shadow bg-gradient-to-r from-orange-400 to-orange-600 text-white"
          >
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-2">Recomendações Personalizadas</h3>
              <p className="text-white/90 text-base">
                A Lidi analisa suas preferências e sugere produtos perfeitos para você.
              </p>
            </CardContent>
          </Card>

          <Card
            onClick={() => window.open(ofertasWhatsappLink, '_blank')}
            className="flex-1 cursor-pointer hover:shadow-lg transition-shadow bg-gradient-to-r from-green-600 to-green-800 text-white"
          >
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-2">Ofertas Exclusivas</h3>
              <p className="text-white/90 text-base">
                Acesso prioritário a promoções e descontos especiais da Shopee.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Categories */}
        <div className="p-4 border-b">
          <div className="flex gap-2 flex-wrap">
            {categories.map(category => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className={selectedCategory === category.id ? "bg-orange-500 hover:bg-orange-600" : ""}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid ou aba Recomendações */}
        <div className="flex-1 overflow-y-auto p-4">
          {selectedCategory === 'recommendations' ? (
            <div className="flex flex-col items-center justify-center h-full gap-4">
              <h3 className="text-lg font-semibold mb-2">Baixe o app da Shopee na Play Store</h3>
              <Button
                className="bg-orange-500 hover:bg-orange-600 text-white"
                onClick={openShopeeAppLink}
              >
                Baixar App da Shopee
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="group hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    {/* Product Image */}
                    <div className="relative mb-3 bg-gray-100 rounded-lg h-48 flex items-center justify-center">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="object-contain w-full h-full"
                        width="200"
                        height="200"
                      />

                      {/* Overlay buttons */}
                      <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button
                          size="sm"
                          variant="outline"
                          className="w-8 h-8 p-0 bg-white"
                          onClick={() => toggleFavorite(product.id)}
                        >
                          <Heart
                            className={`w-4 h-4 ${favorites.includes(product.id) ? 'fill-red-500 text-red-500' : ''}`}
                          />
                        </Button>
                        <Button size="sm" variant="outline" className="w-8 h-8 p-0 bg-white">
                          <Eye className="w-4 h-4" />
                        </Button>
                      </div>

                      {/* Discount badge */}
                      {product.discount && (
                        <Badge className="absolute top-2 left-2 bg-red-500 text-white">
                          -{product.discount}%
                        </Badge>
                      )}
                    </div>

                    {/* Product Info */}
                    <h3 className="font-semibold text-sm mb-2 line-clamp-2">{product.name}</h3>

                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${i < Math.floor(product.rating || 0) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                        />
                      ))}
                      {product.reviews != null && (
                        <span className="text-xs text-gray-600 ml-1">({product.reviews})</span>
                      )}
                    </div>

                    {/* Price */}
                    <div className="flex items-center gap-2 mb-3">
                      {product.originalPrice && product.originalPrice !== product.price ? (
                        <>
                          <span className="font-bold text-orange-500">
                            {product.price.startsWith('R$') ? product.price : `R$ ${product.price}`}
                          </span>
                          <span className="text-xs text-gray-500 line-through">
                            {product.originalPrice.startsWith('R$') ? product.originalPrice : `R$ ${product.originalPrice}`}
                          </span>
                        </>
                      ) : (
                        <span className="font-bold text-orange-500">
                          {product.price.startsWith('R$') ? product.price : `R$ ${product.price}`}
                        </span>
                      )}
                    </div>

                    {/* Link para Shopee + botão Comprar Agora */}
                    <div className="flex flex-col gap-2 mt-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1"
                        onClick={() => window.open(product.shopeeLink || 'https://shopee.com.br', '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Ver na Shopee
                      </Button>

                      {/* Shipping info */}
                      {product.freeShipping && (
                        <p className="text-xs text-green-600 mt-2 font-medium">Frete grátis</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
