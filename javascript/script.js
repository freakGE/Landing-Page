const hamburger = document.querySelector('#hamburger');
const header = document.querySelector('.header-container');

hamburger.addEventListener('click', () => {
    header.classList.toggle('show');
    hamburger.classList.toggle('window');
})