import React, { useState, useEffect } from 'react';
import { Star, Heart, ExternalLink, Search } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { mockProducts } from '../data/mock';

const PartialStar = ({ fillPercent = 0 }) => (
  <svg
    className="w-4 h-4 text-yellow-400"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <defs>
      <linearGradient id={`partialGradient-${fillPercent}`} x1="0" y1="0" x2="1" y2="0">
        <stop offset={`${fillPercent * 100}%`} stopColor="#FBBF24" />
        <stop offset={`${fillPercent * 100}%`} stopColor="transparent" />
      </linearGradient>
    </defs>
    <path
      fill={`url(#partialGradient-${fillPercent})`}
      stroke="none"
      d="M12 17.27L18.18 21l-1.64-7.03
         L22 9.24l-7.19-.61L12 2 9.19 8.63
         2 9.24l5.46 4.73L5.82 21z"
    />
    <path
      d="M12 17.27L18.18 21l-1.64-7.03
         L22 9.24l-7.19-.61L12 2 9.19 8.63
         2 9.24l5.46 4.73L5.82 21z"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

const RatingStars = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const decimalPart = rating - fullStars;
  let partialFill = 0;

  if (decimalPart >= 0.75) partialFill = 1;
  else if (decimalPart >= 0.6) partialFill = 0.66;
  else if (decimalPart >= 0.45) partialFill = 0.5;
  else if (decimalPart >= 0.25) partialFill = 0.33;

  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<Star key={`full-${i}`} className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
  }

  if (partialFill > 0 && partialFill < 1) {
    stars.push(<PartialStar key="partial" fillPercent={partialFill} />);
  } else if (partialFill === 1) {
    stars.push(<Star key="partial" className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
  }

  const emptyStars = 5 - fullStars - (partialFill > 0 ? 1 : 0);
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />);
  }

  return <div className="flex gap-1">{stars}</div>;
};

const ProductImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  if (!images || images.length === 0) return null;

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative bg-gray-50 rounded-lg overflow-hidden">
      <div className="w-full aspect-square">
        <img
          src={images[currentIndex]}
          alt={`Imagem do produto ${currentIndex + 1}`}
          className="object-contain w-full h-full"
          loading="lazy"
        />
      </div>
      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            aria-label="Imagem anterior"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full p-1 hover:bg-black/60 select-none z-10"
          >
            ‹
          </button>
          <button
            onClick={nextImage}
            aria-label="Próxima imagem"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full p-1 hover:bg-black/60 select-none z-10"
          >
            ›
          </button>
        </>
      )}
    </div>
  );
};

const PRODUCTS_PER_PAGE = 25;

