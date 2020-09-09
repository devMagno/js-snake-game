let scoreText = document.getElementById('score')
let score = 0
let highscore = localStorage.getItem("highscore")
let highscoreText = document.getElementById('highscore')
highscoreText.innerText = highscore
let canvas = document.querySelector("#game")
let context = canvas.getContext("2d")
let box = 32
let snake = []
snake[0] = {
  x: 8 * box,
  y: 8 * box
}
let direction = "up"
let apple = {
  x: Math.floor(Math.random() * 15 + 1) * box,
  y: Math.floor(Math.random() * 15 + 1) * box
}

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

function createApple() {
  context.fillStyle = "#e53935"
  context.fillRect(apple.x, apple.y, box, box)
}

document.addEventListener('keydown', update)
function update(event) {
  if (event.keyCode == 37 && direction != "right"){direction = "left"}
  if (event.keyCode == 39 && direction != "left"){direction = "right"}
  if (event.keyCode == 38 && direction != "down"){direction = "up"}
  if (event.keyCode == 40 && direction != "up"){direction = "down"}
}

function startGame() {
  if(snake[0].x > 15 * box){snake[0].x = 0}
  if(snake[0].x < 0 * box){snake[0].x = 16 * box}
  if(snake[0].y > 15 * box){snake[0].y = 0}
  if(snake[0].y < 0 * box){snake[0].y = 16 * box}

  for(i = 1; i < snake.length; i++){
    if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
      clearInterval(game)
      alert('Fim de jogo!\nClique para jogar novamente.')
      location.reload()
    }
  }

  createBackground()
  createSnake()
  createApple()

  let snakeX = snake[0].x
  let snakeY = snake[0].y

  if(direction == "right"){snakeX += box}
  if(direction == "left"){snakeX -= box}
  if(direction == "up"){snakeY -= box}
  if(direction == "down"){snakeY += box}
  
  
  if(snakeX != apple.x || snakeY != apple.y){
    snake.pop()
  } else {
    apple.x = Math.floor(Math.random() * 15 + 1) * box
    apple.y = Math.floor(Math.random() * 15 + 1) * box
    for(i = 0; i < snake.length; i++){
      if(apple.x == snake[i].x && apple.y == snake[i].y){
        apple.x = Math.floor(Math.random() * 15 + 1) * box
        apple.y = Math.floor(Math.random() * 15 + 1) * box
        i = 0
      }
    }
    score ++
    scoreText.innerText = score
    if(score > highscore){
      highscore = score
    }
    localStorage.setItem("highscore", highscore)
    highscoreText.innerText = highscore
  }

  let snakeHead = {
    x: snakeX,
    y: snakeY
  }
  snake.unshift(snakeHead)

}

let game = setInterval(startGame, 100)