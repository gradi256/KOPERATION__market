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


document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".servicebox");
  const items = document.querySelectorAll(".boxServ");
  let index = 0;
  let visible = window.innerWidth > 850 ? 3 : 1; // 3 en desktop, 1 en mobile

  // Fonction de slide automatique
  function slide() {
    index++;
    if (index > items.length - visible) {
      index = 0;
    }
    track.style.transform = `translateX(-${index * (100 / visible)}%)`;
  }

  setInterval(slide, 3000); // défile toutes les 3s

  // Recalculer si resize
  window.addEventListener("resize", () => {
    visible = window.innerWidth > 850 ? 3 : 1;
    index = 0;
    track.style.transform = "translateX(0)";
  });

  // Animation au scroll (IntersectionObserver)
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  items.forEach(service => observer.observe(service));
});
