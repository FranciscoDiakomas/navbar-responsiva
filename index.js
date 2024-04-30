// @ts-nocheck
window.onload = function () {

        const btn = document.getElementsByClassName("mg")[ 0 ]
        btn.addEventListener('click', () => {
                const mobilebar = document.getElementById('nav-mobile')
                mobilebar.style.display = 'flex'
                const links = document.querySelectorAll('.nav-li')
                const img = document.getElementsByTagName('img')[ 0 ]
                img.setAttribute('src','/icons/cross.png')
                links.forEach((item) => {
                        item.addEventListener("click", () => {
                                const mobilebar = document.getElementById('nav-mobile')
                                mobilebar.style.display = 'none'
                                 const img = document.getElementsByTagName('img')[ 0 ]
                                img.setAttribute('src','/icons/menu-burger.png')
                        })
                })
               
        })
        const sections = document.querySelectorAll('section')
        sections.forEach((e) => {
                e.addEventListener('mouseenter', () => {
                        
                        const mobilebar = document.getElementById('nav-mobile')
                        mobilebar.style.display = 'none'
                        const img = document.getElementsByTagName('img')[ 0 ]
                        img.setAttribute('src','/icons/menu-burger.png')
                })
                
        })
}