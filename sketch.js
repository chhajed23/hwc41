const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var drop = [];
var thunder;
var man, img;
var maxDrops = 100;
var t1,t2,t3,t4,thunder;
var rand;
var thunderFrameCount=0;
function preload() {
  img = loadImage("../man.png");
  t1=loadImage("images/thunderbolt/1.png");
  t2=loadImage("images/thunderbolt/2.png");
  t3=loadImage("images/thunderbolt/3.png");
  t4=loadImage("images/thunderbolt/4.png");
}

function setup() {
  createCanvas(400, 400);
  engine = Engine.create();
  world = engine.world;

  // man = createSprite(200, 300, 100, 10);
  // man.addImage("manImg", img);
  umbrella=new Umbrella(200,200);
  // man.shapeColor="red"
  if (frameCount % 100 === 0) {
    for (var i = 0; i < maxDrops; i++) {
      drop.push(new Drop(random(0, 400), random(0, 400),5));
    }
  }
}

function draw() {
  background(0);
  Engine.update(engine);
  for (var i = 0; i < maxDrops; i++) {
    drop[i].display();
    drop[i].updateY();
  }
  rand=Math.round(random(1,4))
  if(frameCount%100===0){
    thunderFrameCount=frameCount;
    thunder=createSprite(random(10,350),random(10,40),10,10)
    switch (rand){
      case 1:thunder.addImage(t1);
      break;
      case 2:thunder.addImage(t2);
      break;
      case 3:thunder.addImage(t3);
      break;
      case 4:thunder.addImage(t4);
      break;
      default: break;
    }
    thunder.scale=random(0.3,0.6);
  }
  if(thunderFrameCount+10===frameCount && thunder){
thunder.destroy();
  }
  umbrella.display();
  drawSprites();
}
