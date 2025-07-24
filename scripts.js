function toggleMenu() {
  document.getElementById('menu')
    .classList.toggle('hidden');
}

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = e.target.getAttribute('href').substring(1);
    document.querySelectorAll('main section')
      .forEach(sec => sec.classList.add('hidden'));
    document.getElementById(target).classList.remove('hidden');
    document.getElementById('menu')
      .classList.add('hidden');
  });
});
