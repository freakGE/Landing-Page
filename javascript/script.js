const hamburger = document.querySelector('#hamburger');
const header = document.querySelector('.header-container');
// const window = document.createElement('.window');

function btnClicked() {
    alert('aaaa');
}
let delay = 1000;
hamburger.addEventListener('click', () => {
    header.classList.toggle('show');
    // header.appendChild('window');
    hamburger.classList.toggle('window');
//    setTimeout( btnClicked, delay);
})