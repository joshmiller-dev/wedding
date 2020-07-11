const navbar = document.querySelector(".myNavbar");
const backToTop = document.querySelector(".back-to-top");
const carousel = document.querySelector(".carousel");
const email = document.querySelectorAll(".email");
const envelopeClosed = document.getElementById("closed");
const envelopeOpen= document.getElementById("open");
const regLinks = document.querySelectorAll(".registry");
const heart = document.querySelector(".fa-heart");
// const zola = document.querySelector(".registry-zola");
let sticky = navbar.offsetTop;

window.onscroll = function() {
    stickyNav();
}
//this handles issues with sticky nav when resizing window
window.onresize = function() {
    resizeSticky();
}

//increase heart size on hover of registry links
for(let i = 0; i < regLinks.length; i++){
    regLinks[i].addEventListener("mouseover", function(){
        heart.classList.add("grow");
    });

    regLinks[i].addEventListener("mouseout", function(){
        heart.classList.remove("grow");
    });
}


function stickyNav(){
    if(window.pageYOffset >= sticky || document.body.scrollTop >= sticky){
        navbar.classList.add("fixed-top");
        navbar.classList.remove("container");
        backToTop.classList.add("fadeIn");
    }else{
        navbar.classList.remove("fixed-top");
        navbar.classList.add("container");
        backToTop.classList.remove("fadeIn");
    }
}


//fixes zola logo  being weird on chrome unless refreshed
// setTimeout(function() {
//     zola.hide().show(0);
// }, 500);


function resizeSticky(){
    navbar.classList.remove("fixed-top");
    sticky = navbar.offsetTop;
    stickyNav();
}



for(var i = 0; i < email.length; i++){
    email[i].addEventListener("mouseover", function(){
        envelopeClosed.style.display = "none";
        envelopeOpen.style.display = "inline-block";
    
    });

    email[i].addEventListener("mouseout", function(){
        envelopeClosed.style.display = "inline-block";
        envelopeOpen.style.display = "none";
    });
}







