var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,wall1,wall2,wall3,wall1Body
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(200, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	wall1 = createSprite(width/2,650,200,20);
	wall1.shapeColor = "red";

	wall2 = createSprite(300,610,20,100);
	wall2.shapeColor = "red";

	wall3 = createSprite(500,610,20,100);
	wall3.shapeColor = "red";

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(400 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	wall1Body = Bodies.rectangle(width/2,650,200,50,{isStatic:true});
	World.add(world, wall1Body);

	Engine.run(engine);


	
}


function draw() {
  rectMode(CENTER);

  background(0);
  
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  if(keyDown("DOWN_ARROW")){
	
	Matter.Body.setStatic(packageBody, false);
		packageBody.restitution = 0.8;




}

  drawSprites();
 
}




	