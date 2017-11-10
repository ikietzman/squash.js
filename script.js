let init = function () {let ball = document.getElementById('ball');
let paddle = document.getElementById('paddle');
let ballTop = Math.floor(Math.random()*385);
let ballLeft = 0;
// let vDirection = 1;
let vDirectionStart = Math.random()<0.5?-1:1;
let vDirection = vDirectionStart;

let hDirection = 1;
let paddleTop = 150;
let score = document.getElementById('score');
let speed = 1;
let currentScore = 0;
let ballToppx = ballTop + 'px';
let ballLeftpx = ballLeft + 'px';
score.innerHTML = 0;
paddle.style.top = paddleTop + 'px';


// setTimeout (function (){
//   ball.style.top = '10px';
// }, 1000)



let inPlay = setInterval (function() {
  document.body.style.backgroundColor = '';
  ballTop += 1*vDirection*speed;
  ballToppx = ballTop + 'px';
  ballLeft += 1*hDirection*speed;
  // console.log(ballTop);
  // console.log(ballToppx);
  ball.style.top = ballToppx;
  ball.style.left = ballLeft + 'px';

  if (ballTop >= 395) {
   vDirection = -1;
  }
  if (ballTop <= 0) {
   vDirection = 1;
  }

  // if (ball.style.left == '595px') {
  //  hDirection = -1;
  // }
  if (ballLeft <= 0) {
   hDirection = 1;
  }
  if (ballLeft >= 570) {
    let currentPaddle = paddleTop;
    let currentBall = ballTop
    if ((currentBall > paddleTop) && (currentBall < paddleTop + 100)) {
      hDirection = hDirection*-1;
      currentScore++;
      score.innerHTML = currentScore;
      speed++
    }
    else {
      document.body.style.backgroundColor = 'red';
      // document.getElementById('button').style.display = 'inline';
      clearInterval(inPlay);
      // document.getElementById('button').addEventListener('click', function(){
        // document.body.style.backgroundColor = 'white';
        // document.getElementById('button')

        // init();
        // inPlay();
      };
    }
  }
, 10)

// move paddle on key input
document.addEventListener("keydown", function(event){
  // let x = event.keyCode;
  // if(){}
  // if((paddleTop >= 0) && (paddleTop <= 300)){
    // down
    if (event.keyCode == 40) {
      if (paddleTop < 300){
        paddleTop += 5;
        paddle.style.top = paddleTop + 'px';
      }
    }
    // up
    if (event.keyCode == 38) {
      if (paddleTop > 0) {
      paddleTop -= 5;
      paddle.style.top = paddleTop + 'px';
    }
    }
})
};

init();
