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
    description: 'Anel clássico com pedra no meio. Perfeito para usar todo dia.',
    details: [
      'Prata 925 que não mancha',
      'Pedra de zircônia brilhante',
      'Acabamento polido',
      'Aros de 12 a 22',
    ],
    featured: true,
  },
  {
    slug: 'anel-alianca-eterna',
    name: 'Aliança Eterna',
    category: 'aneis',
    price: 239,
    image: '/images/alianca-eterna.svg',
    description: 'Aliança com pedrinhas de zircônia. Para momentos especiais.',
    details: [
      'Prata 925',
      'Com zircônias',
      'Largura de 2,5 mm',
      'Vem no par',
    ],
  },
  {
    slug: 'anel-argola',
    name: 'Anel Argola Twist',
    category: 'aneis',
    price: 149,
    image: '/images/anel-argola.svg',
    description: 'Argola com desenho torcido. Diferente e bonito.',
    details: [
      'Prata 925',
      'Design torcido',
      'Ajustável',
      'Não causa alergia',
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
    description: 'Argola que combina com tudo. Usa com qualquer look.',
    details: [
      'Prata 925',
      '20 mm de tamanho',
      'Fecho que não abre',
      'Vem no par',
    ],
    featured: true,
  },
  {
    slug: 'brinco-mini',
    name: 'Brinco Mini Pedra',
    category: 'brincos',
    price: 99,
    image: '/images/brinco-mini.svg',
    description: 'Brinco pequeno com pedrinha. Leve e confortável.',
    details: [
      'Prata 925',
      'Uma zircônia',
      'Leve de usar',
      'Vem no par',
    ],
  },
  {
    slug: 'brinco-maxi',
    name: 'Brinco Maxi Pedra',
    category: 'brincos',
    price: 179,
    image: '/images/brinco-maxi.svg',
    description: 'Brinco com pedra maior. Chama atenção e é bonito.',
    details: [
      'Prata 925',
      'Pedra maior',
      'Leve (8g o par)',
      'Vem no par',
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
    description: 'Corrente fina que pode usar sozinha ou com outros. Muito versátil.',
    details: [
      'Prata 925',
      '45 cm com extensor',
      'Elo veneziano',
      'Não escurece fácil',
    ],
    featured: true,
  },
  {
    slug: 'colar-pingente',
    name: 'Colar Pingente Zircônia',
    category: 'colares',
    price: 199,
    image: '/images/colar-pingente.svg',
    description: 'Colar com pingente brilhante. Fica lindo no pescoço.',
    details: [
      'Prata 925',
      'Pingente de zircônia',
      '45 cm ajustável',
      'Vem com embalagem',
    ],
  },
  {
    slug: 'colar-gargantilha',
    name: 'Colar Gargantilha',
    category: 'colares',
    price: 159,
    image: '/images/colar-gargantilha.svg',
    description: 'Colar justo no pescoço. Moderno e bonito.',
    details: [
      'Prata 925',
      '38 cm (gargantilha)',
      'Com detalhe no meio',
      'Não causa alergia',
    ],
  },
];
