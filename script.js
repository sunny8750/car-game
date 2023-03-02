

// const score=document.querySelector('.Score');
// const startscreen=document.querySelector('.StartScreen');
// const gamearea=document.querySelector('.GameArea');
// let player={ speed:5,score:0};
// let highest=0;
// startscreen.addEventListener('click',start);

// let keys={ArrowUp: false, ArrowDown: false, ArrowRight: false, ArrowLeft: false};

// document.addEventListener('keydown',keyDown);
// document.addEventListener('keyup',keyUp);
// function keyDown(ev){
//     ev.preventDefault();
//     keys[ev.key]=true;

// }
// function keyUp(ev){
//     ev.preventDefault();
//     keys[ev.key]=false;
    
// }
// function isCollide(a,b){
//     aRect=a.getBoundingClientRect();
//     bRect=b.getBoundingClientRect();

//     return !((aRect.bottom<bRect.top)||(aRect.top>bRect.bottom)||(aRect.right<bRect.left)||(aRect.left>bRect.right));
// }
// function moveLines(){
//     let lines=document.querySelectorAll('.lines');
//     lines.forEach(function(item){
//         if(item.y>=700){
//             item.y-=750;
//         }
//         item.y+=player.speed;
//         item.style.top=item.y+'px';

//     })
// }
// function endGame(){
//     player.start=false;
//     startscreen.classList.remove('hide');
// }
// function moveCar(car){
//     let other=document.querySelectorAll('.other');
//     other.forEach(function(item){
//         if(isCollide(car,item)){
//             console.log('HIT');
//             endGame();
//         }
//         if(item.y>=750){
//             item.y=-300;
//             item.style.left=Math.floor(Math.random()*350) + 'px';
//         }
//         item.y+=player.speed;
//         item.style.top=item.y+'px';

//     })
// }
// function gamePlay(){

//     let car=document.querySelector('.car');
//     let road=gamearea.getBoundingClientRect();

//     if(player.start){

//         moveLines();
//         moveCar(car);
//         if(keys.ArrowUp && player.y>(road.top+70)){
//             player.y-=player.speed;
//         }
//         if(keys.ArrowDown && player.y<(road.bottom-70)){
//             player.y+=player.speed;
//         }
//         if(keys.ArrowLeft && player.x>0){
//             player.x-=player.speed;
//         }
//         if(keys.ArrowRight && player.x<(road.width-50)){
//             player.x+=player.speed;
//         }

//         car.style.top=player.y + 'px';
//         car.style.left=player.x + 'px';

//         window.requestAnimationFrame(gamePlay);
//         //console.log(player.score++);
//         player.score++;
//         if(player.score>=highest)
//         {
//             highest=player.score;
//         }
//         score.innerHTML="Your Score:"+ player.score+"<br><br>"+"Highest Score:"+highest;


//     }
    
// }
// function Reset(){
//     highest=0;
// }
// function start(){
//     //gamearea.classList.remove('hide');
//     startscreen.classList.add('hide');
//     gamearea.innerHTML="";

//     player.start=true;
//     player.score=0;
//     window.requestAnimationFrame(gamePlay);



//    for(x=0;x<5;x++){
//         let roadline=document.createElement('div');
//         roadline.setAttribute('class','lines');
//         roadline.y=(x*150);
//         roadline.style.top=roadline.y+'px';
//         gamearea.appendChild(roadline);
//     }
    
//     let car=document.createElement('div');
//     car.setAttribute('class','car');
//     gamearea.appendChild(car);

//     player.x=car.offsetLeft;
//     player.y=car.offsetTop;


//     for(x=0;x<3;x++){
//         let othercar=document.createElement('div');
//         othercar.setAttribute('class','other');
//         othercar.y=((x+1)350) -1;
//         othercar.style.top=othercar.y+'px';
//         othercar.style.left=Math.floor(Math.random()*350) + 'px';
//         gamearea.appendChild(othercar);
//     }
// }
const score = document.querySelector(".score");
const startScreen = document.querySelector(".startScreen");
const gameArea = document.querySelector(".gameArea");
let player = { speed: 5, score: 0 };
let keys = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowRight: false,
  ArrowLeft: false,
};
startScreen.addEventListener("click", start);
document.addEventListener("keydown", pressOn);
document.addEventListener("keyup", pressOff);
function moveLines() {
  let lines = document.querySelectorAll(".line");
  lines.forEach(function (item) {
    if (item.y > 1500) {
      item.y -= 1500;
    }
    item.y += player.speed;
    item.style.top = item.y + "px";
  });
}
function isCollide(a, b) {
  aRect = a.getBoundingClientRect();
  bRect = b.getBoundingClientRect();
  return !(
    aRect.bottom < bRect.top ||
    aRect.top > bRect.bottom ||
    aRect.right < bRect.left ||
    aRect.left > bRect.right
  );
}
function moveEnemy(car) {
  let ele = document.querySelectorAll(".enemy");
  ele.forEach(function (item) {
    if (isCollide(car, item)) {
      endGame();
    }
    if (item.y > 1500) {
      item.y = -600;
      item.style.left = Math.floor(Math.random() * 350) + "px";
    }
    item.y += player.speed;
    item.style.top = item.y + "px";
  });
}
function playGame() {
  let car = document.querySelector(".car");
  let road = gameArea.getBoundingClientRect();

  moveLines();
  moveEnemy(car);
  if (player.start) {
    if (keys.ArrowUp && player.y > road.top - 542) {
      player.y -= player.speed;
    }
    if (keys.ArrowDown && player.y < road.bottom - 237) {
      player.y += player.speed;
    }
    if (keys.ArrowLeft && player.x > 0) {
      player.x -= player.speed;
    }
    if (keys.ArrowRight && player.x < road.width - 54) {
      player.x += player.speed;
    }
    car.style.left = player.x + "px";
    car.style.top = player.y + "px";
    window.requestAnimationFrame(playGame);
    player.score++;
    score.innerText = "Score : " + player.score;
  }
}
function pressOn(e) {
  e.preventDefault();
  keys[e.key] = true;
}
function pressOff(e) {
  e.preventDefault();
  keys[e.key] = false;
}
function endGame() {
  player.start = false;
  score.innerHTML = "Game Over<br>Score :  " + player.score;
  startScreen.classList.remove("hide");
}
function start() {
  startScreen.classList.add("hide");
  gameArea.innerHTML = "";
  player.start = true;
  player.score = 0;
  for (let x = 0; x < 10; x++) {
    let div = document.createElement("div");
    div.classList.add("line");
    div.y = x * 150;
    div.style.top = x * 150 + "px";
    gameArea.appendChild(div);
  }
  window.requestAnimationFrame(playGame);
  let car = document.createElement("div");
  car.setAttribute("class", "car");
  gameArea.appendChild(car);
  player.x = car.offsetLeft;
  player.y = car.offsetTop;
  for (let x = 0; x < 3; x++) {
    let enemy = document.createElement("div");
    enemy.classList.add("enemy");
    enemy.y = (x + 1) * 600 * -1;
    enemy.style.top = enemy.y + "px";
    enemy.style.left = Math.floor(Math.random() * 350) + "px";
    enemy.style.backgroundColor = randomColor();
    gameArea.appendChild(enemy);
  }
}
function randomColor() {
  function c() {
    let hex = Math.floor(Math.random() * 256).toString(16);
    return ("0" + String(hex)).substr(-2);
  }
  return "#" + c() + c() + c();
}