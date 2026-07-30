// ====================================================================
// ⭐ CADASTRO DE PEÇAS — EDITE AQUI
// ====================================================================
// Para adicionar uma joia nova:
//   1. Copie um bloco { ... } abaixo e cole.
//   2. Preencha os campos.
//   3. Coloque a foto da peça na pasta /public/images/ com o mesmo nome do "image".
//
// CAMPOS:
//   slug:        identificador único, sem espaços/acentos (ex: 'anel-solitario')
//   name:        nome da peça (ex: 'Anel Solitário')
//   category:    'aneis' | 'brincos' | 'colares'   (deve bater com CATEGORIES abaixo)
//   price:       preço em número (ex: 189)
//   image:       caminho da foto (ex: '/images/anel-solitario.svg')
//   description: texto curto sobre a peça
//   details:     lista de detalhes que aparecem no modal
//   featured:    true para destacar na vitrine (opcional, padrão false)
//   payment:     opções de pagamento (opcional, padrão padrão)
// ====================================================================

export type Category = 'aneis' | 'brincos' | 'colares';

export const CATEGORIES: { id: Category | 'todos'; label: string }[] = [
  { id: 'todos', label: 'Todos' },
  { id: 'aneis', label: 'Anéis' },
  { id: 'brincos', label: 'Brincos' },
  { id: 'colares', label: 'Colares' },
];

export interface Product {
  slug: string;
  name: string;
  category: Category;
  price: number;
  image: string;
  description: string;
  details: string[];
  featured?: boolean;
  payment?: {
    pix?: boolean;
    creditCard?: boolean;
    maxInstallments?: number;
  };
}

export const products: Product[] = [
  // ----------------------------------------------------------------
  // ANÉIS
  // ----------------------------------------------------------------
  {
    slug: 'anel-solitario',
    name: 'Anel Solitário',
    category: 'aneis',
    price: 189,
    image: '/images/anel-solitario.svg',
    description: 'Clássico atemporal com pedra em destaque. Elegância para o dia a dia.',
    details: [
      'Prata 925 hipossalergênica',
      'Pedra zircônia brilhante',
      'Acabamento polido espelhado',
      'Disponível em aros 12 a 22',
    ],
    featured: true,
  },
  {
    slug: 'anel-alianca-eterna',
    name: 'Aliança Eterna',
    category: 'aneis',
    price: 239,
    image: '/images/alianca-eterna.svg',
    description: 'Aliança delicada cravejada de zircônias. Símbolo de momentos para sempre.',
    details: [
      'Prata 925',
      'Cravejado com zircônias',
      'Largura de 2,5 mm',
      'Par de alianças',
    ],
  },
  {
    slug: 'anel-argola',
    name: 'Anel Argola Twist',
    category: 'aneis',
    price: 149,
    image: '/images/anel-argola.svg',
    description: 'Argola dupla com efeito torcido. Moderna e marcante.',
    details: [
      'Prata 925',
      'Design torcido exclusivo',
      'Ajustável',
      'Antialérgico',
    ],
    featured: true,
  },

  // ----------------------------------------------------------------
  // BRINCOS
  // ----------------------------------------------------------------
  {
    slug: 'brinco-argola',
    name: 'Brinco Argola Clássica',
    category: 'brincos',
    price: 145,
    image: '/images/brinco-argola.svg',
    description: 'Argola atemporal que combina com tudo. O curinga do seu looks.',
    details: [
      'Prata 925',
      '20 mm de diâmetro',
      'Fecho de pressão seguro',
      'Vendido no par',
    ],
    featured: true,
  },
  {
    slug: 'brinco-mini',
    name: 'Brinco Mini Pedra',
    category: 'brincos',
    price: 99,
    image: '/images/brinco-mini.svg',
    description: 'Delicado e discreto. Brilho sutil para usar todos os dias.',
    details: [
      'Prata 925',
      'Zircônia única',
      'Leve e confortável',
      'Vendado no par',
    ],
  },
  {
    slug: 'brinco-maxi',
    name: 'Brinco Maxi Pedra',
    category: 'brincos',
    price: 179,
    image: '/images/brinco-maxi.svg',
    description: 'Pedra em destaque para looks marcantes. Imponha presença.',
    details: [
      'Prata 925',
      'Pedra semi-preciosa',
      'Leve (8g o par)',
      'Vendido no par',
    ],
  },

  // ----------------------------------------------------------------
  // COLARES
  // ----------------------------------------------------------------
  {
    slug: 'colar-corrente',
    name: 'Colar Corrente Fina',
    category: 'colares',
    price: 129,
    image: '/images/colar-corrente.svg',
    description: 'Corrente delicada para usar sozinha ou misturar. Versátil.',
    details: [
      'Prata 925',
      '45 cm + extensor 5 cm',
      'Elo veneziano fino',
      'Banho anti-oxidação',
    ],
    featured: true,
  },
  {
    slug: 'colar-pingente',
    name: 'Colar Pingente Zircônia',
    category: 'colares',
    price: 199,
    image: '/images/colar-pingente.svg',
    description: 'Pingente brilhante que ilumina o colo. Para ocasiões especiais.',
    details: [
      'Prata 925',
      'Pingente zircônia',
      '45 cm regulável',
      'Acompanha embalagem presente',
    ],
  },
  {
    slug: 'colar-gargantilha',
    name: 'Colar Gargantilha',
    category: 'colares',
    price: 159,
    image: '/images/colar-gargantilha.svg',
    description: 'Modelo justo ao pescoço, moderno e sensual. Tendência.',
    details: [
      'Prata 925',
      '38 cm (gargantilha)',
      'Detalhe central',
      'Antialérgico',
    ],
  },
];
