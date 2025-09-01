// Smooth scrolling para navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Animação de fade-in ao scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
  observer.observe(el);
});

// Formulário de contato
document.querySelector('.contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const button = this.querySelector('button');
  const originalText = button.innerHTML;
  
  button.innerHTML = 'Enviando... ⏳';
  button.disabled = true;
  
  setTimeout(() => {
    button.innerHTML = 'Mensagem Enviada! ✅';
    setTimeout(() => {
      button.innerHTML = originalText;
      button.disabled = false;
      this.reset();
    }, 2000);
  }, 1500);
});

// Efeito parallax suave no background
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const bg = document.querySelector('.bg-animation');
  bg.style.transform = `translateY(${scrolled * 0.1}px)`;
});

// Highlight da navegação ativa
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.style.color = '#a1a1aa';
    if (link.getAttribute('href') === `#${current}`) {
      link.style.color = '#3b82f6';
    }
  });
});
