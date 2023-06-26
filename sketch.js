const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ball;
var blower;
var blowerMouth;
var button;

function preload() {
  airSound = loadSound("assets/air.wav");
  bgMusic = loadSound("assets/sound1.mp3");
  
}

function setup() {
  var canvas = createCanvas(500, 500);
  bgMusic.setVolume(0.3);
  bgMusic.play();
  engine = Engine.create();
  world = engine.world;

  ball = new Ball(width / 2 + 80, height / 2 - 80, 80, 80);
  blower = new Blower(width / 2 - 50, height / 2 + 50, 150, 20);
  blowerMouth = new BlowerMouth(width / 2 + 70, height / 2 + 20, 100, 90);

  button = createButton("Click to Blow");
  button.position(width / 2, height - 100);
  button.class("blowButton");
  button.mousePressed(blow);

  muteBtn = createImg("assets/mute.png");
  muteBtn.position(width-50, 10);
  muteBtn.size(40,40);
  muteBtn.mousePressed(mute)

}

function draw() {
  background(59);
  Engine.update(engine);

  blower.show();
  ball.show();
  blowerMouth.show();

  //console.log(ball.body.position.x);
}

function blow() {
    Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:0, y:-0.05});
    airSound.setVolume(0.2);
    airSound.play();
}

function mute() {
  if(bgMusic.isPlaying()) {
    bgMusic.stop();
  } else {
    bgMusic.play();
  }
}
