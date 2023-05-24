import generateHome from "./home";
import generateNav from "./nav";

// generates nav bar and appends to content container
const container = document.getElementById('content')
container.appendChild(generateNav())

// main container to be used for append page content and can be cleared without affecting the nav
const main = document.createElement('div')
main.setAttribute('id', 'main')
container.appendChild(main)


function loadHome(btn) {
    generateHome().forEach(element => {
        main.appendChild(element) 
    });
}

function loadMenu() {
    main.textContent = ""
}

function loadContact() {
    main.textContent = ""
}


loadHome()

export { loadHome, loadMenu, loadContact }