export default function navigationTech() {
  const icons = document.querySelectorAll('[data-tech="icon"]');
  const descriptions = document.querySelectorAll('[data-tech="description"]');

  if (icons.length && descriptions.length) {
    icons.forEach((icon, index) => {
      icon.addEventListener('mouseover', () => {
        descriptions.forEach((desc) => {
          desc.classList.remove('active');
        });
        descriptions[index].classList.add('active');
      });
    });
  }
}
