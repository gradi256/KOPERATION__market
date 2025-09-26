let btnMenuOuverture = document.getElementById("btnMenuOuverture");
btnMenuOuverture.addEventListener("click",() => {
    let navbar = document.querySelector(".navbar");
    navbar.classList.add("navbar2");
})

let btnMenuFermeture = document.getElementById("btnMenuFermeture");
btnMenuFermeture.addEventListener("click",() => {
    let navbar = document.querySelector(".navbar");
    navbar.classList.remove("navbar2");
})


// hero

// tableau des images
const imagesHero = [
    "images/hero/1.jpg",
    "images/hero/2.jpg",
    "images/hero/3.jpg",
    "images/hero/4.jpg",
    "images/hero/5.jpg",
    "images/hero/6.jpg"
];

let indexHero = 0;
const heroslider = document.getElementById("heroSlider");

// fonction pour changer l'image
function changeHeroImgage() {
    indexHero++;
    if(indexHero >= imagesHero.length) indexHero = 0;
    heroslider.style.opacity = 0; 
    setTimeout(() => {
        heroslider.src = imagesHero[indexHero];
        heroslider.style.opacity = 1;
    }, 300);
}

setInterval(changeHeroImgage,3000);