let canvas = document.querySelector("#game");
let context = canvas.getContext("2d")
let box = 32
let snake = []
snake[0] = {
  x: 8 * box,
  y: 8 * box
}

function createBackground() {
  context.fillStyle = "lightgreen"
  context.fillRect(0, 0, 16 * box, 16 * box)
}

function createSnake() {
  for(i = 0; i < snake.length; i ++){
    context.fillStyle = "#4caf50"
    context.fillRect(snake[i].x, snake[i].y, box, box)
  }
} 

createBackground();
createSnake()