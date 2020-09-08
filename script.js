let canvas = document.querySelector("#game");
let context = canvas.getContext("2d")
let box = 32
let snake = []
snake[0] = {
  x: 8 * box,
  y: 8 * box
}
let direction = "up";

function createBackground() {
  context.fillStyle = "lightgreen"
  context.fillRect(0, 0, 16 * box, 16 * box)
}

function createSnake() {
  for(i = 0; i < snake.length; i ++){
    context.fillStyle = "#43a047"
    context.fillRect(snake[i].x, snake[i].y, box, box)
  }
} 

document.addEventListener('keydown', update);
function update(event) {
  if (event.keyCode == 37 && direction != "right"){direction = "left"}
  if (event.keyCode == 39 && direction != "left"){direction = "right"}
  if (event.keyCode == 38 && direction != "down"){direction = "up"}
  if (event.keyCode == 40 && direction != "up"){direction = "down"}
}

function startGame() {
  createBackground()
  createSnake()

  let snakeX = snake[0].x
  let snakeY = snake[0].y

  if(direction == "right"){snakeX += box}
  if(direction == "left"){snakeX -= box}
  if(direction == "up"){snakeY -= box}
  if(direction == "down"){snakeY += box}
  snake.pop()
  
  let snakeHead = {
    x: snakeX,
    y: snakeY
  }
  snake.unshift(snakeHead)

}

let game = setInterval(startGame, 100);