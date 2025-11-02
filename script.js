// -------------------------------------------------
// Theme toggle SWITCH
// -------------------------------------------------
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        // Dark mode
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
    } else {
        // Light mode
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
    }
});

// -------------------------------------------------
// Smooth scrolling (unchanged)
// -------------------------------------------------
document.querySelectorAll('a.nav-link[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// -------------------------------------------------
// Smooth scrolling for navbar links
// -------------------------------------------------
document.querySelectorAll('a.nav-link[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });

    /* ========== AUTO COUNTER-UP ON SCROLL ========== */
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll('[data-toggle="counter-up"]');
  const factsSection = document.querySelector('.facts');
  let hasCounted = false;

  // Intersection Observer: trigger when section is 50% visible
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasCounted) {
        hasCounted = true;
        startCounters();
        observer.unobserve(entry.target); // Run only once
      }
    });
  }, { threshold: 0.5 });

  if (factsSection) {
    observer.observe(factsSection);
  }

  function startCounters() {
    counters.forEach(counter => {
      const target = parseInt(counter.textContent, 10);
      const duration = 5000 + Math.random() * 2000; // 5–7 seconds
      const steps = 60; // ~60 FPS
      const increment = target / (duration / (1000 / steps));
      let current = 0;

      counter.textContent = '0';
      counter.classList.add('counter');

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          counter.textContent = target.toLocaleString(); // Add commas for large numbers
          counter.classList.remove('counting');
          clearInterval(timer);
        } else {
          counter.textContent = Math.floor(current).toLocaleString();
          counter.classList.add('counting');
        }
      }, 1000 / steps);
    });
  }
});