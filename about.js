const ham = document.querySelector('.hamburger');
const navbar = document.querySelector('.navig');
const x = document.querySelector('.x');
ham.addEventListener('click', () => {
  navbar.classList.toggle('active');
});
x.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

console.log(navbar);
