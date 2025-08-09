import React from 'react';
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader } from './ui/card';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalItems,
    getTotalPrice,
    isCartOpen,
    closeCart,
  } = useCart();

  const formatPrice = (price) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  };

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-lg max-h-[80vh] flex flex-col">
        <CardHeader className="flex flex-row items-center justify-between py-3 bg-orange-500 text-white rounded-t-lg">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5" />
            <span className="font-semibold">
              Meu Carrinho ({getTotalItems()})
            </span>
          </div>
          <Button size="sm" variant="ghost" onClick={closeCart} className="text-white hover:bg-orange-600">
            <X className="w-4 h-4" />
          </Button>
        </CardHeader>
        
        <CardContent className="flex-1 flex flex-col p-0">
          {cartItems.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
              <ShoppingBag className="w-16 h-16 text-gray-300 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Carrinho vazio</h3>
              <p className="text-gray-600 mb-4">Adicione produtos para começar suas compras!</p>
              <Button onClick={closeCart} className="bg-orange-500 hover:bg-orange-600">
                Continuar Comprando
              </Button>
            </div>
          ) : (
            <>
              {/* Items List */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-3 p-3 border rounded-lg">
                    {/* Product Image/Emoji */}
                    <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center text-2xl">
                      {item.emoji}
                    </div>
                    
                    {/* Product Info */}
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm line-clamp-2 mb-1">
                        {item.name}
                      </h4>
                      
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-bold text-orange-500">
                          R$ {item.price}
                        </span>
                        {item.freeShipping && (
                          <span className="text-xs text-green-600 font-medium">
                            Frete grátis
                          </span>
                        )}
                      </div>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="w-8 h-8 p-0"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="w-3 h-3" />
                          </Button>
                          
                          <span className="w-8 text-center font-semibold">
                            {item.quantity}
                          </span>
                          
                          <Button
                            size="sm"
                            variant="outline"
                            className="w-8 h-8 p-0"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="w-3 h-3" />
                          </Button>
                        </div>
                        
                        <Button
                          size="sm"
                          variant="outline"
                          className="w-8 h-8 p-0 text-red-500 hover:text-red-600"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <Trash2 className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Footer */}
              <div className="border-t p-4 space-y-4">
                {/* Total */}
                <div className="flex items-center justify-between text-lg font-bold">
                  <span>Total:</span>
                  <span className="text-orange-500">
                    {formatPrice(getTotalPrice())}
                  </span>
                </div>
                
                {/* Actions */}
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    onClick={clearCart}
                    className="flex-1"
                  >
                    Limpar Carrinho
                  </Button>
                  
                  <Button
                    className="flex-1 bg-orange-500 hover:bg-orange-600"
                    onClick={() => {
                      // Aqui você pode implementar a lógica de checkout
                      alert('Redirecionando para checkout...');
                    }}
                  >
                    Finalizar Compra
                  </Button>
                </div>
                
                <div className="text-center">
                  <Button
                    variant="ghost"
                    onClick={closeCart}
                    className="text-gray-600"
                  >
                    Continuar Comprando
                  </Button>
                </div>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Cart;