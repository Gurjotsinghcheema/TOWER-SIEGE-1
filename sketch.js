const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint
 
var world,engine,bodies;
var g1,slingshot,stand1,stand2,b1;
var polygon_img;


function preload(){
polygon_img=loadImage("polygon.png");
}   

function setup(){
    createCanvas(900,400);

    engine=Engine.create();
    world=engine.world;
    Engine.run(engine);

 g1= new Ground(450,390,900,20);
 stand1= new Ground(390,300,250,10);
 stand2= new Ground(670,260,250,10);
b1 = Bodies.circle(50,200,20);
  World.add(world,b1);
  

  slingshot = new Slingshot(this.b1,{x:100,y:200});
  block1=new Block(300,275,30,40)
  block2=new Block(330,275,30,40)
  block3=new Block(360,275,30,40)
  block4=new Block(390,275,30,40)
  block5=new Block(420,275,30,40)
  block6=new Block(450,275,30,40)
  block7=new Block(480,275,30,40)
  
 //level 2
  
  block8=new Block(330,235,30,40)
  block9=new Block(360,235,30,40)
  block10=new Block(390,235,30,40)
  block11=new Block(420,235,30,40)
  block12=new Block(450,235,30,40)

  //level 3
   
  block13=new Block(360,195,30,40)
  block14=new Block(390,195,30,40)
  block15=new Block(420,195,30,40)

  //level 4

  block16=new Block(390,145,30,40)

//level1

  block17=new Block(580,235,30,40)
  block18=new Block(610,235,30,40)
  block19=new Block(640,235,30,40)
  block20=new Block(670,235,30,40)
  block21=new Block(700,235,30,40)
  block22=new Block(730,235,30,40)
  block23=new Block(760,235,30,40)
  
//level2

  block24=new Block(610,190,30,40)
  block25=new Block(640,190,30,40)
  block26=new Block(670,190,30,40)
  block27=new Block(700,190,30,40)
  block28=new Block(730,190,30,40)

//level3

block29=new Block(640,150,30,40)
block30=new Block(670,150,30,40)
block31=new Block(700,150,30,40)

//level4

block32=new Block(670,110,30,40)
}

function draw(){
background("black");

    g1.display();
   stand1.display();
   stand2.display();
   image(polygon_img,b1.position.x,b1.position.y,40,40);
slingshot.display();
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
block22.display();
block23.display();

block24.display();
block25.display();
block26.display();
block27.display();
block28.display();

block29.display();
block30.display();
block31.display();

block32.display();
}

function mouseDragged(){
  Matter.Body.setPosition(this.b1,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingshot.fly();
}