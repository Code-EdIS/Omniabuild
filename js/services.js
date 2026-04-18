// mobile menu
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("max-h-64");
  });

// scroll animations
  const elements = document.querySelectorAll(".fade-up");

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15
  });

  // importante: attacca subito, NON aspettare load
  elements.forEach(el => observer.observe(el));