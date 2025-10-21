const images = document.querySelectorAll('.slider-images img');
let current = 0;

function showImage(index) {
images.forEach(img => img.classList.remove('active'));
images[index].classList.add('active');
}

document.querySelector('.next').onclick = () => {
current = (current + 1) % images.length;
showImage(current);
};

document.querySelector('.prev').onclick = () => {
current = (current - 1 + images.length) % images.length;
showImage(current);
};

function toggleMenu() {
    document.querySelector("nav ul").classList.toggle("show");
}
