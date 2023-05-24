import generateNav from "./nav";
import generateHome from "./home";
import generateContact from "./contact";
import generateMenu from "./menu";

// generates nav bar and appends to content container
const container = document.getElementById('content')
container.appendChild(generateNav())

// main container to be used for append page content and can be cleared without affecting the nav
const main = document.createElement('div')
main.setAttribute('id', 'main')
container.appendChild(main)


function loadHome(btn) {
    main.textContent = ""
    generateHome().forEach(element => {
        main.appendChild(element) 
    });
}

function loadMenu() {
    main.textContent = ""
    main.appendChild(generateMenu())
}

function loadContact() {
    main.textContent = ""
    main.appendChild(generateContact())
}


loadHome()

export { loadHome, loadMenu, loadContact }