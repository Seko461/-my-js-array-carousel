

// lista di immagini
const slides = [
    "01.jpeg",
    "02.jpeg",
    "03.jpeg",
    "04.jpeg",
]

const slidesElement = document.querySelector('.slides');
const thumbElement = document.querySelector('.thumbnails');


let activeImage = 0;

console.log(slides, activeImage, slidesElement);



// genero le immagini

for (let i = 0; i < slides.length; i++) {
    const slide = slides[i];
    const thumb = slides[i];
    console.log(slide);

    const slideMarkup = ` <img class="${i === activeImage ? 'active' : ''}" src="./assets/img/${slide}" alt="">`;
    const thumbMarkup = ` <img class="${i === activeImage ? 'active' : ''}" src="./assets/img/${thumb}" alt="">`;
    console.log(slideMarkup);

    slidesElement.insertAdjacentHTML('beforeend', slideMarkup);
    thumbElement.insertAdjacentHTML('beforeend', thumbMarkup);

};






// funzione pulsanti

const prev = document.querySelector('.prev');

prev.addEventListener('click', function () {
    console.log('prev');

    activeImage--
    console.log(activeImage);

    // debug indice activeImage

    if (activeImage < 0) {
        activeImage = slides.length - 1;
    }

    //cambio la classe active all'immagine

    const currentImage = document.querySelector('img.active');
    console.log(currentImage);

    currentImage.classList.remove('active');

    const allSlides = document.querySelectorAll('.slides>img');

    console.log(activeImage, slides, allSlides);

    console.log(allSlides[activeImage]);

    allSlides[activeImage].classList.add('active');



});

const next = document.querySelector('.next');

next.addEventListener('click', function () {
    console.log('next');

    activeImage++
    console.log(activeImage);

    // debug indice activeImage

    if (activeImage > slides.length - 1) {
        activeImage = 0;
    }

    //cambio la classe active all'immagine

    const currentImage = document.querySelector('img.active');
    console.log(currentImage);

    currentImage.classList.remove('active');

    const allSlides = document.querySelectorAll('.slides>img');

    console.log(activeImage, slides, allSlides);

    console.log(allSlides[activeImage]);

    allSlides[activeImage].classList.add('active');



});


console.log(prev, next);