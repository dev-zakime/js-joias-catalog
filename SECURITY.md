# 🔒 Guia de Segurança - JS Joias

## 📋 Visão Geral
Este documento descreve as medidas de segurança implementadas para proteger tanto o dono do negócio quanto os clientes.

## 🛡️ Medidas de Segurança Implementadas

### 1. 🔐 Variáveis de Ambiente
- ✅ Dados sensíveis (WhatsApp, configurações) em `.env.local`
- ✅ Arquivos `.env*` protegidos no `.gitignore`
- ✅ Validação de dados carregados de variáveis de ambiente
- ✅ Valores padrão seguros para desenvolvimento

### 2. 🌐 Headers de Segurança HTTP
- ✅ `X-Content-Type-Options: nosniff` - Previne MIME-sniffing
- ✅ `X-Frame-Options: DENY` - Previne clickjacking
- ✅ `X-XSS-Protection: 1; mode=block` - Proteção XSS
- ✅ `Referrer-Policy: strict-origin-when-cross-origin` - Privacidade de referer
- ✅ `Permissions-Policy` - Controle de permissões do navegador
- ✅ `Content-Security-Policy` - Política de conteúdo rigorosa

### 3. 🔍 Validação de Dados
- ✅ Validação de número de WhatsApp
- ✅ Validação de URLs (previne SSRF)
- ✅ Sanitização de texto (previne XSS)
- ✅ Validação de preços
- ✅ Escapamento de HTML

### 4. 📦 Gerenciamento de Dependências
- ✅ Dependências atualizadas sem vulnerabilidades conhecidas
- ✅ Scripts de build aprovados explicitamente
- ✅ Auditoria regular de segurança

### 5. 🚫 Proteção de Arquivos
- ✅ `.gitignore` configurado para proteger:
  - Arquivos `.env*`
  - Chaves e certificados
  - Logs sensíveis
  - Backups com dados

## 🎯 Proteção para o Dono do Negócio

### Dados Sensíveis Protegidos:
- ✅ **Número do WhatsApp** - Carregado de variável de ambiente
- ✅ **Configurações da marca** - Em variáveis de ambiente
- ✅ **Dados de produção** - Nunca commitados no Git

### Práticas Seguras no Vercel:
- ⚠️ **Repositório privado** - Requer plano Pro ($20/mês)
- ✅ **Repositório público** - Aceito no plano gratuito
- ✅ **Variáveis de ambiente** - Protegidas no painel do Vercel
- ✅ **Dados sensíveis** - Nunca commitados no código
- ✅ **Código pode ser público** - Dados sensíveis em variáveis de ambiente

## 🎯 Proteção para o Cliente

### Segurança do Site:
- ✅ **HTTPS automático** - Criptografia de todas as comunicações
- ✅ **Proteção XSS** - Sanitização de todo conteúdo
- ✅ **Proteção Clickjacking** - Headers anti-frame
- ✅ **Proteção de dados** - Coleta mínima de informações

### Privacidade:
- ✅ **Sem tracking invasivo** - Apenas analytics essenciais
- ✅ **Sem cookies de terceiros** - Privacidade total
- ✅ **Sem coleta de dados pessoais** - Apenas o necessário

## 🚀 Implantação em Produção

### Configuração Obrigatória:
1. **Criar arquivo `.env.production`** com dados reais:
   ```bash
   WHATSAPP_NUMBER=5511999998888
   BRAND_NAME=SeuNome
   SITE_URL=https://seu-dominio.com.br
   ```

2. **Configurar variáveis de ambiente na plataforma de hospedagem:**
   - Netlify: Environment Variables
   - Vercel: Environment Variables
   - GitHub Pages: GitHub Secrets

3. **Nunca commitar arquivos `.env*`** no repositório

### Verificação de Segurança:
```bash
# Verificar vulnerabilidades
npm audit

# Verificar dependências desatualizadas
npm outdated

# Build de produção
npm run build
```

## 🔧 Manutenção de Segurança

### Atualizações Regulares:
- **Semanalmente:** Executar `npm audit`
- **Mensalmente:** Atualizar dependências principais
- **Trimestralmente:** Revisar headers de segurança

### Monitoramento:
- Atualizações de segurança do Astro
- Vulnerabilidades em dependências
- Boas práticas de segurança web

## ⚠️ Riscos Conhecidos e Mitigações

### Risco: Exposição de número do WhatsApp
- **Mitigação:** Variáveis de ambiente + repositório privado
- **Residual:** Baixo - necessário para funcionalidade

### Risco: Ataques de brute force no WhatsApp
- **Mitigação:** Proteção nativa do WhatsApp Business
- **Residual:** Baixo - risco comum aceitável

### Risco: Clickjacking em iframes
- **Mitigação:** Header `X-Frame-Options: DENY`
- **Residual:** Eliminado

## 📞 Contato em Caso de Incidente
Se identificar qualquer vulnerabilidade de segurança:
1. Desconectar o site imediatamente
2. Revogar access tokens
3. Notificar a equipe de hospedagem
4. Investigar logs de acesso

## ✅ Checklist de Segurança
- [ ] Variáveis de ambiente configuradas
- [ ] `.env.local` no `.gitignore`
- [ ] Dependências sem vulnerabilidades
- [ ] Headers de segurança ativos
- [ ] HTTPS configurado
- [ ] Validação de dados implementada
- [ ] Scripts de build aprovados
- [ ] Repositório privado criado
- [ ] Backup de dados sensíveis

## 🔄 Atualizado em: 2026-07-30