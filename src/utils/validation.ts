// Funções de validação e sanitização de dados para segurança

/**
 * Valida e sanitiza número de WhatsApp
 * @param phoneNumber - número a validar
 * @returns número sanitizado ou null se inválido
 */
export function validateWhatsAppNumber(phoneNumber: string): string | null {
  // Remove caracteres não numéricos
  const sanitized = phoneNumber.replace(/\D/g, '');

  // Valida formato (deve ter entre 10 e 15 dígitos)
  if (sanitized.length < 10 || sanitized.length > 15) {
    return null;
  }

  // Valida se começa com código de país (deve ter 2-3 dígitos)
  if (sanitized.length < 11) {
    return null; // Faltando código de país
  }

  return sanitized;
}

/**
 * Valida nome da marca (previne injection)
 * @param name - nome a validar
 * @returns nome sanitizado
 */
export function validateBrandName(name: string): string {
  // Remove caracteres perigosos
  const sanitized = name
    .replace(/[<>{}]/g, '') // Remove caracteres que podem causar HTML injection
    .replace(/javascript:/gi, '') // Remove tentativas de injection
    .trim()
    .substring(0, 50); // Limita tamanho

  return sanitized;
}

/**
 * Valida URL do site
 * @param url - URL a validar
 * @returns URL validada ou null se inválida
 */
export function validateSiteUrl(url: string): string | null {
  try {
    const urlObj = new URL(url);
    
    // Só permite HTTPS em produção
    if (urlObj.protocol !== 'https:') {
      return null;
    }

    // Valida domínio (previne protocolos perigosos)
    if (urlObj.hostname.includes('localhost') || urlObj.hostname.includes('127.0.0.1')) {
      // Localhost é permitido apenas em desenvolvimento
      if (import.meta.env.DEV) {
        return url;
      }
      return null;
    }

    return url;
  } catch {
    return null;
  }
}

/**
 * Sanitiza texto de mensagem para prevenir injection
 * @param text - texto a sanitizar
 * @returns texto sanitizado
 */
export function sanitizeText(text: string): string {
  return text
    .replace(/[<>{}]/g, '') // Remove caracteres perigosos
    .replace(/javascript:/gi, '') // Remove tentativas de injection
    .substring(0, 500); // Limita tamanho
}

/**
 * Valida preço (previne valores inválidos)
 * @param price - preço a validar
 * @returns preço validado ou null se inválido
 */
export function validatePrice(price: number): number | null {
  if (typeof price !== 'number' || isNaN(price)) {
    return null;
  }

  if (price < 0 || price > 1000000) {
    return null; // Preço deve ser positivo e razoável
  }

  return price;
}

/**
 * Valida nome de produto
 * @param name - nome a validar
 * @returns nome validado
 */
export function validateProductName(name: string): string {
  return sanitizeText(name);
}

/**
 * Escapa HTML para prevenir XSS
 * @param text - texto a escapar
 * @returns texto escapado
 */
export function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };

  return text.replace(/[&<>"']/g, (char) => map[char]);
}