document.addEventListener("DOMContentLoaded", () => {
  // Reveal Animations on Scroll
  const reveals = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    { threshold: 0.1 },
  );

  reveals.forEach((reveal) => observer.observe(reveal));

  // Mobile Menu Toggle (Simplified for Premium feel)
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
      mobileMenu.classList.toggle("flex");
    });
  }

  // Parallax effect for blobs
  window.addEventListener("mousemove", (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    const blobs = document.querySelectorAll(".blob");
    blobs.forEach((blob, index) => {
      const speed = (index + 1) * 20;
      blob.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
    });
  });

  // Speed Counter Simulation (Premium feel)
  const speedElement = document.getElementById("speed-counter");
  if (speedElement) {
    let count = 0;
    const target = 76; // ms
    const interval = setInterval(() => {
      if (count < target) {
        count++;
        speedElement.innerText = count;
      } else {
        clearInterval(interval);
      }
    }, 15);
  }
});
