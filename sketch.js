const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine, world, Ground,box1,box2;


function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  Ground=new ground(600,390,1200,20);
  box1 = new Box(800,10,70,70);
  pig1 = new Pig(900,30);
  log1 = new log(900,50,250,PI/2);
  box2 = new Box(1000,50,70,70);

 
}

function draw() {
  background("pink");  
  Engine.update(engine);
  box1.display();
  box2.display();
  pig1.display();
  log1.display();
  Ground.display();
}