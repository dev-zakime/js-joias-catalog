# 🚀 Guia de Desenvolvimento - JS Joias

Este guia explica como fazer modificações futuras no site de catálogo de joias.

## 📋 **Fluxo de Trabalho Básico**

### 1. **Fazer Modificações**
```bash
cd C:\job3
# Edite os arquivos necessários
```

### 2. **Testar Localmente**
```bash
npm run dev
# Acesse http://localhost:PORT para testar
```

### 3. **Commit no Git**
```bash
git add .
git commit -m "Descrição da mudança"
git push
```

### 4. **Deploy Automático**
- Vercel detecta o push automaticamente
- Site atualizado em segundos

---

## 📁 **Estrutura do Projeto**

```
C:\job3/
├── src/
│   ├── components/      # Componentes visuais
│   │   ├── Hero.astro         # Banner principal
│   │   ├── Footer.astro       # Rodapé
│   │   ├── Header.astro       # Cabeçalho
│   │   ├── ProductCard.astro  # Card de produto
│   │   ├── ProductModal.astro # Modal de detalhes
│   │   └── WhatsAppButton.astro # Botão flutuante
│   ├── data/
│   │   └── products.ts        # Dados dos produtos
│   ├── config.ts             # Configurações gerais
│   ├── pages/
│   │   └── index.astro        # Página principal
│   ├── layouts/
│   │   └── BaseLayout.astro  # Layout base
│   ├── scripts/
│   │   └── main.ts           # JavaScript principal
│   └── utils/
│       └── validation.ts     # Funções de validação
├── public/
│   ├── images/               # Imagens dos produtos
│   ├── favicon.svg          # Ícone do site
│   └── og-image.svg         # Imagem para redes sociais
├── package.json             # Dependências
├── tailwind.config.mjs      # Configuração Tailwind
└── tsconfig.json           # Configuração TypeScript
```

---

## 🎨 **Modificações Comuns**

### **Alterar Produtos**

#### Adicionar Novo Produto:
1. Adicionar imagem em `public/images/`
2. Editar `src/data/products.ts`:
```typescript
{
  slug: 'novo-produto',
  name: 'Nome do Produto',
  category: 'aneis',
  price: 299,
  image: '/images/novo-produto.svg',
  description: 'Descrição do produto',
  details: ['Detalhe 1', 'Detalhe 2'],
  featured: true
}
```

#### Remover Produto:
- Remover o objeto do array em `src/data/products.ts`

#### Alterar Preço:
- Alterar o campo `price` no produto correspondente

---

### **Alterar Textos e Conteúdo**

#### Hero (Banner Principal):
- Editar: `src/components/Hero.astro`
- Título, subtítulo, CTAs

#### Footer:
- Editar: `src/components/Footer.astro`
- CTA, links, copyright

#### Configurações Gerais:
- Editar: `src/config.ts`
- Nome da marca, URLs, mensagem de WhatsApp

---

### **Alterar Número de WhatsApp**

#### Via Painel Vercel (Recomendado):
1. Acesse: https://vercel.com/js1-6a52/js-joias/settings/environment-variables
2. Edite `WHATSAPP_NUMBER`
3. Salve e faça novo deploy

#### Via Arquivo Local:
- Edite `.env.local` (não commitar no Git)
- Formato: `WHATSAPP_NUMBER=5511999998888`

---

### **Alterar Cores e Estilo**

#### Paleta de Cores:
- Editar: `tailwind.config.mjs`
- Seção `theme.extend.colors`

#### Fontes:
- Editar: `tailwind.config.mjs`
- Seção `theme.extend.fontFamily`

#### Estilos Componentes:
- Editar componentes em `src/components/`
- Usar classes Tailwind

---

### **Adicionar Funcionalidades**

#### Nova Página:
1. Criar arquivo em `src/pages/`
2. Exemplo: `src/pages/sobre.astro`
3. Acessível em `/sobre`

