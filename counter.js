document.addEventListener("DOMContentLoaded", function() {
    function startCountAnimation(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting && !entry.target.dataset.animationStarted) {
            var element = entry.target;
            var endCountValue = parseFloat(element.textContent.trim());
            var startValue = 0;
            var duration = 2000;
            var startTime = null;
      
            function animate(timestamp) {
              if (!startTime) startTime = timestamp;
              var progress = timestamp - startTime;
              var currentValue = startValue + ((endCountValue - startValue) * progress) / duration;
              element.textContent = Math.floor(currentValue);
      
              if (progress < duration) {
                requestAnimationFrame(animate);
              } else {
                element.textContent = Math.floor(endCountValue); 
                element.dataset.animationStarted = true; 
              }
            }
      
            requestAnimationFrame(animate);
          }
        });
      }
      
      var countElements = document.querySelectorAll('.bar__number');
      var observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0
      };
      
      var observer = new IntersectionObserver(startCountAnimation, observerOptions);
      
      countElements.forEach(function(element) {
        observer.observe(element);
      });      
});