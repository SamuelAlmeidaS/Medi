/** Fazer o menu mobile, seta para voltar ao topo da página */

const bntMobile = document.getElementById('menu-btn');

function toggleMenu(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

bntMobile.addEventListener('click', toggleMenu);