export default function generateHome() {
// main containers
    const footer = document.createElement('footer')
    const imgContainer = document.createElement('div')

    imgContainer.classList.add('img-container')

// main images
    const imgLeft = document.createElement('img')
    const imgRight = document.createElement('img')

    imgLeft.classList.add('img-left')
    imgRight.classList.add('img-right')

    imgLeft.src = "images/left.jpg"
    imgRight.src = "images/right.jpg"

// footer
    const footerText = document.createElement('p')
    
    footerText.classList.add('footer-text')
    footerText.textContent = 'The finest Japanese dining experience in London'

// append to main containers
    imgContainer.appendChild(imgLeft)
    imgContainer.appendChild(imgRight)

    footer.appendChild(footerText)

    return [imgContainer, footer]
}


