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

equals.addEventListener("click", event => {
    let screenText = screen.textContent.slice(0, screen.textContent.length - 1);
    try {
        eval(screenText)
    } catch (error) {
        screen.textContent = `ERROR`;
    }
    if (eval(screenText) === Infinity) {
        screen.textContent = `ERROR`;
    } else {
        screen.textContent = `${eval(screenText)}`;
    }
})

clear.addEventListener("click", event => {
    screen.textContent = ``;
})
