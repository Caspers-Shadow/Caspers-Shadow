function toggleMenu() {
  document.getElementById('menu').classList.toggle('hidden');
}

// Initially show home, hide others
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('main section').forEach((sec) => {
    if (sec.id === 'home') sec.classList.remove('hidden');
    else sec.classList.add('hidden');
  });
});

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const sectionId = this.getAttribute('href').substring(1);

    // Hide all sections
    document.querySelectorAll('main section').forEach(sec => {
      sec.classList.add('hidden');
    });

    // Show selected
    document.getElementById(sectionId).classList.remove('hidden');

    // Close menu
    document.getElementById('menu').classList.add('hidden');
  });
});
