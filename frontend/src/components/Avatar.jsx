import React from 'react';
import { ShoppingBag, Search, Headphones } from 'lucide-react';
import { Button } from './ui/button';

const Avatar = ({ onInteraction, imageUrl }) => {
  return (
    <div className="relative w-80 mx-auto">
      {/* Imagem do Avatar */}
      <img
        src={imageUrl}
        alt="Avatar"
        className="rounded-full w-80 h-80 object-cover"
      />

      {/* Botões em linha, centralizados abaixo do avatar */}
      <div className="absolute bottom-19 left-1/2 transform -translate-x-1/2 flex gap-2 flex-nowrap justify-center w-full max-w-xs">
        <Button
          size="sm"
          variant="outline"
          onClick={() => onInteraction('products')}
          className="bg-orange-50 hover:bg-orange-100 border-orange-200"
          aria-label="Produtos"
        >
          <ShoppingBag className="w-4 h-4 mr-1" />
          Produtos
        </Button>
        
        <Button
          size="sm"
          variant="outline"
          onClick={() => window.open("https://wa.me/5531971747783", "_blank")}
          className="bg-orange-50 hover:bg-orange-100 border-orange-200"
          aria-label="Ajuda"
        >
          <Headphones className="w-4 h-4 mr-1" />
          Ajuda
        </Button>
      </div>
    </div>
  );
};

export default Avatar;