(function ($) {
    "use strict";
    
    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 5000
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
    });
    
})(jQuery);

/* -------------------------------------------------
   ALL YOUR PREVIOUS CODE (navbar, gallery, theme…)
   ------------------------------------------------- */

/* ========== AUTO COUNTER-UP ON SCROLL ========== */
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll('[data-toggle="counter-up"]');
  const factsSection = document.querySelector('.facts');
  let hasCounted = false;

  if (!factsSection) {
    console.warn("Facts section (.facts) not found – counter will not run.");
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasCounted) {
          hasCounted = true;
          startCounters();
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }   // 50% of the section must be visible
  );

  observer.observe(factsSection);

  function startCounters() {
    counters.forEach((counter) => {
      const target = parseInt(counter.textContent, 10);
      const duration = 5000 + Math.random() * 2000; // 5‑7 s
      const steps = 60;                            // ~60 fps
      const increment = target / (duration / (1000 / steps));
      let current = 0;

      counter.textContent = "0";
      counter.classList.add("counter");

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          counter.textContent = target.toLocaleString();
          counter.classList.remove("counting");
          clearInterval(timer);
        } else {
          counter.textContent = Math.floor(current).toLocaleString();
          counter.classList.add("counting");
        }
      }, 1000 / steps);
    });
  }
});