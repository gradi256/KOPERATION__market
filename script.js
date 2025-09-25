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
