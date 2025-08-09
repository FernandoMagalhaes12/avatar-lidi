import React, { useState } from 'react';
import { Star, ShoppingCart, Heart, Eye } from 'lucide-react';
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
    { id: 'beauty', name: 'Beleza' }
  ];

  const filteredProducts = selectedCategory === 'all' 
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

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-4xl h-5/6 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b bg-orange-500 text-white rounded-t-lg">
          <h2 className="text-xl font-bold">Produtos Recomendados pela Lidi</h2>
          <Button variant="ghost" onClick={onClose} className="text-white hover:bg-orange-600">
            ✕
          </Button>
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

        {/* Products Grid */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  {/* Product Image */}
                  <div className="relative mb-3 bg-gray-100 rounded-lg h-48 flex items-center justify-center">
                    <div className="text-4xl">{product.emoji}</div>
                    
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
                        className={`w-3 h-3 ${i < product.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                    <span className="text-xs text-gray-600 ml-1">({product.reviews})</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-bold text-orange-500">R$ {product.price}</span>
                    {product.originalPrice && (
                      <span className="text-xs text-gray-500 line-through">
                        R$ {product.originalPrice}
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      className="flex-1 bg-orange-500 hover:bg-orange-600 text-white"
                    >
                      <ShoppingCart className="w-4 h-4 mr-1" />
                      Comprar
                    </Button>
                  </div>

                  {/* Shipping info */}
                  {product.freeShipping && (
                    <p className="text-xs text-green-600 mt-2 font-medium">Frete grátis</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;