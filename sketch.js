
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1;
var bob2;
var bob3;
var bob4;
var bob5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  roof=new roof(400,100,600,30);
	

	
	bob1=new bob(200,600,100);
	bob2=new bob(300,600,100);
	bob3=new bob(400,600,100);
	bob4=new bob(500,600,100);
  bob5=new bob(600,600,100);

  rope1=new Rope;
  rope2=new Rope;
  rope3=new Rope;
  rope4=new Rope;
  rope5=new Rope;
  
  


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  

  
  drawSprites();
 
}



