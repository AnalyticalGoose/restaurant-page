export default function generateContact() {
    const container = document.createElement('div')

    container.classList.add('contact-container')
    container.innerHTML = "<b>Contact Information:<b> "

    const tel = document.createElement('tel')
    const addr = document.createElement('address')
    const email = document.createElement('email')

    tel.textContent = "01234 567890"
    addr.innerHTML = `123 Tokyo Ave<br>London <br>SE1 1NN`
    email.textContent = 'sushi@ldnsushi.co.uk'
    
    container.appendChild(tel)
    container.appendChild(addr)
    container.appendChild(email)

    return container
}