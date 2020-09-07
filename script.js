let canvas = document.querySelector("#game");
let context = canvas.getContext("2d")
let box = 32

function createBackground() {
  context.fillStyle = "lightgreen"
  context.fillRect(0, 0, 16 * box, 16 * box)
}

createBackground();