# ✦ JS · Joias em Prata 925

Catálogo online (vitrine) de joias em prata 925. O cliente navega pela coleção, clica na peça para ver os detalhes e o preço, e finaliza a compra direto no **WhatsApp**.

> Este é um site **100% estático** — sem pagamento online, sem banco de dados. Rápido, leve e ótimo para SEO.

---

## 🚀 Como rodar o site no seu computador

### 1. Instale o Node.js (só uma vez)
Baixe e instale em **https://nodejs.org** (versão LTS). O Node é o programa que faz o site rodar.

### 2. Abra o terminal nesta pasta
- No Windows: segure `Shift` + clique direito na pasta `job3` → "Abrir janela do PowerShell aqui"
- Ou abra o PowerShell e digite: `cd C:\job3`

### 3. Instale as dependências (só na primeira vez)
```bash
npm install
```

### 4. Rode o site (modo edição)
```bash
npm run dev
```
O terminal vai mostrar um endereço tipo `http://localhost:4321`. Abra no navegador. ✨
Enquanto o `npm run dev` estiver rodando, toda alteração que você fizer aparece **na hora** no navegador.

### 5. Para parar o servidor
No terminal, pressione `Ctrl + C`.

---

## ⚙️ Configuração inicial (IMPORTANTE)

### 🟢 Trocar o número do WhatsApp
Abra o arquivo **`src/config.ts`** e altere a linha:

```ts
whatsappNumber: '5511999998888',  // ← troque pelo SEU número
```

**Formato do número:** código do país + DDD + número, sem espaços ou símbolos.
| Exemplo | Resultado |
|---|---|
| `5511999998888` | Brasil, DDD 11, número 99999-8888 |
| `5521988887777` | Brasil, DDD 21, número 98888-7777 |

> ⚠️ **Não use zero à esquerda no DDD.** Errado: `55011...` · Certo: `5511...`

### 🏷️ Trocar o nome da marca
No mesmo arquivo `src/config.ts`:
```ts
brandName: 'JS',  // ← troque pelo nome da sua marca
```

### 🌐 Trocar o domínio (para SEO)
```ts
url: 'https://sua-marca.com.br',  // ← troque pelo seu domínio real
```

---

## 💍 Como cadastrar / editar joias

Tudo fica em **um único arquivo**: `src/data/products.ts`.

### Adicionar uma peça nova
1. **Coloque a foto** da peça na pasta `public/images/` (ex: `minha-peca.jpg` ou `.webp`).
2. **Abra** `src/data/products.ts`.
3. **Copie um bloco** de peça existente e cole, alterando os valores:

```ts
{
  slug: 'minha-peca',              // identificador único (sem acento/espaço)
  name: 'Nome da Peça',            // nome que aparece no site
  category: 'aneis',               // 'aneis' | 'brincos' | 'colares'
  price: 199,                      // preço em REAIS (só o número)
  image: '/images/minha-peca.jpg', // caminho da foto (igual ao passo 1)
  description: 'Descrição curta da peça.',
  details: [                       // lista de detalhes do modal
    'Prata 925',
    'Hipossalergênica',
  ],
  featured: true,                  // (opcional) destaca com selo "★ Destaque"
},
```

4. Salve o arquivo. Se o `npm run dev` estiver rodando, a peça aparece na hora. ✨

### Editar / Remover uma peça
- **Editar:** altere os valores do bloco correspondente.
- **Remover:** apague o bloco inteiro (de `slug: ...` até a vírgula de fechamento `},`).

### Trocar a foto de uma peça
Substitua o arquivo em `public/images/` mantendo o mesmo nome, ou altere o campo `image:`.

> 💡 **Dica de foto:** use fotos quadradas (ex: 1000×1000px), bem iluminadas, fundo limpo. Formato `.webp` deixa o site mais rápido; `.jpg` também funciona.

---

## 📁 Estrutura do projeto

```
job3/
├── public/
│   ├── favicon.svg              ← ícone da aba do navegador
│   └── images/                  ← ⭐ COLOQUE AQUI AS FOTOS DAS PEÇAS
├── src/
│   ├── config.ts                ← ⚙️ MARCA + WHATSAPP (edite aqui)
│   ├── data/
│   │   └── products.ts          ← 💍 CADASTRO DE PEÇAS (edite aqui)
│   ├── layouts/
│   │   └── BaseLayout.astro     ← estrutura + SEO
│   ├── components/              ← partes do site (header, cards, etc.)
│   └── pages/
│       └── index.astro          ← página principal
├── astro.config.mjs
├── tailwind.config.mjs          ← cores e estilos
├── tsconfig.json
└── package.json
```

**Os dois arquivos que você vai editar no dia a dia:**
1. `src/data/products.ts` → para adicionar/tirar joias
2. `src/config.ts` → para trocar nome da marca / WhatsApp

---

## 🌍 Como colocar o site no ar (hospedagem gratuita)

O site gera arquivos estáticos, então pode ser hospedado de graça. Recomendamos a **Netlify** ou **Vercel**:

### Opção A — Netlify (mais simples)
1. Rode `npm run build` → cria a pasta `dist/`.
2. Arraste a pasta `dist/` para dentro de **https://app.netlify.com/drop** .
3. Pronto! Você recebe um link (ex: `js-joias.netlify.app`).

### Opção B — Vercel
1. Crie conta em **https://vercel.com**.
2. Conecte seu GitHub (suba a pasta como repositório) ou use a CLI.
3. A Vercel detecta o Astro automaticamente e publica.

### Domínio próprio (ex: www.jsjoias.com.br)
Após publicar, compre um domínio em **Registro.br** ou **Hostinger** (~R$ 40/ano) e conecte-o
pelas configurações da Netlify/Vercel (eles mostram o passo a passo).

---

## ❓ Dúvidas frequentes

**Apareceu erro quando rodei `npm run dev`?**
- Confirme que rodou `npm install` antes.
- Confirme que o Node.js está instalado (`node -v` no terminal).

**O WhatsApp não abre quando clico em "Comprar"?**
- Confira se o número em `src/config.ts` está no formato `5511999998888` (sem espaços/zero à esquerda).

**Quero mudar as cores do site.**
- Abra `tailwind.config.mjs` e ajuste a seção `colors.accent` (o roxo vibrante).

---

Feito com ✦ para **JS · Joias em Prata 925**.
