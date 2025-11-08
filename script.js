// Current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Page-flip effect
document.querySelector('.cta-button').addEventListener('click', e => {
  e.preventDefault();
  const cover = document.getElementById('cover');
  cover.classList.add('flipping');
  setTimeout(() => {
    document.querySelector('#enter').scrollIntoView({ behavior: 'smooth' });
  }, 1000); // matches CSS transition duration
});