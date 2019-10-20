$(document).ready(function(){
    $('.slider').slick({
      arrows: false,
      dots: true,
    });
});

$(document).ready(function(){
  $('.slider-portfolio').slick({
    arrows: false,
    dots: true,
  });
});

$(document).ready(function(){
  $('.slider-team').slick({
    arrows: false,
    dots: true,
  });
});

let buttonNavigation = document.querySelector('button');
buttonNavigation.addEventListener ("click", function RespondClick () {
let menu = document.getElementsByClassName('menu');
menu[0].classList.toggle("show");
}); 


