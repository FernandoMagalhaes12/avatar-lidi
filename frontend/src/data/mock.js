export const mockResponses = {
  welcomeMessages: {
    chat: "Oi! Sou a Lidi, sua consultora da Shopee! 😊 Estou aqui para te ajudar a encontrar os melhores produtos e ofertas. O que você está procurando hoje?",
    products: "Vamos ver alguns produtos incríveis que selecionei especialmente para você! Qual categoria te interessa mais?",
    search: "Perfeito! Me conta o que você está procurando e eu vou encontrar as melhores opções na Shopee para você!",
    support: "Estou aqui para te ajudar! Pode me fazer qualquer pergunta sobre produtos, entregas, pagamentos ou promoções da Shopee."
  },

  generalResponses: [
    "Interessante! Na Shopee temos várias opções que podem te interessar. Posso te mostrar alguns produtos relacionados?",
    "Que legal! Deixe-me verificar as melhores ofertas disponíveis para você na Shopee.",
    "Ótima pergunta! Como sua consultora, sempre busco as melhores opções com melhor custo-benefício.",
    "Posso te ajudar a encontrar exatamente o que precisa! A Shopee tem uma variedade incrível de produtos.",
    "Adorei sua escolha! Vou te mostrar as opções mais populares e bem avaliadas pelos clientes."
  ],

  priceResponses: [
    "Os preços na Shopee são super competitivos! Temos desde opções econômicas até produtos premium. Qual é seu orçamento?",
    "Excelente pergunta sobre preços! Na Shopee você encontra as melhores ofertas do mercado, especialmente durante nossas promoções.",
    "Sobre valores, a Shopee sempre tem descontos incríveis! Posso te mostrar produtos em promoção agora?",
    "Os preços variam, mas garanto que na Shopee você encontra o melhor custo-benefício! Quer ver algumas ofertas especiais?"
  ],

  productResponses: [
    "Temos produtos incríveis! Desde eletrônicos até moda e casa. O que mais te interessa?",
    "A variedade de produtos na Shopee é fantástica! Eletrônicos, beleza, casa, moda... tem de tudo!",
    "Adoro falar sobre nossos produtos! Temos desde smartphones até produtos de beleza. Qual categoria você prefere?",
    "Os produtos da Shopee são selecionados com muito cuidado! Todos com garantia e entrega rápida."
  ],

  shippingResponses: [
    "A entrega da Shopee é super rápida! Muitos produtos chegam em 24-48h, e o frete grátis está disponível em várias compras!",
    "Sobre entrega, a Shopee tem as melhores opções! Frete grátis para compras acima de um valor mínimo e entrega expressa disponível.",
    "Entrega rápida é nossa especialidade! Rastreamento em tempo real e várias opções de frete, incluindo grátis!",
    "As entregas são confiáveis e rápidas! Você pode acompanhar seu pedido pelo app da Shopee."
  ],

  promotionResponses: [
    "Temos promoções incríveis todos os dias! Flash sales, cupons de desconto e ofertas especiais. Quer ver as promoções ativas?",
    "Adoro as promoções da Shopee! Sempre tem desconto em produtos populares. Qual categoria você quer ver em promoção?",
    "As promoções são o forte da Shopee! Descontos de até 90%, frete grátis e cashback. Não perca!",
    "Promoções imperdíveis todos os dias! Cadastre-se nas notificações para não perder nenhuma oferta especial!"
  ]
};

