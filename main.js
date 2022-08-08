//Swiper configurations
const swiper = new Swiper('.swiper', {
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 640px
      770: {
        slidesPerView: 2.3,
        spaceBetween: 40
      }
    }
  })

//Scroll event (reveal)
function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    var header = document.querySelector('.header');

    reveals.forEach((reveal) => {
        var windowheight = window.innerHeight;
        var elementTop = reveal.getBoundingClientRect().top;
        var elementVisible = 100;

        if (elementTop < windowheight - elementVisible) {
            reveal.classList.add("active");
        } else {
            reveal.classList.remove("active");
        }
    });
}

window.addEventListener("scroll", reveal);

//Display block in email text (for copy)
email.addEventListener("click", function() {
  const paragraph = document.querySelector(".paragraph__email")
  paragraph.classList.toggle("display-none");
});


//Menu mobile
const menuButton = document.querySelector('.fa-bars');
const menuSection = document.querySelector('.header__menu-mobile')
var body = document.body;

menuButton.addEventListener('click', _ => {
  toggleMenu(menuSection)
  body.classList.toggle('active__menu-background')
});

//Close menu mobile
const btnCloseMenu = document.querySelector('.header__btn-close');
btnCloseMenu.addEventListener('click', _ => {
  toggleMenu(menuSection)
})

const toggleMenu = function (element) {
  element.classList.toggle('active__menu');
}

const menuLinks = document.querySelectorAll('a[href^="#"]')

for(let i = 0; i <= menuLinks.length; i++) {
  menuLinks[i].addEventListener('click', _ => {
    toggleMenu(menuSection);
    scrollToSection();
  })
}

function scrollToSection(event){
  const distanceFromTheTop = getDistanceFromTheTop(event.target) - 100;
  nativeScroll(distanceFromTheTop)
}

function getDistanceFromTheTop(element) {
  const id = element.getAttribute("href");
  return document.querySelector(id).offsetTop;
}

function nativeScroll(distanceFromTheTop) {
  window.scroll({
    top: distanceFromTheTop,
    behavior: "smooth",
  });
}