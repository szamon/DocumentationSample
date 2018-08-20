//ONCLICK MENU

var menuButton = document.querySelector(".mobileMenuButton");
var menu = document.querySelector(".mobileMenu");


menuButton.onclick = function(){
    console.log("dupa");
    if(menuButton.classList.contains("mobileMenuButtonOpen")){
        menuButton.classList.remove("mobileMenuButtonOpen");
        menu.classList.remove("mobileMenuOpen");
    }
    else{
        menuButton.classList.add("mobileMenuButtonOpen");
        menu.classList.add("mobileMenuOpen");
    }
}

function init() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 300,
            element = document.querySelector(".mobileMenuButton");

        if (distanceY > shrinkOn) {
                //element.style.visibility = 'visible';
                element.style.right = '15px';
                console.log("szrinkon");

        } else {
                //element.style.visibility = 'hidden';
                element.style.right = '-115px';
                console.log("nieszrinkon");
        }
    });
}

init();