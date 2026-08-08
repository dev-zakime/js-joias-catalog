// ====================================================================
// ⭐ CONFIGURAÇÃO PRINCIPAL DA MARCA — VARIÁVEIS DE AMBIENTE
// ====================================================================
// Dados sensíveis são carregados de variáveis de ambiente para segurança

import { validateBrandName, validateSiteUrl, validateWhatsAppNumber } from './utils/validation';

// Carregar e validar variáveis de ambiente
const rawWhatsappNumber = import.meta.env.WHATSAPP_NUMBER || '558591661339';
const rawBrandName = import.meta.env.BRAND_NAME || 'JS';
const rawSiteUrl = import.meta.env.SITE_URL || 'https://sua-marca.com.br';

// Validar dados sensíveis
const whatsappNumber = validateWhatsAppNumber(rawWhatsappNumber) || rawWhatsappNumber;
const brandName = validateBrandName(rawBrandName);
const siteUrl = validateSiteUrl(rawSiteUrl) || rawSiteUrl;

export const SITE = {
  /** Nome da marca (aparece no logo, título da aba e rodapé) */
  brandName: brandName,

  /** Slogan curto / descrição para SEO */
  tagline: 'Estilo atemporal em prata 925 — Elegância para todos',

  /** Domínio do site (para SEO/compartilhamento) */
  url: siteUrl,

  // ----------------------------------------------------------------
  // 🟢 WHATSAPP — CARREGADO DE VARIÁVEL DE AMBIENTE
  // ----------------------------------------------------------------
  // Formato: código do país + DDD + número, SEM espaços, símbolos ou zero à esquerda.
  // Exemplos:
  //   Brasil (CE):  558591661339   (55 + 85 + 91661339)
  //   Brasil (SP):  5511912345678   (55 + 11 + 912345678)
  //
  // Defina em .env.local: WHATSAPP_NUMBER=558591661339
  whatsappNumber: whatsappNumber,

  /** Mensagem pré-preenchida ao clicar em "Comprar" (use {produto} e {preco}) */
  whatsappMessage:
    `Olá! Vim pelo catálogo da ${brandName} e tenho interesse na peça: *{produto}* ({preco}). Poderia me passar mais informações?`,
} as const;

// ====================================================================
// 🔗 HELPERS — não precisa editar
// ====================================================================

/**
 * Gera o link do WhatsApp para um produto específico.
 */
export function getWhatsappLink(produto: string, preco: string): string {
  const mensagem = SITE.whatsappMessage
    .replace('{produto}', produto)
    .replace('{preco}', preco);
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(mensagem)}`;
}

/**
 * Link genérico do WhatsApp (para o botão do cabeçalho/rodapé).
 */
export function getWhatsappLinkGenerico(): string {
  const mensagem = `Olá! Vim pelo catálogo da ${SITE.brandName} e gostaria de saber mais sobre as joias em prata 925.`;
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(mensagem)}`;
}
