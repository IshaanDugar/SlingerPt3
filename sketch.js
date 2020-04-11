const{Engine, World, Bodies, Constraint} = Matter;

var engine, world;

var str_1, ground_1, ground_2, ground_3, ground_4, ground_5;

var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12;

var ball_1;

function setup() {
  createCanvas(800, 800);

  engine = Engine.create();
  world = engine.world;

  
  ground_1 = new Ground(400, 770, 800, 20);
  ground_2 = new Ground(700, 400, 200, 20);

  b1 = new Box(600,740);
  b2 = new Box(625,740);
  b3 = new Box(650,740);
  b4 = new Box(615,725);
  b5 = new Box(640,725);
  b6 = new Box(625,705);
  b7 = new Box(675,375);
  b8 = new Box(700,375);
  b9 = new Box(725,375);
  b10 = new Box(690,355);
  b11 = new Box(715,355);
  b12 = new Box(700,335);

  ball_1 = new Ball(100, 500);

  str_1 = new str(ball_1.body, {x: 130, y: 420});
 

  /*for(var i = 0; i < 400; i = i + 1){
    Box_1[i] = new Box(100, 400)
  }*/

}

function draw(){

  Engine.update(engine);

  background(0, 0, 0);

  fill("white");
  ground_1.display();
  ground_2.display();
  fill("blue");
  b1.display();
  fill("green");
  b2.display();
  fill("red");
  b3.display();
  fill("orange");
  b4.display();
  fill("yellow");
  b5.display();
  fill("pink");
  b6.display();
  fill("blue");
  b7.display();
  fill("red");
  b8.display();
  fill("yellow");
  b9.display();
  fill("orange");
  b10.display();
  fill("pink");
  b11.display();
  fill("red");
  b12.display();

  fill("white");
  ball_1.display();
 
  fill("cyan");
  str_1.display();
  
  /*for(var i = 0; i < 400; i = i + 1){
    Box_1[i].display();
  }*/

}


function mouseDragged(){
  Matter.Body.setPosition(ball_1.body, {x: mouseX , y: mouseY});

}

 function mouseReleased(){
  str_1.fly();
}

function keyPressed(){
  if(keyCode === 32){
    str_1.attach(ball_1.body);
  }
}