const ProductShowcase = ({ isVisible, onClose }) => {
  const [favorites, setFavorites] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [showFavorites, setShowFavorites] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isVisible ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [isVisible]);

  const filteredProducts = (showFavorites ? mockProducts.filter(p => favorites.includes(p.id)) : mockProducts)
    .filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const pagedProducts = filteredProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  const toggleFavorite = (productId) => {
    setFavorites(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  if (!isVisible) return null;

  const recomendacoesLink = 'https://s.shopee.com.br/4flu5MLHPQ';
  const ofertasWhatsappLink = 'https://wa.me/5531971747783';
  const goToPage = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-2 md:p-4">
      <div className="bg-white rounded-lg w-full max-w-7xl max-h-[95vh] flex flex-col overflow-hidden shadow-lg">

        {/* Header */}
        <div className="flex items-center justify-between p-3 md:p-4 border-b bg-orange-500 text-white rounded-t-lg flex-wrap md:flex-nowrap">
          <h2 className="text-sm sm:text-base md:text-xl font-bold truncate" style={{ maxWidth: 'calc(100% - 140px)' }}>
            Produtos Recomendados pela Lidi
          </h2>
          <div className="flex gap-2 mt-2 md:mt-0">
            <Button
              size="sm"
              variant={showFavorites ? 'default' : 'outline'}
              onClick={() => { setShowFavorites(!showFavorites); setCurrentPage(1); }}
            >
              {showFavorites ? 'Todos' : `Favoritos (${favorites.length})`}
            </Button>
            <Button variant="ghost" onClick={onClose} className="text-white hover:bg-orange-600 p-1 md:p-2 rounded">
              ✕
            </Button>
          </div>
        </div>

        {/* Carrossel superior */}
        <div className="flex flex-col md:flex-row gap-3 p-3 md:p-4">
          <Card
            onClick={() => window.open(recomendacoesLink, '_blank')}
            className="relative w-full md:w-60 flex-shrink-0 cursor-pointer hover:shadow-lg transition-shadow bg-gradient-to-r from-orange-400 to-orange-600 text-white px-3 py-4 text-center text-xs sm:text-sm md:text-sm rounded-md"
          >
            <h3 className="text-sm sm:text-base md:text-lg font-bold mb-1">Recomendações Personalizadas</h3>
            <p className="text-white/90 text-[9px] sm:text-[10px] md:text-xs leading-tight">
              A Lidi analisa suas preferências e sugere produtos perfeitos para você.
            </p>
          </Card>

          <Card
            onClick={() => window.open(ofertasWhatsappLink, '_blank')}
            className="relative w-full md:w-60 flex-shrink-0 cursor-pointer hover:shadow-lg transition-shadow bg-gradient-to-r from-green-600 to-green-800 text-white px-3 py-4 text-center text-xs sm:text-sm md:text-sm rounded-md"
          >
            <h3 className="text-sm sm:text-base md:text-lg font-bold mb-1">Ofertas Exclusivas</h3>
            <p className="text-white/90 text-[9px] sm:text-[10px] md:text-xs leading-tight">
              Acesso prioritário a promoções e descontos especiais da Shopee.
            </p>
          </Card>
        </div>

        {/* Search */}
        <div className="px-3 md:px-4 pb-3 md:pb-4 border-b">
          <div className="flex items-center gap-3 w-full max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Pesquisar produtos..."
              value={searchTerm}
              onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
              className="flex-grow px-3 py-2 text-xs sm:text-sm md:text-sm focus:outline-none rounded-md border border-gray-300"
            />
            <Button size="sm" variant="outline" className="p-2"><Search className="w-4 h-4" /></Button>
          </div>
        </div>

        {/* Grid produtos */}
        <div className="flex-1 overflow-y-auto p-3 md:p-4">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
            {pagedProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-shadow relative">
                <CardContent className="p-3 md:p-4">
                  <ProductImageCarousel
                    images={product.images && product.images.length ? product.images : [product.image]}
                  />
                  {/* FAVORITOS SEMPRE VISÍVEL */}
                  <div className="absolute top-2 right-2 flex gap-1">
                    <Button size="sm" variant="outline" className="w-7 h-7 p-0 bg-white" onClick={() => toggleFavorite(product.id)}>
                      <Heart className={`w-4 h-4 ${favorites.includes(product.id) ? 'fill-red-500 text-red-500' : ''}`} />
                    </Button>
                  </div>
                  <h3 className="font-semibold text-xs sm:text-sm md:text-sm mb-1 md:mb-2 line-clamp-2">{product.name}</h3>
                  <div className="flex items-center gap-1 mb-2">
                    <RatingStars rating={product.rating || 0} />
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    {product.originalPrice && product.originalPrice !== product.price ? (
                      <>
                        <span className="font-bold text-orange-500 text-sm sm:text-base md:text-base">
                          {product.price.startsWith('R$') ? product.price : `R$ ${product.price}`}
                        </span>
                        <span className="text-xs sm:text-sm md:text-sm text-gray-500 line-through">
                          {product.originalPrice.startsWith('R$') ? product.originalPrice : `R$ ${product.originalPrice}`}
                        </span>
                      </>
                    ) : (
                      <span className="font-bold text-orange-500 text-sm sm:text-base md:text-base">
                        {product.price.startsWith('R$') ? product.price : `R$ ${product.price}`}
                      </span>
                    )}
                  </div>
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
                    {product.freeShipping && <p className="text-xs sm:text-sm md:text-sm text-green-600 mt-2 font-medium">Frete grátis</p>}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Paginação */}
          <div className="flex justify-center items-center gap-2 mt-4 flex-wrap overflow-x-auto">
            <Button size="sm" variant="outline" onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>{'<'}</Button>
            {[...Array(totalPages).keys()].map((pageNum) => {
              const page = pageNum + 1;
              return (
                <Button
                  key={page}
                  size="sm"
                  variant={page === currentPage ? "default" : "outline"}
                  onClick={() => goToPage(page)}
                  className={page === currentPage ? "bg-orange-500 hover:bg-orange-600 text-white" : ""}
                >
                  {page}
                </Button>
              );
            })}
            <Button size="sm" variant="outline" onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>{'>'}</Button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductShowcase;