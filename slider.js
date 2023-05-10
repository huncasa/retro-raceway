document.addEventListener("DOMContentLoaded", function() {
    var carousels = document.getElementsByClassName('carousel-inner');
    var speed = 20;
    var isHovered = false;
    
    for (var i = 0; i < carousels.length; i++) {
      autoSlider(carousels[i]);
    }
    
    function autoSlider(carousel) {
      var left = 0;
      var slideWidth = carousel.querySelector('.carousel__slide').offsetWidth + 10;
      
      setInterval(function() {
        if (!isHovered) {
          left -= 1;
          carousel.style.transform = "translateX(" + left + "px)";
          if (left < -slideWidth) {
            var firstSlide = carousel.querySelector(".carousel__slide:first-child");
            carousel.appendChild(firstSlide);
            carousel.style.transform = "translateX(0)";
            left = 0;
          }
        }
      }, speed);
    }
    
    for (var i = 0; i < carousels.length; i++) {
      carousels[i].addEventListener('mouseover', function() {
        isHovered = true;
      });
    
      carousels[i].addEventListener('mouseout', function() {
        isHovered = false;
      });
    }
  });
  