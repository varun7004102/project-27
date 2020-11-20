
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(200,20,1700,30);
	bob1= new Bob(50,400);
	bob2 = new Bob(100,400);
	bob3 = new Bob(150,400);
	bob4 = new Bob(200,400);
	bob5 = new Bob(250,400);
	rope1 = new Rope(bob1.body,roof.body,{x:40,y:20});
	rope2 = new Rope(bob2.body,roof.body,{x:80,y:20});
	rope3 = new Rope(bob3.body,roof.body,{x:120,y:20});
	rope4 = new Rope(bob4.body,roof.body,{x:160,y:20});
	rope5 = new Rope(bob5.body,roof.body,{x:200,y:20});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
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


function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});

	}
}



