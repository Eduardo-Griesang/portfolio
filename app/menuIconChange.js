/* pega o tamanho da tela e o conteúdo do menu */
const windowSize = window.innerWidth;
const menuTxt = document.querySelectorAll(".menu-item");

/* se a tela for menor ou igual a 768px muda o conteúdo do menu para ícones do Fonts Awesome */
function menuItems() {
  if (windowSize <= 768) {
    menuTxt[0].innerHTML = '<i class="fa-solid fa-user"></i>';
    menuTxt[1].innerHTML = '<i class="fa-solid fa-code"></i>';
    menuTxt[2].innerHTML = '<i class="fa-solid fa-sliders"></i>';
    menuTxt[3].innerHTML = '<i class="fa-sharp fa-solid fa-bars"></i>';
  }
}

export default menuItems;