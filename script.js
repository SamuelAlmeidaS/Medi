/** Fazer o menu mobile, seta para voltar ao topo da página */

var menuBar = document.querySelector('.menu_mobile div')

menuBar.addEventListener('click',(e)=>{
    e.preventDefault()
    let menuMobile = document.querySelector('.menu ul')
    menuMobile.Classlist.add('show-me')
    alert('Clicando')
})