#### Novo Componente:
1. Criar arquivo em `src/components/`
2. Exemplo: `src/components/NovoComponent.astro`
3. Importar e usar em outras páginas

#### Nova Função JavaScript:
1. Adicionar em `src/scripts/main.ts`
2. Chamar no HTML com `window.nomeDaFuncao()`

---

## 🔧 **Dependências**

### **Instalar Nova Dependência:**
```bash
npm install nome-do-pacote
git add .
git commit -m "Add new dependency"
git push
```

### **Atualizar Dependências:**
```bash
npm update
git add .
git commit -m "Update dependencies"
git push
```

### **Remover Dependência:**
```bash
npm uninstall nome-do-pacote
git add .
git commit -m "Remove dependency"
git push
```

---

## 🚀 **Comandos Úteis**

### **Desenvolvimento:**
```bash
npm run dev          # Inicia servidor local
npm run build        # Gera build de produção
npm run preview      # Preview do build
```

### **Git:**
```bash
git status          # Ver alterações
git add .            # Adiciona todas as alterações
git commit -m "msg"  # Commita alterações
git push             # Envia para GitHub
git pull             # Atualiza do GitHub
```

### **Vercel:**
```bash
vercel --prod       # Deploy para produção
vercel ls           # Lista deployments
vercel alias ls      # Lista aliases
```

---

## 🔒 **Segurança**

### **Variáveis de Ambiente:**
- ✅ `.env.local` - NUNCA commitar no Git
- ✅ Configure no painel do Vercel
- ✅ Dados sensíveis ficam no servidor

### **Dados Reais:**
- Número de WhatsApp → Vercel Environment Variables
- Domínio → Vercel Settings → Domains
- Analytics → Configure no painel Vercel

---

## 🌐 **Deploy e Publicação**

### **Deploy Automático:**
- Cada commit no `master` faz deploy automático
- Pull requests criam previews
- Histórico de deployments disponível

### **Deploy Manual:**
```bash
vercel --prod --yes
```

### **Ver Status:**
```bash
vercel ls           # Ver deployments
vercel project ls    # Ver projetos
```

---

## 🐛 **Debugging**

### **Erro no Build:**
1. Verifique: `npm run build` localmente
2. Leia logs no painel Vercel
3. Verifique dependências: `npm audit`

### **Erro em Produção:**
1. Verifique deployments recentes
2. Rollback para versão anterior
3. Logs disponíveis no painel Vercel

### **Erro Local:**
1. Reinicie servidor: Ctrl+C, `npm run dev`
2. Limpe cache: `rm -rf node_modules`, `npm install`
3. Verifique versão do Node: `node --version`

---

## 📝 **Boas Práticas**

### **Commits:**
- Mensagens curtas e descritivas
- Use inglês ou português (consistente)
- Exemplo: "Add new product", "Fix WhatsApp link"

### **Branches:**
- `master` → produção
- Feature branches → pull requests
- Hotfixes → direto para master

### **Testes:**
- Sempre teste localmente antes de commit
- Verifique responsividade (mobile/desktop)
- Teste links e funcionalidades

---

## 🎯 **URLs Importantes**

### **Site em Produção:**
- https://js-joias-js1-6a52.vercel.app

### **Repositório GitHub:**
- https://github.com/dev-zakime/js-joias-catalog

### **Painel Vercel:**
- https://vercel.com/js1-6a52/js-joias

### **Documentação:**
- Astro: https://astro.build
- Tailwind: https://tailwindcss.com
- Vercel: https://vercel.com/docs

---

## 🔄 **Workflow Resumido**

1. **Editar** → Modificar arquivos
2. **Testar** → `npm run dev`
3. **Commit** → `git add . && git commit && git push`
4. **Deploy** → Automático pelo Vercel
5. **Verificar** → Acessar site em produção

**Processo simples e automatizado!** 🎨✨