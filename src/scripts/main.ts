// Script principal da página - filtro, modal, zoom, etc.
import { getWhatsappLink } from '../config';
import { escapeHtml } from '../utils/validation';

// Variáveis globais
let productCards: NodeListOf<Element> = document.querySelectorAll('.product-card');
let isZoomed = false;
let zoomScale = 1;
let zoomX = 0;
let zoomY = 0;

// ===== INICIALIZAR BOTÃO INSTAGRAM =====
window.addEventListener('load', () => {
  const instagramBtn = document.getElementById('instagram-btn');

  function toggleInstagramBtn() {
    const scrollY = window.scrollY || window.pageYOffset;
    const showThreshold = 500;

    if (scrollY > showThreshold) {
      instagramBtn?.classList.remove('opacity-0', 'invisible');
      instagramBtn?.classList.add('opacity-100', 'visible');
    } else {
      instagramBtn?.classList.add('opacity-0', 'invisible');
      instagramBtn?.classList.remove('opacity-100', 'visible');
    }
  }

  window.addEventListener('scroll', toggleInstagramBtn);
  toggleInstagramBtn();
});

// ===== REMOVER SKELETONS E MOSTRAR PRODUTOS =====
window.addEventListener('load', () => {
  const skeletonLoader = document.getElementById('skeleton-loader');
  const realProducts = document.getElementById('real-products');

  if (skeletonLoader && realProducts) {
    setTimeout(() => {
      skeletonLoader.remove();
      realProducts.classList.remove('hidden');

      // Animação de entrada para os produtos
      const cards = realProducts.querySelectorAll('.product-card');
      cards.forEach((card, index) => {
        const element = card as HTMLElement;
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        setTimeout(() => {
          element.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }, index * 100);
      });
    }, 800);
  }

  // Atualizar productCards após carregamento
  setTimeout(() => {
    productCards = document.querySelectorAll('.product-card');
  }, 900);
});

// ===== MODAL DE DETALHES =====
const modal = document.getElementById('product-modal');
const modalImage = document.getElementById('modal-image') as HTMLImageElement;
const modalTitle = document.getElementById('modal-title');
const modalPrice = document.getElementById('modal-price');
const modalDescription = document.getElementById('modal-description');
const modalDetails = document.getElementById('modal-details');
const modalWhatsapp = document.getElementById('modal-whatsapp') as HTMLAnchorElement;
const modalClose = document.getElementById('modal-close');
const modalBackdrop = document.getElementById('modal-backdrop');
const modalZoomBtn = document.getElementById('modal-zoom-btn');
const zoomHint = document.getElementById('zoom-hint');

function openModal(card: Element) {
  const name = card.getAttribute('data-name');
  const price = card.getAttribute('data-price');
  const image = card.getAttribute('data-image');
  const description = card.getAttribute('data-description');
  const detailsRaw = card.getAttribute('data-details');

  if (modalImage) modalImage.src = image || '';
  if (modalImage) modalImage.alt = name || '';
  if (modalTitle) modalTitle.textContent = name || '';
  if (modalPrice) modalPrice.textContent = price || '';
  if (modalDescription) modalDescription.textContent = description || '';

  // Lista de detalhes
  if (modalDetails) {
    modalDetails.innerHTML = '';
    try {
      const details = JSON.parse(detailsRaw || '[]');
      details.forEach((d: string) => {
        const li = document.createElement('li');
        li.className = 'flex items-start gap-2 text-silver/70';
        li.innerHTML =
          '<svg class="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" /></svg><span>' + escapeHtml(d) + '</span>';
        modalDetails.appendChild(li);
      });
    } catch (e) {
      // sem detalhes
    }
  }

  // Link do WhatsApp
  if (modalWhatsapp && name && price) {
    modalWhatsapp.href = getWhatsappLink(name, price);
  }

  // Exibe o modal
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    requestAnimationFrame(() => modal.classList.remove('opacity-0'));
    document.body.style.overflow = 'hidden';
  }
}

function closeModal() {
  if (modal) {
    modal.classList.add('opacity-0');
    setTimeout(() => {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
      document.body.style.overflow = '';
      // Reset zoom ao fechar
      resetZoom();
    }, 300);
  }
}

// ===== FUNÇÕES DE ZOOM =====
function resetZoom() {
  isZoomed = false;
  zoomScale = 1;
  zoomX = 0;
  zoomY = 0;
  if (modalImage) {
    modalImage.style.transform = 'scale(1)';
    modalImage.style.cursor = 'zoom-in';
  }
  if (modalZoomBtn) {
    modalZoomBtn.classList.remove('bg-accent', 'text-white');
    modalZoomBtn.classList.add('bg-ink/80', 'text-silver');
  }
}

function toggleZoom() {
  isZoomed = !isZoomed;
  if (isZoomed) {
    zoomScale = 2;
    if (modalImage) {
      modalImage.style.transform = 'scale(2)';
      modalImage.style.cursor = 'zoom-out';
    }
    if (modalZoomBtn) {
      modalZoomBtn.classList.remove('bg-ink/80', 'text-silver');
      modalZoomBtn.classList.add('bg-accent', 'text-white');
    }
  } else {
    resetZoom();
  }
}

function handleZoomImage(e: MouseEvent) {
  if (!isZoomed || !modalImage) return;

  const rect = modalImage.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const xPercent = (x / rect.width) * 100;
  const yPercent = (y / rect.height) * 100;

  modalImage.style.transformOrigin = `${xPercent}% ${yPercent}%`;
}

// Eventos de modal
productCards.forEach((card) => {
  card.addEventListener('click', () => openModal(card));
});
if (modalClose) modalClose.addEventListener('click', closeModal);
if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);

// Eventos de zoom
if (modalImage) {
  modalImage.addEventListener('click', toggleZoom);
  modalImage.addEventListener('mousemove', handleZoomImage);
  modalImage.addEventListener('mouseenter', () => {
    if (!isZoomed && zoomHint) {
      zoomHint.classList.remove('opacity-0');
    }
  });
  modalImage.addEventListener('mouseleave', () => {
    if (zoomHint) {
      zoomHint.classList.add('opacity-0');
    }
  });
}
if (modalZoomBtn) {
  modalZoomBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleZoom();
  });
}

// Eventos de teclado
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (modal && !modal.classList.contains('hidden')) {
      if (isZoomed) {
        resetZoom();
      } else {
        closeModal();
      }
    }
  }
});
