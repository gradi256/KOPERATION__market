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
    "images/hero/1.jpeg",
    "images/hero/2.jpeg",
    "images/hero/3.jpeg",
    "images/hero/4.jpeg",
    "images/hero/5.jpeg",
    "images/hero/6.jpeg"
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