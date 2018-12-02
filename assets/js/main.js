var headerNav = document.getElementById('header');
var secondaryNav = document.querySelector('.secondary-nav');

window.onscroll = function() {
    if (document.body.scrollTop >= 150 || document.documentElement.scrollTop >= 150) {
        headerNav.classList.add("nav-on-scroll");
        secondaryNav.classList.add("secondary-nav-on-scroll");
    } else {
        headerNav.classList.remove("nav-on-scroll");
        secondaryNav.classList.remove("secondary-nav-on-scroll");
    }
};

var mainNav = document.querySelector('.main-nav');
var mainNavElements = document.querySelectorAll('.main-nav a');
var hamburgerButton = document.getElementById('hamburger-button');

hamburgerButton.addEventListener("click",() => toggleHamburgerMenu());

mainNavElements.forEach(function(element){
    element.addEventListener("click",() => toggleHamburgerMenu());
});

function toggleHamburgerMenu(){
    if(hamburgerButton.classList.contains("im-menu")){
        hamburgerButton.className = "im im-x-mark";
    } else {
        hamburgerButton.className = "im im-menu";
    }
    mainNav.classList.toggle("showNavigation");
}

