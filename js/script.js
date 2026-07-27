/* ==========================================================================
   RLM MARCENARIA & MÓVEIS PLANEJADOS - INTERACTIVE JAVASCRIPT
   Navbar, Mobile Drawer, Filterable Gallery, Lightbox & Budget Calculator
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Projects Data Structure ---
  const projects = [
    {
      id: 'kitchen-1',
      title: 'Cozinha Gourmet Dark Oak',
      category: 'cozinhas',
      categoryLabel: 'Cozinha',
      image: 'assets/images/kitchen-1.jpg',
      badge: 'MDF Amadeirado',
      description: 'Cozinha planejada de alto padrão com armários em tom dark oak, bancada estendida, iluminação LED embutida sob os armários superiores e ferragens Blum com amortecimento silencioso.',
      dimensions: '18.5 m²',
      materials: 'MDF Naval 18mm, Fitas de Borda ABS, Ferragens Blum Slow Motion, Led 3000K'
    },
    {
      id: 'living-1',
      title: 'Home Theater Ripado Premium',
      category: 'salas',
      categoryLabel: 'Sala de Estar',
      image: 'assets/images/living-1.jpg',
      badge: 'Painel Ripado',
      description: 'Painel ripado em MDF amadeirado de piso a teto com gaveteiros suspensos em acabamento cinza grafite fosco, passa-cabos ocultos e fita LED indireta superior.',
      dimensions: '4.20m x 2.70m',
      materials: 'MDF Ripado 30mm, Pintura Laca Grafite, Guias Telescópicas Ocultas'
    },
    {
      id: 'bedroom-1',
      title: 'Closet Integrado com Vidro Fumé',
      category: 'quartos',
      categoryLabel: 'Dormitório',
      image: 'assets/images/bedroom-1.jpg',
      badge: 'Vidro & Alumínio',
      description: 'Dormitório de casal com closet integrado e portas de correr em alumínio preto fosco e vidro fumé refletivo, com divisões internas inteligentes para acessórios e sapatos.',
      dimensions: '14.0 m²',
      materials: 'Perfil de Alumínio Anodizado Preto, Vidro Temperado Fumé 6mm, MDF Louro Freijó'
    },
    {
      id: 'office-1',
      title: 'Estudo Executivo & Biblioteca',
      category: 'corporativo',
      categoryLabel: 'Corporativo',
      image: 'assets/images/office-1.jpg',
      badge: 'Corporativo',
      description: 'Mobiliário corporativo sob medida para escritório executivo, incluindo mesa principal reforçada com passe-fios eletrônicos e estante modular de livros.',
      dimensions: '22.0 m²',
      materials: 'MDF Melamínico Grafite, Estrutura Metálica Monocromática, Nichos Iluminados'
    },
    {
      id: 'kitchen-2',
      title: 'Ilha Central & Laca Minimalista',
      category: 'cozinhas',
      categoryLabel: 'Cozinha',
      image: 'assets/images/kitchen-2.jpg',
      badge: 'Laca Fosca',
      description: 'Projeto moderno de cozinha minimalista com acabamento em Laca Fosca cinza escuro, portas com fecho toque tipo push-to-open e ilha com marcenaria integrada.',
      dimensions: '16.0 m²',
      materials: 'Laca Microtexturizada Matte, Dobradiças com Amortecedor, MDF Ultra'
    },
    {
      id: 'living-2',
      title: 'Estante Living & Lareira Integrada',
      category: 'salas',
      categoryLabel: 'Sala de Estar',
      image: 'assets/images/living-2.jpg',
      badge: 'Design Exclusivo',
      description: 'Móvel planejado completo para sala com nichos iluminados, painel central para lareira ecológica e gavetões profundos com abertura de precisão.',
      dimensions: '5.50m x 2.60m',
      materials: 'MDF Grafite Tactil, Fita LED High-CRI, Nichos em MDF Amadeirado'
    },
    {
      id: 'bedroom-2',
      title: 'Painel de Cama Flutuante Ripado',
      category: 'quartos',
      categoryLabel: 'Dormitório',
      image: 'assets/images/bedroom-2.jpg',
      badge: 'Suíte Master',
      description: 'Cabeceira de cama estendida com painel ripado acústico, mesas de apoio flutuantes integradas com tomadas USB ocultas e iluminação de leitura bidirecional.',
      dimensions: '3.80m x 2.50m',
      materials: 'MDF Ripado Carvalho, Corrediças Invisíveis, Interruptores Embutidos'
    },
    {
      id: 'office-2',
      title: 'Mesa de Reunião Corporativa',
      category: 'corporativo',
      categoryLabel: 'Corporativo',
      image: 'assets/images/office-2.jpg',
      badge: 'Sala de Reunião',
      description: 'Mesa de conferência para 10 lugares com caixa de conectividade oculta embutida no tampo chanfrado e aparador lateral de apoio com portas de toque.',
      dimensions: '3.60m x 1.40m',
      materials: 'MDF Duplo 36mm, Borda Chanfrada 45°, Caixa de Tomadas Retrátil'
    }
  ];

  // --- 2. Sticky Navbar & Scrollspy ---
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Scrollspy active state
    let currentSectionId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  });

  // --- 3. Mobile Navigation Drawer ---
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerBackdrop = document.getElementById('drawerBackdrop');
  const mobileLinks = document.querySelectorAll('.mobile-nav-links .nav-link');

  function openDrawer() {
    mobileToggle.classList.add('active');
    mobileDrawer.classList.add('active');
    drawerBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    mobileToggle.classList.remove('active');
    mobileDrawer.classList.remove('active');
    drawerBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      if (mobileDrawer.classList.contains('active')) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });
  }

  if (drawerBackdrop) {
    drawerBackdrop.addEventListener('click', closeDrawer);
  }

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  // --- 4. Portfolio Filterable Gallery ---
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryGrid = document.getElementById('galleryGrid');

  function renderGallery(filter = 'todos') {
    if (!galleryGrid) return;
    
    galleryGrid.innerHTML = '';
    
    const filteredProjects = filter === 'todos' 
      ? projects 
      : projects.filter(p => p.category === filter);

    filteredProjects.forEach(project => {
      const itemEl = document.createElement('div');
      itemEl.className = 'gallery-item';
      itemEl.setAttribute('data-id', project.id);
      itemEl.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="gallery-img" loading="lazy" />
        <span class="gallery-badge">${project.badge}</span>
        <div class="gallery-overlay">
          <span class="gallery-category">${project.categoryLabel}</span>
          <h3 class="gallery-title">${project.title}</h3>
        </div>
      `;

      itemEl.addEventListener('click', () => openProjectModal(project));
      galleryGrid.appendChild(itemEl);
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const category = btn.getAttribute('data-filter');
      renderGallery(category);
    });
  });

  // Initial render
  renderGallery('todos');

  // --- 5. Lightbox Modal ---
  const modal = document.getElementById('projectModal');
  const modalClose = document.getElementById('modalClose');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalImg = document.getElementById('modalImg');
  const modalCategory = document.getElementById('modalCategory');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalDimensions = document.getElementById('modalDimensions');
  const modalMaterials = document.getElementById('modalMaterials');
  const modalCta = document.getElementById('modalCta');

  function openProjectModal(project) {
    if (!modal) return;
    
    modalImg.src = project.image;
    modalImg.alt = project.title;
    modalCategory.textContent = project.categoryLabel;
    modalTitle.textContent = project.title;
    modalDesc.textContent = project.description;
    modalDimensions.textContent = project.dimensions;
    modalMaterials.textContent = project.materials;

    const message = encodeURIComponent(`Olá! Vi o projeto "${project.title}" no site da RLM Marcenaria e gostaria de solicitar um orçamento para algo parecido.`);
    modalCta.href = `https://wa.me/5511998765432?text=${message}`;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      closeModal();
    }
  });

  // --- 6. Interactive 3D Budget Estimator ---
  const calcEnvironment = document.getElementById('calcEnvironment');
  const calcFinish = document.getElementById('calcFinish');
  const calcSize = document.getElementById('calcSize');
  const calcPriceResult = document.getElementById('calcPriceResult');
  const calcWhatsappBtn = document.getElementById('calcWhatsappBtn');

  function calculateBudget() {
    if (!calcEnvironment || !calcFinish || !calcSize) return;

    const envValue = parseFloat(calcEnvironment.value) || 1.0;
    const finishValue = parseFloat(calcFinish.value) || 1.0;
    const sizeValue = parseFloat(calcSize.value) || 1.0;

    // Base multiplier estimation formula
    const basePriceMin = 3200 * envValue * finishValue * sizeValue;
    const basePriceMax = basePriceMin * 1.45;

    const formattedMin = Math.round(basePriceMin).toLocaleString('pt-BR');
    const formattedMax = Math.round(basePriceMax).toLocaleString('pt-BR');

    if (calcPriceResult) {
      calcPriceResult.textContent = `R$ ${formattedMin} - R$ ${formattedMax}`;
    }

    const envText = calcEnvironment.options[calcEnvironment.selectedIndex].text;
    const finishText = calcFinish.options[calcFinish.selectedIndex].text;
    const sizeText = calcSize.options[calcSize.selectedIndex].text;

    const waText = encodeURIComponent(
      `Olá! Fiz uma simulação de orçamento no site da RLM Marcenaria:\n` +
      `• Ambiente: ${envText}\n` +
      `• Acabamento: ${finishText}\n` +
      `• Porte/Metragem: ${sizeText}\n` +
      `• Estimativa Gerada: R$ ${formattedMin} a R$ ${formattedMax}\n` +
      `Gostaria de agendar uma medição técnica no local!`
    );

    if (calcWhatsappBtn) {
      calcWhatsappBtn.href = `https://wa.me/5511998765432?text=${waText}`;
    }
  }

  if (calcEnvironment) calcEnvironment.addEventListener('change', calculateBudget);
  if (calcFinish) calcFinish.addEventListener('change', calculateBudget);
  if (calcSize) calcSize.addEventListener('change', calculateBudget);

  // Initial calculation
  calculateBudget();

  // --- 7. Contact Form Handler ---
  const contactForm = document.getElementById('contactForm');
  const formFeedback = document.getElementById('formFeedback');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('formName').value;
      const phone = document.getElementById('formPhone').value;
      const projectType = document.getElementById('formProjectType').value;
      const message = document.getElementById('formMessage').value;

      if (formFeedback) {
        formFeedback.style.display = 'block';
        formFeedback.style.color = '#34d399';
        formFeedback.textContent = 'Mensagem enviada com sucesso! Redirecionando para o WhatsApp...';
      }

      const waMsg = encodeURIComponent(
        `Olá RLM Marcenaria!\n` +
        `Meu nome é: ${name}\n` +
        `Telefone: ${phone}\n` +
        `Tipo de Projeto: ${projectType}\n` +
        `Mensagem: ${message}`
      );

      setTimeout(() => {
        window.open(`https://wa.me/5511998765432?text=${waMsg}`, '_blank');
        contactForm.reset();
        if (formFeedback) formFeedback.style.display = 'none';
      }, 1500);
    });
  }
});
