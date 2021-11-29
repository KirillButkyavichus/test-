const buttonMenu = document.querySelector('.header-menu__burger');
const burgerMenuClose = document.querySelector('.menu__body-close');
buttonMenu.addEventListener('click',toggleMenu);
burgerMenuClose.addEventListener('click',toggleMenu);
function toggleMenu ()  {
  const menuWindow = document.querySelector('.menu');
  menuWindow.classList.toggle('menu_active');
}