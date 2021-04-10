const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var backgroundImg;
var ground1;
var block1,block2,block3,block10,block11,block12,block13,block14,block15,block16,block17,block18,block19,block20,block21
var block4,block5,block6,block7,block8,block9;
var Superhero;
var rope;
var monster;

function preload() {
//preload the images here
backgroundImg=loadImage("g.png");
}

function setup() {
  createCanvas(1400, 800);
  // create sprites here
  engine = Engine.create();
  world = engine.world;
  Superhero =new Hero(300,500,80);

 rope = new Rope(Superhero.body, {x:100, y:360});

 monster = new Monster(800, 500, 100)

  ground1=new ground(500,700,1000,20);
  block1=new block(550,100,40,40);
  block2=new block(550,100,40,40);
  block3=new block(550,100,40,40);
  block4=new block(550,100,40,40);
  block5=new block(550,100,40,40);
  block6=new block(550,100,40,40);
  block7=new block(550,100,40,40);
  
  block8=new block(500,100,40,40);
  block9=new block(500,100,40,40);
  block10=new block(500,100,40,40);
  block11=new block(500,100,40,40);
  block12=new block(500,100,40,40);
  block13=new block(500,100,40,40);
  block14=new block(500,100,40,40);

  block15=new block(450,100,40,40);
  block16=new block(450,100,40,40);
  block17=new block(450,100,40,40);
  block18=new block(450,100,40,40);
  block19=new block(450,100,40,40);
  block20=new block(450,100,40,40);
  block21=new block(450,100,40,40);


 

 

}

function draw() {
  background(backgroundImg);
  ground1.display();
  block1.display();  
  block2.display(); 
  block3.display(); 
  block4.display(); 
  block5.display(); 
  block6.display(); 
  block7.display(); 

  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();

  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();

  Superhero.display();

  rope.display();

  monster.display();

  Engine.update(engine);
}

function mouseDragged(){
  Matter.Body.setPosition(Superhero.body, {x:mouseX, y:mouseY})
}
function mouseReleased(){
  rope.fly();
}