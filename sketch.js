const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;
var bg;
var snowFall = [];
var girl1,girlimg,tata,tataimg;

function preload(){

  girlimg= loadImage("kid_34_excited.png");
  tataimg = loadImage("download.png");
  
}
var particles = [];
function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  //createSprite(400, 200, 50, 50);
  bg=loadImage("snow1.jpg");
  girl1 = createSprite(600,300,20,50);
  girl1.addImage(girlimg);
  
  tata = createSprite(400,300,50,50);
  tata.addImage(tataimg);
  
  girl1.scale = 0.3;
  tata.scale = 0.3;
  invisibleGround = createSprite(400,390,800,10);
  invisibleGround.visible =false;
 
  
}

function draw() {
  background(bg);  
  drawSprites();
  if(keyDown("space") && girl1.y >= 159) {
    girl1.velocityY = -12;
  }
  girl1.velocityY = girl1.velocityY + 0.8
 Engine.update(engine);
 if(frameCount %20===0){
  particles.push(new Particle(random(width/2-400,width/2+400),2,5));
}
girl1.collide(invisibleGround)

//display the paricles 


for (var l = 0; l < particles.length; l++) {
  particles[l].display();
}
  

}