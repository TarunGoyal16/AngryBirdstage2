const Engine=Matter.Engine 
const World=Matter.World
const Bodies=Matter.Bodies

var myengine,myworld,box1,box2,ground,pig1,pig2,log1,box3,box4,log2,box5,log3,log4,bird

function setup() {
  createCanvas(1200,600);
   myengine=Engine.create();
   myworld=myengine.world
   box1=new Box(960,510,70,70)
   box2=new Box(700,510,70,70)
   ground=new Ground(600,590,1200,20)
   pig1=new Pig(830,510)
   log1=new Log(830,455,340,PI/2)
   bird=new Bird(200,100)
   box3=new Box(960,410,70,70)
   box4=new Box(700,410,70,70)
   log2=new Log(830,365,340,PI/2)
   pig2=new Pig(830,410)
   box5=new Box(830,320,70,70)
   log3=new Log(750,320,120,PI/6)
   log4=new Log(910,320,120,-PI/7)

   

 
}



function draw() {
  background(0);  
  Engine.update(myengine)
  box1.display()
 box2.display()
  ground.display()
  pig1.display()
  log1.display()
  bird.display()
  box3.display()
  box4.display()
  log2.display()
  pig2.display()
  box5.display()
  log3.display()
  log4.display()
 
  
  
}