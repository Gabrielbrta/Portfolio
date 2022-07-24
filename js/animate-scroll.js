import debounce from "./dobounce.js";
export default function initAnimateScroll() {
  const animateElements = document.querySelectorAll('[data-anime]');

  function handleAnime() {
    animateElements.forEach((item) => {
      const distanceItem = item.getBoundingClientRect().top;
      const windowHeight = window.innerHeight * 0.8;
      if (distanceItem < windowHeight) item.classList.add('active');
    });
  }
  window.addEventListener('scroll', debounce(handleAnime, 200))
}