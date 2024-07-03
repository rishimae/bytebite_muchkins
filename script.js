let currentIndex = 0;

function moveCarousel(direction) {
  const carousel = document.querySelector('.carousel');
  const featureBoxes = document.querySelectorAll('.feature-box');
  const totalBoxes = featureBoxes.length;

  currentIndex += direction;
  if (currentIndex < 0) {
    currentIndex = totalBoxes - 1;
  } else if (currentIndex >= totalBoxes) {
    currentIndex = 0;
  }

  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}
