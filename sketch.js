
const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;


var engine, world,object,ball;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var options ={
    isStatic : true
  }
  object = Bodies.rectangle(200,390,400,20,options);

  World.add(world,object);
  
  var ball_options = {
    restitution : 1
  }
  ball = Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);




  console.log(object.type)
  console.log(object.position.x)
  console.log(object)

 
}

function draw() {
  background("black");  
 

  Engine.update(engine);

  
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20);
  rectMode(CENTER);
  rect(object.position.x,object.position.y,400,20);
  drawSprites();
}