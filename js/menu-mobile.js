export default function initMenuMobile() {
  const btnFechar = document.querySelector('.btn-fechar');
  const btnMenu = document.querySelector(".btn-menu");
  const menuMobile = document.querySelector('.menu-mobile');
  function toggleMenu(event) {
    event.preventDefault();
    menuMobile.classList.toggle('active');
  }

  
  const events = ['touchstart', 'click'];
  events.forEach((event) => {
    btnMenu.addEventListener(event, toggleMenu)
    btnFechar.addEventListener(event, toggleMenu)
  })
}
