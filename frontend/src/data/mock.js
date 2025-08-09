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
    name: "Smartphone Samsung Galaxy A54 128GB",
    price: "899,99",
    originalPrice: "1.199,99",
    discount: 25,
    category: "electronics",
    rating: 4,
    reviews: 1250,
    emoji: "📱",
    freeShipping: true
  },
  {
    id: 2,
    name: "Conjunto Feminino Cropped + Short",
    price: "49,90",
    originalPrice: "89,90",
    discount: 45,
    category: "fashion",
    rating: 5,
    reviews: 890,
    emoji: "👕",
    freeShipping: true
  },
  {
    id: 3,
    name: "Kit Skincare Facial Completo",
    price: "89,99",
    originalPrice: "149,99",
    discount: 40,
    category: "beauty",
    rating: 5,
    reviews: 2150,
    emoji: "🧴",
    freeShipping: true
  },
  {
    id: 4,
    name: "Jogo de Panelas Antiaderente 5 Peças",
    price: "159,90",
    originalPrice: "299,90",
    discount: 47,
    category: "home",
    rating: 4,
    reviews: 670,
    emoji: "🍳",
    freeShipping: true
  },
  {
    id: 5,
    name: "Fone Bluetooth JBL Tune 510BT",
    price: "199,99",
    originalPrice: "299,99",
    discount: 33,
    category: "electronics",
    rating: 5,
    reviews: 3400,
    emoji: "🎧",
    freeShipping: true
  },
  {
    id: 6,
    name: "Vestido Midi Floral Feminino",
    price: "79,90",
    originalPrice: "129,90",
    discount: 38,
    category: "fashion",
    rating: 4,
    reviews: 445,
    emoji: "👗",
    freeShipping: false
  },
  {
    id: 7,
    name: "Aspirador de Pó Vertical WAP",
    price: "249,99",
    originalPrice: "399,99",
    discount: 37,
    category: "home",
    rating: 4,
    reviews: 1890,
    emoji: "🧹",
    freeShipping: true
  },
  {
    id: 8,
    name: "Maquiagem Base Líquida + Pó Compacto",
    price: "39,99",
    originalPrice: "79,99",
    discount: 50,
    category: "beauty",
    rating: 4,
    reviews: 920,
    emoji: "💄",
    freeShipping: false
  },
  {
    id: 9,
    name: "Smart TV LED 43' 4K UHD",
    price: "1.399,99",
    originalPrice: "1.899,99",
    discount: 26,
    category: "electronics",
    rating: 5,
    reviews: 756,
    emoji: "📺",
    freeShipping: true
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