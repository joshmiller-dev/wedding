const navbar = document.querySelector(".myNavbar");
const backToTop = document.querySelector(".back-to-top");
const carousel = document.querySelector(".carousel");
const email = document.querySelectorAll(".email");
const envelopeClosed = document.getElementById("closed");
const envelopeOpen= document.getElementById("open");
let sticky = navbar.offsetTop;

window.onscroll = function() {
    stickyNav();
}
//this handles issues with sticky nav when resizing window
window.onresize = function() {
    resizeSticky();
}


function stickyNav(){
    if(window.pageYOffset >= sticky){
        navbar.classList.add("fixed-top");
        navbar.classList.remove("container");
        backToTop.classList.add("fadeIn");
    }else{
        navbar.classList.remove("fixed-top");
        navbar.classList.add("container");
        backToTop.classList.remove("fadeIn");
    }
}

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







