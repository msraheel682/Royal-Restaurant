
let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');

menu.onclick = ()=>{
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
}

//  <!-- Initialize Swiper -->

   var swiper = new Swiper(".home-slider", {
     spaceBetween: 30,
     centeredSlides: true,
     autoplay: {
       delay: 7500,
       disableOnInteraction: false,
     },
     pagination: {
       el: ".swiper-pagination",
       clickable: true,
     },
     loop:true,
   });

  //  move to section by click

  document.addEventListener('DOMContentLoaded', function() {
    const menuLinks = document.querySelectorAll('.navbar a');
  
    menuLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1); // Remove the '#'
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          // Use smooth scrolling behavior
          targetElement.scrollIntoView({
            behavior: 'smooth',
          });
        }
      });
    });
  });
  