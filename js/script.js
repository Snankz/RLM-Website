/* ==========================================================================
   RLM MARCENARIA & MÓVEIS PLANEJADOS - INTERACTIVE JAVASCRIPT
   Navbar, Mobile Drawer, Filterable Gallery, Lightbox & Budget Calculator
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Projects Data Structure ---
  const projects = [
    {
      id: 'kitchen-1',
      title: 'Execução de Cozinha Gourmet Dark Oak',
      category: 'cozinhas',
      categoryLabel: 'Cozinha',
      image: 'assets/images/kitchen-1.jpg',
      badge: 'Projeto de Arquiteto',
      description: 'Execução técnica e montagem completa de cozinha planejada a partir de projeto de arquiteto. Armários em tom dark oak, fita LED embutida e ferragens Blum com amortecimento silencioso.',
      dimensions: '18.5 m²',
      materials: 'MDF Naval 18mm, Fitas de Borda ABS Industriais, Ferragens Blum Slow Motion'
    },
    {
      id: 'living-1',
      title: 'Home Theater Ripado & Reforma',
      category: 'salas',
      categoryLabel: 'Sala de Estar',
      image: 'assets/images/living-1.jpg',
      badge: 'Montagem & Ajustes',
      description: 'Execução de painel ripado de piso a teto com gaveteiros suspensos em laca grafite fosco, passa-cabos ocultos e instalação de ferragens de alta precisão.',
      dimensions: '4.20m x 2.70m',
      materials: 'MDF Ripado 30mm, Guias Telescópicas Ocultas, Acabamento Grafite'
    },
    {
      id: 'bedroom-1',
      title: 'Montagem de Closet Integrado',
      category: 'quartos',
      categoryLabel: 'Dormitório',
      image: 'assets/images/bedroom-1.jpg',
      badge: 'Projeto de Arquiteto',
      description: 'Montagem e instalação de closet de casal com portas de correr em alumínio preto e vidro fumé refletivo, executado rigorosamente conforme memorial descritivo do designer.',
      dimensions: '14.0 m²',
      materials: 'Perfil de Alumínio Anodizado Preto, Vidro Temperado Fumé 6mm, MDF Louro Freijó'
    },
    {
      id: 'office-1',
      title: 'Execução de Mobiliário Corporativo',
      category: 'corporativo',
      categoryLabel: 'Corporativo',
      image: 'assets/images/office-1.jpg',
      badge: 'Execução Técnica',
      description: 'Corte, montagem e instalação de marcenaria corporativa sob medida para escritório executivo, incluindo mesa com calha eletrônica e estante modular.',
      dimensions: '22.0 m²',
      materials: 'MDF Melamínico Grafite, Estrutura Metálica, Nichos Iluminados'
    },
    {
      id: 'kitchen-2',
      title: 'Reforma & Adequação de Cozinha Minimalista',
      category: 'cozinhas',
      categoryLabel: 'Cozinha',
      image: 'assets/images/kitchen-2.jpg',
      badge: 'Reforma & Reparo',
      description: 'Reforma de armários existentes e execução de nova ilha central com fecho toque push-to-open, substituição de dobradiças gastas e pintura Laca.',
      dimensions: '16.0 m²',
      materials: 'Laca Microtexturizada Matte, Dobradiças com Amortecedor, MDF Ultra'
    },
    {
      id: 'living-2',
      title: 'Execução de Estante Living & Lareira',
      category: 'salas',
      categoryLabel: 'Sala de Estar',
      image: 'assets/images/living-2.jpg',
      badge: 'Projeto de Arquiteto',
      description: 'Montagem e instalação de estante planejada com nichos iluminados e painel para lareira ecológica, executados fielmente ao projeto do arquiteto.',
      dimensions: '5.50m x 2.60m',
      materials: 'MDF Grafite Tactil, Fita LED High-CRI, Nichos em MDF Amadeirado'
    },
    {
      id: 'bedroom-2',
      title: 'Instalação de Painel de Cama Ripado',
      category: 'quartos',
      categoryLabel: 'Dormitório',
      image: 'assets/images/bedroom-2.jpg',
      badge: 'Montagem Sob Medida',
      description: 'Instalação de cabeceira estendida com painel ripado, mesas flutuantes integradas e alinhamento de fiação e tomadas ocultas.',
      dimensions: '3.80m x 2.50m',
      materials: 'MDF Ripado Carvalho, Corrediças Invisíveis, Interruptores Embutidos'
    },
    {
      id: 'office-2',
      title: 'Mesa de Reunião & Montagem Corporativa',
      category: 'corporativo',
      categoryLabel: 'Corporativo',
      image: 'assets/images/office-2.jpg',
      badge: 'Execução Técnica',
      description: 'Execução de mesa de conferência para 10 lugares com caixa de tomadas retrátil no tampo chanfrado e aparador lateral de apoio.',
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

  // --- 5. Native HTML5 Lightbox Dialog ---
  const modal = document.getElementById('projectModal');
  const modalClose = document.getElementById('modalClose');
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

    const message = encodeURIComponent(`Olá! Vi o trabalho "${project.title}" no site da RLM Marcenaria e gostaria de solicitar um orçamento para reparo ou execução de projeto.`);
    modalCta.href = `https://wa.me/5511998765432?text=${message}`;

    if (typeof modal.showModal === 'function') {
      modal.showModal();
    } else {
      modal.setAttribute('open', '');
    }
  }

  function closeModal() {
    if (!modal) return;
    if (typeof modal.close === 'function') {
      modal.close();
    } else {
      modal.removeAttribute('open');
    }
  }

  if (modalClose) modalClose.addEventListener('click', closeModal);
  
  if (modal) {
    // Close dialog when clicking backdrop area outside dialog container
    modal.addEventListener('click', (e) => {
      const rect = modal.getBoundingClientRect();
      const isInDialog = (
        rect.top <= e.clientY && e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX && e.clientX <= rect.left + rect.width
      );
      if (e.target === modal && !isInDialog) {
        closeModal();
      }
    });
  }

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

  // --- 7. Phone Input Mask & Contact Form Validation ---
  const contactForm = document.getElementById('contactForm');
  const formPhone = document.getElementById('formPhone');
  const formName = document.getElementById('formName');
  const formFeedback = document.getElementById('formFeedback');

  // Format phone automatically: (XX) XXXXX-XXXX or (XX) XXXX-XXXX
  if (formPhone) {
    formPhone.addEventListener('input', (e) => {
      let value = e.target.value.replace(/\D/g, '');
      if (value.length > 11) value = value.slice(0, 11);

      if (value.length > 6) {
        value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
      } else if (value.length > 2) {
        value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
      } else if (value.length > 0) {
        value = `(${value}`;
      }
      e.target.value = value;
    });
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      let isValid = true;

      // Validate name
      if (!formName.value || formName.value.trim().length < 3) {
        formName.classList.add('is-invalid');
        isValid = false;
      } else {
        formName.classList.remove('is-invalid');
      }

      // Validate phone (at least 10 digits)
      const phoneDigits = formPhone.value.replace(/\D/g, '');
      if (!phoneDigits || phoneDigits.length < 10) {
        formPhone.classList.add('is-invalid');
        isValid = false;
      } else {
        formPhone.classList.remove('is-invalid');
      }

      if (!isValid) return;

      const name = formName.value.trim();
      const phone = formPhone.value.trim();
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
      }, 1200);
    });
  }

  // --- 8. IntersectionObserver Scroll Reveal Animations ---
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  
  if ('IntersectionObserver' in window && revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.15
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback if IntersectionObserver is not supported
    revealElements.forEach(el => el.classList.add('revealed'));
  }
});

