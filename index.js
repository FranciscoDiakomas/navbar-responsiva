// @ts-nocheck
window.onload = function () {

        const btn = document.getElementsByClassName("mg")[ 0 ]
        btn.addEventListener('click', () => {
                const mobilebar = document.getElementById('nav-mobile')
                mobilebar.classList.toggle('flex')
                const img = document.getElementsByName('img')[0]
               img.setAttribute('src','/icons/cross.png') 
               
        })      
}