let paso1 = document.getElementById('paso-1')
// let paso2 = document.getElementById('paso-2')
let paso3 = document.getElementById('paso-3')
let paso4 = document.getElementById('paso-4')
paso1.style.display = "none"
// paso2.style.display = "none"
paso3.style.display = "none"
paso4.style.display = "none"

function hideSection(paso) {
    if (paso.style.display == "none") {
        paso.style.display = "block"
    } else {
        paso.style.display = "none"
    }
}