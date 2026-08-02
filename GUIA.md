# 📘 Guia Completo - JS Joias Catalog

Este guia ensina como manusear o site, Git e Vercel do catálogo de joias em prata 925.

---

## 📋 Índice

1. [Estrutura do Projeto](#estrutura-do-projeto)
2. [Rodar o Site Localmente](#rodar-o-site-localmente)
3. [Editar Produtos e Conteúdo](#editar-produtos-e-conteúdo)
4. [Usar Git](#usar-git)
5. [Deploy no Vercel](#deploy-no-vercel)
6. [Branches (main e modificada)](#branches-main-e-modificada)
7. [Segurança](#segurança)
8. [Troubleshooting](#troubleshooting)

---

## 📁 Estrutura do Projeto

```
C:\job3/ (versão original)
├── public/
│   ├── favicon.svg              ← ícone da aba
│   └── images/                  ← ⭐ FOTOS DAS JOIAS
├── src/
│   ├── config.ts                ← ⚙️ MARCA + WHATSAPP
│   ├── data/
│   │   └── products.ts          ← 💍 CADASTRO DE PEÇAS
│   ├── components/              ← componentes do site
│   └── pages/
│       └── index.astro          ← página principal
├── package.json                 ← dependências
├── astro.config.mjs            ← configuração Astro
├── tailwind.config.mjs          ← cores e estilos
├── .gitignore                   ← arquivos ignorados pelo Git
├── LICENSE                      ← licença MIT
└── dependabot.yml              ← atualizações automáticas de segurança

C:\siteteste/ (versão modificada)
└── (mesma estrutura, branch modificada)
```

---

## 💻 Rodar o Site Localmente

### 1. Instalar Node.js (só uma vez)
1. Baixe em https://nodejs.org (versão LTS)
2. Instale com as opções padrão

### 2. Abrir o Terminal
- **Windows:** Segure `Shift` + clique direito na pasta → "Abrir janela do PowerShell aqui"
- Ou abra PowerShell e digite: `cd C:\job3`

### 3. Instalar Dependências (só na primeira vez)
```bash
npm install
```

### 4. Rodar o Site (Modo Desenvolvimento)
```bash
npm run dev
```
O terminal mostrará algo como:
```
┃ Local    http://localhost:4321/
```
Abra esse link no navegador. ✨

### 5. Parar o Servidor
No terminal, pressione `Ctrl + C`

### 6. Build para Produção
```bash
npm run build
```
Cria a pasta `dist/` com os arquivos prontos para deploy.

---

## ✏️ Editar Produtos e Conteúdo

### Arquivos que você vai editar no dia a dia:

#### 1. **Cadastrar/Editar Joias** → `src/data/products.ts`

**Adicionar uma peça nova:**
1. Coloque a foto em `public/images/` (ex: `minha-peca.jpg`)
2. Abra `src/data/products.ts`
3. Copie um bloco existente e altere:

```typescript
{
  slug: 'minha-peca',              // identificador único (sem acento/espaço)
  name: 'Nome da Peça',            // nome que aparece no site
  category: 'aneis',               // 'aneis' | 'brincos' | 'colares'
  price: 199,                      // preço em REAIS (só número)
  image: '/images/minha-peca.jpg', // caminho da foto
  description: 'Descrição curta da peça.',
  details: [                       // detalhes do modal
    'Prata 925',
    'Hipossalergênica',
  ],
  featured: true,                  // (opcional) destaca com "★ Destaque"
},
```

**Editar/Remover:**
- Editar: altere os valores do bloco
- Remover: apague o bloco inteiro (de `slug:` até `},`)

#### 2. **Trocar WhatsApp/Marca** → `src/config.ts`

```typescript
whatsappNumber: '5511999998888',  // ← troque pelo SEU número
brandName: 'JS',                  // ← nome da marca
url: 'https://sua-marca.com.br',  // ← domínio do site
```

**Formato do WhatsApp:**
- Brasil (SP): `5511999998888` (55 + 11 + 999998888)
- Brasil (RJ): `5521988887777` (55 + 21 + 988887777)
- ❌ Não use zero à esquerda no DDD

#### 3. **Trocar Cores** → `tailwind.config.mjs`

```javascript
colors: {
  accent: '#8B5CF6',  // ← cor principal (roxo vibrante)
  gold: '#D4AF37',    // ← cor dourada
  // ...
}
```

---

## 🔄 Usar Git

### Estrutura de Branches

- **`main`** → Versão original (C:\job3)
- **`modificada`** → Versão com modificações (C:\siteteste)

### Comandos Básicos

#### Ver branch atual
```bash
git branch
```

#### Trocar de branch
```bash
git checkout main
git checkout modificada
```

#### Ver alterações
```bash
git status
git diff
```

#### Adicionar arquivos
```bash
git add .
git add nome-do-arquivo
```

#### Commitar
```bash
git commit -m "Descrição das alterações"
```

#### Enviar para GitHub
```bash
git push origin main
git push origin modificada
```

#### Puxar alterações do GitHub
```bash
git pull origin main
```

### Workflow Recomendado

#### Para trabalhar na versão original (main):
```bash
cd C:\job3
git checkout main
# Faça alterações
git add .
git commit -m "Descrição"
git push origin main
```

#### Para trabalhar na versão modificada (modificada):
```bash
cd C:\siteteste
git checkout modificada
# Faça alterações
git add .
git commit -m "Descrição"
git push origin modificada
```

---

## 🚀 Deploy no Vercel

### 1. Instalar Vercel CLI
```bash
npm install -g vercel
```

### 2. Login no Vercel
```bash
vercel login
```
Siga as instruções no navegador.

### 3. Linkar Projeto (só na primeira vez)

#### Para versão original (C:\job3):
```bash
cd C:\job3
vercel link --yes
```

#### Para versão modificada (C:\siteteste):
```bash
cd C:\siteteste
vercel link --yes
```

### 4. Deploy de Produção
```bash
vercel --prod --yes
```

### 5. Configurar Alias (só na primeira vez)

#### Versão original:
```bash
cd C:\job3
vercel alias set js-catalog.vercel.app
```

#### Versão modificada:
```bash
cd C:\siteteste
vercel alias set js.vercel.app
```

### 6. Verificar Proteção (recomendado)
```bash
vercel project protection <nome-do-projeto>
```

Para desabilitar proteção SSO (tornar público):
```bash
vercel project protection disable <nome-do-projeto> --sso
```

### Sites Atuais
- **Original:** https://js-catalog.vercel.app
- **Modificada:** https://js.vercel.app

---

## 🌳 Branches (main e modificada)

### Branch `main` (Original)
- **Local:** C:\job3
- **Remoto:** GitHub branch main
- **Site:** https://js-catalog.vercel.app
- **Status:** Versão original sem modificações
- **Proteção:** Branch protection habilitado (requer PR)

### Branch `modificada` (Modificada)
- **Local:** C:\siteteste
- **Remoto:** GitHub branch modificada
- **Site:** https://js.vercel.app
- **Status:** Versão com Instagram button, formas de pagamento, layout mobile
- **Proteção:** Sem proteção de branch

### Como Mesclar Branches

#### Para atualizar main com mudanças da modificada:
```bash
cd C:\job3
git checkout main
git pull origin main
git merge origin/modificada
git push origin main
```

#### Para criar um novo branch:
```bash
git checkout -b nome-do-branch
git push -u origin nome-do-branch
```

---

## 🔒 Segurança

### Status Atual

✅ **Secret Scanning:** Habilitado
✅ **Branch Protection:** Habilitado (main)
✅ **Dependabot:** Habilitado
✅ **Licença:** MIT
✅ **Dependências:** Atualizadas (Astro 7.1.6)

### Arquivos Sensíveis (NO GIT)

✅ `.env*` - variáveis de ambiente
✅ `.vercel` - configuração Vercel local
✅ `*.key, *.pem, *.p12` - chaves criptográficas
✅ `secrets/` - diretório de secrets
✅ `credentials/` - diretório de credenciais

### Variáveis de Ambiente

**WHATSAPP_NUMBER** → Carregado de variável de ambiente
- Local: `.env.local`
- Vercel: Settings → Environment Variables
- Validação: Implementada no código

### Dependabot

Atualiza automaticamente dependências vulneráveis:
- npm: semanalmente
- GitHub Actions: semanalmente
- Limite: 10 PRs por semana

### Branch Protection (main)

- ✅ Status checks obrigatórios
- ✅ 1 aprovação necessária
- ✅ Bloqueia deletes/force pushes
- ⚠️ Enforce admins: desabilitado (permite merge de admin)

---

## 🛠️ Troubleshooting

### Site não abre no localhost

**Problema:** `npm run dev` mostra erro
**Solução:**
```bash
npm install
npm run dev
```

### Build falha

**Problema:** `npm run build` mostra erro
**Solução:**
```bash
rm -rf node_modules .astro
npm install
npm run build
```

### Git push rejeitado

**Problema:** Branch protection bloqueou o push
**Solução:**
```bash
# Criar PR ao invés de push direto
git checkout -b feature-branch
git push -u origin feature-branch
# Criar PR no GitHub e mesclar
```

### Vercel deploy falha

**Problema:** Deployment falha no Vercel
**Solução:**
```bash
vercel logout
vercel login
vercel --prod --yes
```

### Dependências vulneráveis

**Problema:** `npm audit` mostra vulnerabilidades
**Solução:**
```bash
npm audit fix
# Se não funcionar:
npm update
```

### WhatsApp não abre

**Problema:** Clicar em "Comprar" não abre WhatsApp
**Solução:**
1. Verifique `src/config.ts`
2. Formato deve ser: `5511999998888` (sem espaços)
3. Reinicie o servidor: `npm run dev`

### Imagens não aparecem

**Problema:** Fotos não carregam
**Solução:**
1. Verifique se está em `public/images/`
2. Verifique o caminho em `products.ts`: `/images/nome.jpg`
3. Nomes de arquivos devem usar apenas letras, números e hífens

### Site protegido no Vercel

**Problema:** Vercel pede login ao acessar
**Solução:**
```bash
vercel project protection disable <projeto> --sso
```

### Merge conflicts no Git

**Problema:** Git mostra conflitos ao mesclar
**Solução:**
```bash
git status
# Edite os arquivos com conflitos
git add .
git commit -m "Resolve conflicts"
git push
```

---

## 📚 Recursos Úteis

### Documentação
- Astro: https://docs.astro.build
- Tailwind: https://tailwindcss.com/docs
- Vercel: https://vercel.com/docs
- GitHub: https://docs.github.com

### Links do Projeto
- **GitHub:** https://github.com/dev-zakime/js-joias-catalog
- **Site Original:** https://js-catalog.vercel.app
- **Site Modificado:** https://js.vercel.app

### Comandos Rápidos

```bash
# Rodar site
npm run dev

# Build
npm run build

# Git status
git status

# Push
git push origin main

# Deploy Vercel
vercel --prod --yes

# Audit dependências
npm audit
```

---

## 💡 Dicas Pro

1. **Sempre teste localmente antes de deploy**
2. **Use branches para experimentações**
3. **Faça commits descritivos**
4. **Atualize dependências regularmente**
5. **Verifique security alerts no GitHub**
6. **Mantenha .env.local no .gitignore**
7. **Use fotos otimizadas (webp)**
8. **Backup antes de grandes mudanças**

---

## 🆘 Suporte

Se tiver problemas:
1. Verifique se há uma solução neste guia
2. Consulte a documentação oficial
3. Verifique os logs no terminal
4. Verifique o console do navegador (F12)

---

**Versão do Guia:** 1.0  
**Última Atualização:** 02/08/2026  
**Autor:** Devin AI Assistant
