export const mockResponses = {
  welcomeMessages: {
    chat: "Oi! Sou a Lidi, sua consultora da Shopee! 😊 Estou aqui para te ajudar a encontrar os melhores produtos e ofertas. O que você está procurando hoje?",
    products: "Vamos ver alguns produtos incríveis que selecionei especialmente para você! Qual categoria te interessa mais?",
    search: "Perfeito! Me conta o que você está procurando e eu vou encontrar as melhores opções na Shopee para você!",
    support: "Estou aqui para te ajudar! Pode me fazer qualquer pergunta sobre produtos, entregas, pagamentos ou promoções da Shopee."
  },

  generalResponses: [
    "Interessante! Na Shopee temos várias opções que podem te interessar. Posso te mostrar alguns produtos relacionados? Não esqueça de verificar seu carrinho no ícone superior direito!",
    "Que legal! Deixe-me verificar as melhores ofertas disponíveis para você na Shopee. Todos os produtos podem ser adicionados ao seu carrinho para compra posterior!",
    "Ótima pergunta! Como sua consultora, sempre busco as melhores opções com melhor custo-benefício. Você pode adicionar os produtos no carrinho e finalizar a compra quando quiser!",
    "Posso te ajudar a encontrar exatamente o que precisa! A Shopee tem uma variedade incrível de produtos. Use o carrinho para guardar seus favoritos!",
    "Adorei sua escolha! Vou te mostrar as opções mais populares e bem avaliadas pelos clientes. Lembre-se de adicionar ao carrinho os produtos que te interessarem!"
  ],

  priceResponses: [
    "Os preços na Shopee são super competitivos! Temos desde opções econômicas até produtos premium. Qual é seu orçamento?",
    "Excelente pergunta sobre preços! Na Shopee você encontra as melhores ofertas do mercado, especialmente durante nossas promoções.",
    "Sobre valores, a Shopee sempre tem descontos incríveis! Posso te mostrar produtos em promoção agora?",
    "Os preços variam, mas garanto que na Shopee você encontra o melhor custo-benefício! Quer ver algumas ofertas especiais?"
  ],

  productResponses: [
    "Temos produtos incríveis e reais da Shopee! Desde eletrônicos até moda e casa. Use o botão 'Adicionar ao Carrinho' para guardar seus favoritos!",
    "A variedade de produtos na Shopee é fantástica! Eletrônicos, beleza, casa, moda... tem de tudo! Todos com links diretos para a Shopee oficial!",
    "Adoro falar sobre nossos produtos reais! Temos desde smartphones Samsung até produtos de beleza coreanos. Adicione ao carrinho e compare preços!",
    "Os produtos da Shopee são selecionados com muito cuidado! Todos com garantia, avaliações reais e entrega rápida. Use nosso carrinho virtual para organizar suas compras!"
  ],

  shippingResponses: [
    "A entrega da Shopee é super rápida! Muitos produtos chegam em 24-48h, e o frete grátis está disponível em várias compras!",
    "Sobre entrega, a Shopee tem as melhores opções! Frete grátis para compras acima de um valor mínimo e entrega expressa disponível.",
    "Entrega rápida é nossa especialidade! Rastreamento em tempo real e várias opções de frete, incluindo grátis!",
    "As entregas são confiáveis e rápidas! Você pode acompanhar seu pedido pelo app da Shopee."
  ],

  promotionResponses: [
    "Temos promoções incríveis todos os dias! Flash sales, cupons de desconto e ofertas especiais. Adicione os produtos no carrinho para não perder as ofertas!",
    "Adoro as promoções da Shopee! Sempre tem desconto em produtos populares. Use nosso carrinho para guardar os produtos em promoção e compare preços!",
    "As promoções são o forte da Shopee! Descontos de até 90%, frete grátis e cashback. Adicione ao carrinho e aproveite!",
    "Promoções imperdíveis todos os dias! Use nosso sistema de carrinho para organizar suas compras e não perder nenhuma oferta especial!"
  ],

  cartResponses: [
    "Seu carrinho está te esperando no ícone superior direito! Lá você pode gerenciar quantidades, remover itens e finalizar sua compra na Shopee.",
    "Adicionei o produto ao seu carrinho! Clique no ícone do carrinho para ver todos os itens salvos e calcular o total da sua compra.",
    "Seu carrinho virtual está funcionando perfeitamente! Você pode adicionar quantos produtos quiser e depois finalizar a compra diretamente na Shopee.",
    "Use o carrinho para comparar produtos e calcular o total! Quando estiver pronto, é só finalizar a compra e será redirecionado para a Shopee oficial."
  ]
};

