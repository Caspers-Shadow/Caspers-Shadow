function toggleMenu() {
  document.getElementById('menu').classList.toggle('hidden');
}

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const sectionId = this.getAttribute('href').substring(1);

    // Hide all sections
    document.querySelectorAll('main section').forEach(sec => {
      sec.classList.add('hidden');
    });

    // Show the selected section
    document.getElementById(sectionId).classList.remove('hidden');

    // Hide the menu
    document.getElementById('menu').classList.add('hidden');
  });
});