export const mockProducts = [
  {
    id: 1,
    name: "Smartphone Samsung Galaxy A25 5G 256GB",
    price: "1.269,00",
    originalPrice: "1.599,00",
    discount: 21,
    category: "electronics",
    rating: 5,
    reviews: 2847,
    emoji: "📱",
    freeShipping: true,
    image: "https://images.shopee.com.br/galaxy-a25-5g.jpg",
    shopeeLink: "https://s.shopee.com.br/1g8I0vF7Rc"
  },
  {
    id: 2,
    name: "Calça Pantalona Feminina Wide Leg",
    price: "69,90",
    originalPrice: "129,90",
    discount: 46,
    category: "fashion",
    rating: 5,
    reviews: 3421,
    emoji: "👖",
    freeShipping: true,
    image: "https://images.shopee.com.br/calca-pantalona.jpg",
    shopeeLink: "https://s.shopee.com.br/1qRiFmdToO"
  },
  {
    id: 3,
    name: "Lip Tint Coreano 3CE Velvet Original",
    price: "39,90",
    originalPrice: "59,90",
    discount: 33,
    category: "beauty",
    rating: 5,
    reviews: 4892,
    emoji: "💄",
    freeShipping: true,
    image: "https://images.shopee.com.br/lip-tint-3ce.jpg",
    shopeeLink: "https://s.shopee.com.br/2qKFRdmT5F"
  },
  {
    id: 4,
    name: "Fritadeira Elétrica Air Fryer Gaabor Jumbo 5.5L",
    price: "199,00",
    originalPrice: "349,90",
    discount: 43,
    category: "home",
    rating: 5,
    reviews: 8956,
    emoji: "🍳",
    freeShipping: true,
    image: "https://images.shopee.com.br/air-fryer-gaabor.jpg",
    shopeeLink: "https://s.shopee.com.br/50Ok1dmcDu"
  },
  {
    id: 5,
    name: "Headphone Sem Fio QCY H3 ANC Cancelamento Ruído",
    price: "209,00",
    originalPrice: "399,00",
    discount: 48,
    category: "electronics",
    rating: 5,
    reviews: 5634,
    emoji: "🎧",
    freeShipping: true,
    image: "https://images.shopee.com.br/qcy-h3-anc.jpg",
    shopeeLink: "https://s.shopee.com.br/2VhP34uV2z"
  },
  {
    id: 6,
    name: "Sutiã Esportivo Sem Costura Fitness",
    price: "29,90",
    originalPrice: "49,90",
    discount: 40,
    category: "fashion",
    rating: 5,
    reviews: 2156,
    emoji: "👙",
    freeShipping: false,
    image: "https://images.shopee.com.br/sutia-esportivo.jpg",
    shopeeLink: "https://s.shopee.com.br/3qCmdZxpuz"
  },
  {
    id: 7,
    name: "Smart TV LG 43\" LED FHD 43LR671C0SA",
    price: "1.489,90",
    originalPrice: "1.899,00",
    discount: 22,
    category: "electronics",
    rating: 5,
    reviews: 1876,
    emoji: "📺",
    freeShipping: true,
    image: "https://images.shopee.com.br/smart-tv-lg-43.jpg",
    shopeeLink: "https://shopee.com.br/smart-tv-lg"
  },
  {
    id: 8,
    name: "Touca de Cetim Antifrizz para Cabelos",
    price: "19,90",
    originalPrice: "39,90",
    discount: 50,
    category: "beauty",
    rating: 5,
    reviews: 6734,
    emoji: "🧢",
    freeShipping: false,
    image: "https://images.shopee.com.br/touca-cetim.jpg",
    shopeeLink: "https://shopee.com.br/touca-cetim"
  },
  {
    id: 9,
    name: "Papel de Parede Adesivo 3D Tijolinho",
    price: "24,90",
    originalPrice: "49,90",
    discount: 50,
    category: "home",
    rating: 4,
    reviews: 3456,
    emoji: "🧱",
    freeShipping: false,
    image: "https://images.shopee.com.br/papel-parede-3d.jpg",
    shopeeLink: "https://shopee.com.br/papel-parede"
  },
  {
    id: 10,
    name: "Liquidificador Philips Walita 1200W",
    price: "189,90",
    originalPrice: "279,90",
    discount: 32,
    category: "home",
    rating: 5,
    reviews: 2345,
    emoji: "🥤",
    freeShipping: true,
    image: "https://images.shopee.com.br/liquidificador-philips.jpg",
    shopeeLink: "https://shopee.com.br/liquidificador"
  },
  {
    id: 11,
    name: "Tênis Feminino Branco para Academia",
    price: "89,90",
    originalPrice: "149,90",
    discount: 40,
    category: "fashion",
    rating: 5,
    reviews: 4567,
    emoji: "👟",
    freeShipping: true,
    image: "https://images.shopee.com.br/tenis-feminino-branco.jpg",
    shopeeLink: "https://shopee.com.br/tenis-feminino"
  },
  {
    id: 12,
    name: "Esponja Esfoliante Facial de Konjac Natural",
    price: "12,90",
    originalPrice: "24,90",
    discount: 48,
    category: "beauty",
    rating: 4,
    reviews: 1876,
    emoji: "🧽",
    freeShipping: false,
    image: "https://images.shopee.com.br/esponja-konjac.jpg",
    shopeeLink: "https://shopee.com.br/esponja-facial"
  }
];

export const mockPromotions = [
  {
    id: 1,
    title: "Flash Sale - 24 Horas",
    description: "Descontos de até 80% em produtos selecionados",
    timeRemaining: "23:45:12",
    products: [1, 3, 5, 7]
  },
  {
    id: 2,
    title: "Frete Grátis Nationwide",
    description: "Frete grátis em compras acima de R$ 79",
    timeRemaining: "Válido até 31/12",
    products: "all"
  },
  {
    id: 3,
    title: "Cashback 20%",
    description: "20% de volta em produtos de beleza",
    timeRemaining: "7 dias restantes",
    products: [3, 8]
  }
];