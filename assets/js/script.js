const menu = document.getElementById('menu');
const backTop = document.getElementById('backToTop')

document.getElementById('menuOpen').addEventListener('click', () => {
    toggle(menu)
});

document.getElementById('menuClose').addEventListener('click', () => {
    toggle(menu)
});

function toggle(element) {
    element.classList.toggle('show-menu');
}


const zonaObjetivo = document.getElementById('targetZone');

window.addEventListener('scroll', () => {
  const posicionObjetivo = zonaObjetivo.getBoundingClientRect().top;

  let posicionScroll = window.innerHeight || document.documentElement.clientHeight;

  if (posicionObjetivo < posicionScroll) {
    backTop.classList.add('show-menu');
  } else {
    backTop.classList.remove('show-menu');
  }
});
