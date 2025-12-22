// moving banners
const images = [
    'images/banner/baner_01.jpeg',
    'images/banner/baner_02.jpeg',
    'images/banner/baner_03.jpeg'
];

const bgA = document.querySelector('.hero-bg--a');
const bgB = document.querySelector('.hero-bg--b');

let i = 0;
let showA = true;

function setInitial() {
    bgA.style.backgroundImage = `url('${images[0]}')`;
    bgA.style.opacity = 1;
}

function nextSlide() {
    i = (i + 1) % images.length;

    const show = showA ? bgB : bgA;
    const hide = showA ? bgA : bgB;

    show.style.backgroundImage = `url('${images[i]}')`;
    show.style.opacity = 1;
    hide.style.opacity = 0;

    showA = !showA;
}

setInitial();
setInterval(nextSlide, 7000);