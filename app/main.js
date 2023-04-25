import menuItems from "./menuIconChange.js";

const bloob = document.querySelector(".bloob");

const hello = document.getElementById("hello");

let scrollPosition = 0; /* inicia as variaveis em 0 */
let positionY = 0;

/* basicamente um event listener de quando o mouse se mexe */
document.body.onmousemove = (event) => {
  const { clientX, clientY } = event; /* pega a posição XY do mouse */

  scrollPosition = window.scrollY; /* pega a posição Y do scroll se tiver */
  positionY = clientY + scrollPosition; /* soma a posição do mouse e scroll */

  scrolling(clientY); /* função passando a posição Y do mouse */

  bloob.style.top = `${positionY}px`; /* adiciona a posição no css da div bloob eixo Y */
  bloob.style.left = `${clientX}px`; /* adiciona a posição no css da div bloob eixo X */
};

/* event listener de scroll, para o blob seguir o cursor mesmo sem o movimento do mouse */
function scrolling(clientY) {
  document.addEventListener("scroll", () => {
    scrollPosition = window.scrollY; /* pega a posição Y do scroll se tiver */
    positionY = clientY + scrollPosition; /* soma a posição do mouse e scroll */

    bloob.style.top = `${positionY}px`; /* adiciona a posição no css da div bloob eixo Y */
  });
}

document.addEventListener("scroll", () => {
  scrollPosition = window.scrollY;

  if (scrollPosition >= 100) {
    hello.classList.add("typed");
    hello.style.display = "block";
  }
});

menuItems()

