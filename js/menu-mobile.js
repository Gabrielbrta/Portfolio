export default function initMenuMobile() {
  const btnFechar = document.querySelector('.btn-fechar');
  const btnMenu = document.querySelector('.btn-menu');
  const menuMobile = document.querySelector('.menu-mobile');
  const mobileLinks = document.querySelectorAll('.mobile-links li');
  const sections = document.querySelectorAll('section[id]');

  if (sections.length && mobileLinks.length) {
    function toggleMenu(event) {
      event.preventDefault();
      menuMobile.classList.toggle('active');
      console.log(event.target.index);
    }

    function scrollToSection(index) {
      sections[index].scrollIntoView({ block: 'start', behavior: 'smooth' });
    }

    const events = ['touchstart', 'click'];
    events.forEach((event) => {
      btnMenu.addEventListener(event, toggleMenu);
      btnFechar.addEventListener(event, toggleMenu);
    });

    mobileLinks.forEach((item, index) => item.addEventListener('click', (event) => {
      toggleMenu(event);
      scrollToSection(index);
    }));
  }
}
