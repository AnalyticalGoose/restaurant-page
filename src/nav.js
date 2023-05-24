import { loadHome } from "./index.js"
import { loadMenu } from "./index.js"
import { loadContact } from "./index.js"

export default function generateNav() {
    const header = document.createElement('header')

    // top-left Japanese logo text
    const logoText = document.createElement('p')
    logoText.classList.add('logo-text')
    logoText.textContent = '寿司'

    // nav buttons
    const btnContainer = document.createElement('div')
    btnContainer.classList.add('button-container')

    const homeBtn = document.createElement('button')
    const menuBtn = document.createElement('button')
    const contactBtn = document.createElement('button')

    homeBtn.textContent = 'Home'
    menuBtn.textContent = 'Menu'
    contactBtn.textContent = 'Contact'

    homeBtn.classList.add('active')

    homeBtn.addEventListener('click', (e) => {   
        if (e.target.classList.contains("active")) return;
        setActiveBtn(homeBtn)
        loadHome()
    })   
    menuBtn.addEventListener('click', (e) => {   
        if (e.target.classList.contains("active")) return;
        setActiveBtn(menuBtn)
        loadMenu()
    })
    contactBtn.addEventListener('click', (e) => {   
        if (e.target.classList.contains("active")) return;
        setActiveBtn(contactBtn)
        loadContact()
    })

    btnContainer.appendChild(homeBtn)
    btnContainer.appendChild(menuBtn)
    btnContainer.appendChild(contactBtn)

    header.appendChild(logoText)
    header.appendChild(btnContainer)

    return header
}

function setActiveBtn(btn) {
    const activeBtn = document.querySelector('.active')
    activeBtn.classList.remove('active')

    btn.classList.add('active')
}