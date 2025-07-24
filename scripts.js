function toggleMenu() {
  const menu = document.getElementById('menu');
  const toggleBtn = document.querySelector('.side-nav-toggle');
  menu.classList.toggle('open');
  toggleBtn.setAttribute('aria-expanded', menu.classList.contains('open'));
  document.body.classList.toggle('nav-open');
}

// Menu toggle button
document.querySelector('.side-nav-toggle').addEventListener('click', toggleMenu);

// SPA-style navigation
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('main section');
  const navLinks = document.querySelectorAll('nav a');

  function showSection(sectionId) {
    sections.forEach(sec => sec.classList.add('hidden'));
    const target = document.getElementById(sectionId);
    if (target) target.classList.remove('hidden');
  }

  // Show home by default
  showSection('home');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const sectionId = link.getAttribute('href').substring(1);
      showSection(sectionId);

      // Remove active from others
      navLinks.forEach(l => l.removeAttribute('aria-current'));
      link.setAttribute('aria-current', 'page');

      // Close nav
      document.getElementById('menu').classList.remove('open');
      document.querySelector('.side-nav-toggle').setAttribute('aria-expanded', 'false');
      document.body.classList.remove('nav-open');
    });
  });

  // Contact form submission
  const form = document.querySelector('.contact-form');
  const statusMessage = document.getElementById('form-status');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    statusMessage.textContent = 'Sending...';
    statusMessage.style.color = 'var(--white)';

    const data = new FormData(form);

    fetch(form.action, {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' }
    })
    .then(response => {
      if (response.ok) {
        statusMessage.textContent = 'Thank you! Your message has been sent.';
        statusMessage.style.color = 'lightgreen';
        form.reset();
      } else {
        throw new Error('Server error');
      }
    })
    .catch(() => {
      statusMessage.textContent = 'Oops! Something went wrong.';
      statusMessage.style.color = 'salmon';
    });
  });
});
