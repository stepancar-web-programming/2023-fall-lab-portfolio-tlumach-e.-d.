(function () {
  const carouselItems = document.querySelectorAll(".carousel_item");
  const prevButton = document.querySelector(".prev_button");
  const nextButton = document.querySelector(".next_button");
  let currentSlide = 0;

  function showSlide(n) {
    carouselItems[currentSlide].style.display = "none";
    currentSlide = (n + carouselItems.length) % carouselItems.length;
    carouselItems[currentSlide].style.display = "block";
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  function updateSlide() {
    showSlide(currentSlide);
  }

  nextButton.addEventListener("click", nextSlide);
  prevButton.addEventListener("click", prevSlide);

  window.updateSlide = updateSlide;

  showSlide(currentSlide);
})();

setInterval(nextSlide, 5000);

var submitButton = document.querySelector(".contacs_form form button");

submitButton.addEventListener("click", function (event) {
  event.preventDefault();

  alert("Form submitted!");
});
