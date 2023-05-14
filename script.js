  document.addEventListener("DOMContentLoaded", function() {
    var slides = document.querySelectorAll(".hero-image img");
    var currentSlide = 0;

    function showSlide() {
      slides[currentSlide].classList.remove("active");
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add("active");
    }

    setInterval(showSlide, 10000);
  });
