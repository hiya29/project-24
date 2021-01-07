
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var ground;

var bin1;

var paper;
var engine,world;


function setup() {
	createCanvas(1600, 700);
    rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;


	bin1 = new Bin(1200,685);
	
    paper = new Paper(200,450,40);
	ground = new Ground(width/2,700,width,20);

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	}
	);

	Engine.run(engine);
  
	
}


function draw() {
  rectMode(CENTER);
  background(225);

  bin1.display();

   paper.display();

   ground.display();



}

function keyPressed(){

if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.postion,{x:85,y:-85});
}

}

