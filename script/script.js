let index = 0;
let slides = document.getElementsByClassName('slide');

function showSlide(i) {
    slides[index].classList.remove('active');
    index = i;
    slides[index].classList.add('active');
}

document.querySelector('.slider-prev').addEventListener('click', function () {
    showSlide((index - 1 + slides.length) % slides.length);
});

document.querySelector('.slider-next').addEventListener('click', function () {
    showSlide((index + 1) % slides.length);
});

showSlide(0);
