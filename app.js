const screen = document.querySelector("#screen")
const inputs = document.querySelectorAll("span")
const clear = document.querySelector("#clear")

inputs.forEach(input => {
    input.addEventListener("click", event => {
        if (input.textContent === "÷") {
            screen.textContent += `/`
        } else if (input.textContent === "x") {
            screen.textContent += `*`
        } else {
            screen.textContent += `${input.textContent}`
        }
    })
})

clear.addEventListener("click", event => {
    screen.textContent = ``;
})
