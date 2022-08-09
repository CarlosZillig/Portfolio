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
});

//Close menu mobile
const btnCloseMenu = document.querySelector('.header__btn-close');
btnCloseMenu.addEventListener('click', _ => {
  toggleMenu(menuSection)
})

//Open and close menu mobile when clicked
const menuLinks = document.querySelectorAll('a[href^="#"]')
menuLinks.forEach(item => {
  item.addEventListener('click', _ => {
    toggleMenu(menuSection)
  });
})

//Light mode in all elements
const btnTheme = document.querySelector(".btnTheme")
btnTheme.addEventListener("click", _ => {
  const body = document.body;
  const a = document.querySelectorAll(".light__mode-on");
  const header = document.querySelector(".header");
  lightModeOn(body)

  a.forEach(item => {
    lightModeOn(item)
  })

  header.classList.toggle("header__light-mode")
  menuLinks.forEach(item => {
    item.classList.toggle("color__black")
  })

  //Add light theme in menu mobile
  lightModeOn(menuSection)
})


//Functions

//Open and close menu mobile
const toggleMenu = function (element) {
  element.classList.toggle('active__menu');
}

//Add class light__mode
const lightModeOn = function (element) {
  element.classList.toggle('light__mode');
}