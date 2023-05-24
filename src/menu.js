export default function generateMenu() {
    const container = document.createElement('div')
    const prices = ["£10", "£7", "£8", "£5", "£9"]
    const images = ["ikura", "maguro", "salmon", "tamago", "unagi"]

    container.classList.add('menu-container')

    for (let i = 0; i < 5; i++) {
        const img = document.createElement('img')
        const price = document.createElement('div')

        img.src = `./images/svg/${images[i]}.svg`
        price.textContent = prices[i]

        container.appendChild(img)
        container.appendChild(price)
    }
    return container
}