export const mockProducts = [
  {
    id: 1,
    name: "Tapete Banheiro Antiderrapante Absorvente de Secagem Rápida ...",
    price: "R$13,99 - R$19,99",
    originalPrice: "R$40,00 - R$80,00",
    discount: null,
    category: "home",
    rating: 4.7,
    reviews: null,
    emoji: "🛁",
    freeShipping: null,
    image: "https://down-br.img.susercontent.com/file/br-11110105-7r98o-lxd2g3q560yfa3.webp",
    shopeeLink: "https://s.shopee.com.br/6AYZ8nz9HW",
    description: "...",
    video: "https://down-ws-br.vod.susercontent.com/api/v4/11110105/mms/br-11110105-6kfkp-lxd2g0wv9v925f.16000081720211620.mp4",
    images: [
      "https://down-br.img.susercontent.com/file/br-11110105-7r98o-lxd2g3q560yfa3.webp",
      "https://down-br.img.susercontent.com/file/br-11134207-7r98o-lxcz7dysnzcv7d.webp",
      // ...
    ]
  },
  {
    id: 2,
    name: "Kit DaBelle Hair Intense Meu Cronograma Perfeito (5 Produtos)",
    price: "R$79,99",
    originalPrice: "R$114,90",
    discount: null,
    category: "beauty",
    rating: 4.9,
    reviews: null,
    emoji: "💆‍♀️",
    freeShipping: null,
    image: "https://down-br.img.susercontent.com/file/br-11110105-7r98o-lv27hlein2b19b.webp",
    shopeeLink: "https://s.shopee.com.br/3qCmdZxpuz",
    description: "...",
    video: "...",
    images: [
      "https://down-br.img.susercontent.com/file/br-11110105-7r98o-lv27hlein2b19b.webp",
      // ...
    ]
  },
  {
    id: 3,
    name: "Kit Sortido 10 Peças de Roupas Infantis Feminino Inverno - 5 Casacos + 5 Calças",
    price: "R$159,90 - R$189,90",
    originalPrice: "R$189,90",
    discount: null,
    category: "kids",
    rating: 4.7,
    reviews: null,
    emoji: "👗",
    freeShipping: null,
    image: "https://down-br.img.susercontent.com/file/br-11110105-7r98o-lzt7djf1sx9k31.webp",
    shopeeLink: "https://s.shopee.com.br/1g8I0vF7Rc",
    description: `Descrição do produto ...`,
    video: "...",
    images: [
      "https://down-br.img.susercontent.com/file/br-11110105-7r98o-lzt7djf1sx9k31.webp",
      // ...
    ]
  },
  {
    id: 4,
    name: "KIT 18 unidades Clipe Simples Liu Haibian Palavra Clipe Pérola De Cristal",
    price: "R$19,99",
    originalPrice: "R$40,00",
    discount: null,
    category: "accessories", // por exemplo
    rating: 4.8,
    reviews: null,
    emoji: "📎",
    freeShipping: null,
    image: "https://down-br.img.susercontent.com/file/sg-11134201-7rd6w-lwu2h95z8e7nf2.webp",
    shopeeLink: "https://s.shopee.com.br/1qRiFmdToO",
    description: "...",
    video: null,
    images: [
      "https://down-br.img.susercontent.com/file/sg-11134201-7rd6w-lwu2h95z8e7nf2.webp",
      // ...
    ]
  },
  {
    id: 5,
    name: "Balança De Bagagem Digital De Mão Com Gancho Até 50kg - NL",
    price: "R$18,99",
    originalPrice: "R$49,99",
    discount: null,
    category: "electronics",
    rating: 4.9,
    reviews: null,
    emoji: "⚖️",
    freeShipping: null,
    image: "https://down-br.img.susercontent.com/file/br-11110105-7r98o-m1zs9i3ng68251.webp",
    shopeeLink: "https://s.shopee.com.br/2qKFRdmT5F",
    description: "...",
    video: "...",
    images: [
      "https://down-br.img.susercontent.com/file/br-11110105-7r98o-m1zs9i3ng68251.webp",
      // ...
    ]
  },
  {
    id: 6,
    name: "Protetor Solar Facial em Bastão 12g Efeito Matte com Base FPS 50 Sunless Stick Envio Imediato",
    price: "R$37,90 - R$61,99",
    originalPrice: "R$69,99 - R$118,00",
    discount: null,
    category: "beauty",
    rating: 4.9,
    reviews: null,
    emoji: "☀️",
    freeShipping: null,
    image: "https://down-br.img.susercontent.com/file/br-11110105-6kfkq-m7lkcr9u808y14_cover.webp",
    shopeeLink: "https://s.shopee.com.br/50Ok1dmcDu",
    description: "...",
    video: "...",
    images: [
      "https://down-br.img.susercontent.com/file/br-11110105-6kfkq-m7lkcr9u808y14_cover.webp",
      // ...
    ]
  }
];
