const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var tower;
var balls = [];

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
  cannonBallImage = loadImage("./assets/cannonball.png");
}


function setup() {
  canvas = createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;
  angle=-PI/4;

  tower = new Tower(150,350,160,310);
  cannon = new Cannon(180,110,100,50,angle);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(189);
  image(backgroundImg, 0, 0, width, height);

  Engine.update(engine);
  tower.display();
  cannon.display();

  for(var i=0; i<balls.length ; i++){
    showCannonBalls(balls[i],i)
  }

}

function KeyPressed(){
  if(keyCode===DOWN_ARROW){
    cannonBall = new CannonBall(cannon.x,cannon.y);
    balls.push(cannonBall);
  }
}

function keyReleased(){
  if(keyCode===DOWN_ARROW){
    balls[balls.length-1].shoot();
  }
}

function showCannonBalls(ball,index){
  ball.display();
}