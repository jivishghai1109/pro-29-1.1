//making the engine and world 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

//variables
var ground;
var boy,tree,stone;
var slingshot;
var m1,m2,m3,m4;
 
function preload()
{
  boy=loadImage("boy.png");
  stone = loadImage("stone.png");
}

function setup() {
	createCanvas(1600, 700);

//creating engine and world
	engine = Engine.create();
	world = engine.world;

	//making the Bodies Here.
ground = new Ground(800,600,1600,100);  
boy = new Boy(200,500,200,200);
tree = new Tree(1200,350,400,400);
m1 = new Mango(1200,200,50,50);
m2 = new Mango(1300,250,50,50);
m3 = new Mango(1100,280,50,50);
m4 = new Mango(1180,280,50,50);
stone = new Stone(100,100,50,50); 

Engine.run(engine); 
  
}


function draw() {      
  rectMode(CENTER);
  background = "white";
  //dislaying all the objects
  ground.display();
  boy.display();
  tree.display();
  m1.display();
  m2.display();
  m3.display();
  m4.display();
  stone.display();
  drawSprites();
 
}



