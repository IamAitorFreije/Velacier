document.addEventListener('DOMContentLoaded', function() {
    // Initialize Swiper
    const swiper = new Swiper('.swiper-container', {
      // Optional parameters
      loop: true,
      speed: 500,
      slidesPerView: 1,
      spaceBetween: 30,
      centeredSlides: true,
      
      // Enable lazy loading
      lazy: {
        loadPrevNext: true,
      },
      
      // Enable pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      
      // Enable keyboard navigation
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
      
      // Add effect
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      
      // Enable auto height for better responsiveness
      autoHeight: true,
    });
    
    // Handle fullscreen button
    const fullscreenButton = document.querySelector('.fullscreen-button');
    
    fullscreenButton.addEventListener('click', function() {
      if (!document.fullscreenElement) {
        document.querySelector('.product-image-container').requestFullscreen()
          .catch(err => {
            alert(`Error attempting to enable fullscreen mode: ${err.message}`);
          });
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      }
    });
    
    // Handle color option switching
    const colorOptions = document.querySelectorAll('.color-option');
    
    colorOptions.forEach(option => {
      option.addEventListener('click', function() {
        // Remove active class from all options
        colorOptions.forEach(opt => opt.classList.remove('active'));
        
        // Add active class to clicked option
        this.classList.add('active');
        
        // Update color title
        const colorTitle = document.querySelector('.color-title');
        if (this.querySelector('.white-color')) {
          colorTitle.textContent = 'Color: Polar White';
        } else if (this.querySelector('.gradient-color')) {
          colorTitle.textContent = 'Color: Stealth Grey';
        }
      });
    });
  });