const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('toggle-icon','nav_bar')

const nnav = document.querySelectorAll('.navLinks')
function takeout (){
    const menu = document.getElementById('nav_bar')
    menu.classList.remove('show')
}
nnav.forEach(a =>a.addEventListener('click', takeout))