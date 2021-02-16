function imgSlider(imageSrc) {
    document.querySelector('.image').src = imageSrc;
}

function changeColor(color) {
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}

function toggleMenu() {
    var menuToggle = document.querySelector('.toggle');
    var nav = document.querySelector('.nav');
    menuToggle.classList.toggle('active');
    nav.classList.toggle('active');
}