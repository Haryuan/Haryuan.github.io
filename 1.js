let index = 0;
function moveSlide(step) {
    const carousel = document.querySelector('.carousel');
    const totalItems = document.querySelectorAll('.carousel-item').length;
    index += step;
    if (index < 0) {
        index = totalItems - 1;
    } 
    else if (index >= totalItems) {
        index = 0;
    }
    carousel.style.transform = `translateX(-${index * 100}%)`;
}