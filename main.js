function createStars() {
  const starsContainer = document.getElementById("starsContainer");
  const starCount = 150;

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement("div");
    const size = Math.random() * 3 + 1;
    const starType =
      size < 1.5 ? "star-small" : size < 2.5 ? "star-medium" : "star-large";

    star.className = `star ${starType}`;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.opacity = Math.random() * 0.7 + 0.3;

    starsContainer.appendChild(star);

    // حركة النجوم
    gsap.to(star, {
      duration: Math.random() * 3 + 2,
      x: Math.random() * 100 - 50,
      y: Math.random() * 100 - 50,
      opacity: Math.random() * 0.5 + 0.2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }
}

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function () {
  createStars();
});

// تكوين القائمة المتنقلة
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
});

// إغلاق القائمة عند النقر على رابط
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    hamburger.classList.remove("active");
  });
});
