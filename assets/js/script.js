

// lista di immagini
const slides = [
    "01.jpeg",
    "02.jpeg",
    "03.jpeg",
    "04.jpeg",
]

const slidesElement = document.querySelector('.slides');

let activeImage = 0;

console.log(slides, activeImage, slidesElement);



// genero le immagini

for (let i = 0; i < slides.length; i++) {
    const slide = slides[i];

    console.log(slide);

    const slideMarkup = ` <img class="${i === activeImage ? 'active' : ''}" src="./assets/img/${slide}" alt="">`;

    console.log(slideMarkup);

    slidesElement.insertAdjacentHTML('beforeend', slideMarkup);

};


// funzione pulsanti