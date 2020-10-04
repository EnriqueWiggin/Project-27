
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

    roof = createSprite(450,350,200,20);
	bob1 = createSprite()

	
	bob1=new bob();
	bob2=new bob();
	bob3=new bob();
	bob4=new bob();
	bob5=new bob();


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  roof.display();
  
  drawSprites();
 
}



