const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy,boyimg;
var mango1, mango2, mango3,mango4,mango5;
var pebble;
var rubberband;
var branch;
function preload(){

boyimg = loadImage("Pluckingmangoes/boy.png");

	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boy = createSprite(200,400,30,30);
	boy.addImage(boyimg);
	boy.scale = 0.1;
	
	mango1 = new mangos(450,250,30);
	mango2 = new mangos(535,150,30);
	mango3 = new mangos(525,305,30);
	mango4 = new mangos(575,225,30);
	mango5 = new mangos(705,230,30);
	pebble = new rock(150,375,30);
	branch = new tree(590,50,300,300);
	branch.scale = 0.5;
	rubberband = new band(pebble.body,{x:235,y:420})
	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(0);
  branch.display();
  rubberband.display();
  pebble.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

detectollision(pebble,mango1);
detectollision(pebble,mango2);
detectollision(pebble,mango3);
detectollision(pebble,mango4);
detectollision(pebble,mango5);

  drawSprites();
 
}

function mouseDragged() {
Matter.Body.setPosition(pebble.body,{x:mouseX,y:mouseY})
}

function mouseReleased() {
rubberband.fly();
}

function detectollision(lpebble,lmango){
mangoBodyPosition=lmango.body.position
  pebbleBodyPosition=lpebble.body.position
  
  var distance=dist(pebbleBodyPosition.x, pebbleBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)

if(distance<=lmango.r+lpebble.r)
    {
      //console.log(distance);
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }

  function keyPressed() {
if (keyCode === 32){
Matter.Body.setPosition(pebble.body,{x:150,y:375});
rubberband.attach(pebble.body);
}
  }
