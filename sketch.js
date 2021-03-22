const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var maxDrops=150;
var drops=[];
function preload(){
var l1;
}
function preload(){
  l1=loadImage("l1.png");
  l2=loadImage("l2.png");
}
function setup(){
   createCanvas(400,600);
   engine = Engine.create();
   world = engine.world;
   //ground=new Ground(200,600,400,20);
   person=new Person(200,510,125);
    for(var i=0;i<maxDrops;i++){
    drops.push(new Rain(random(0,400),random(-1000,600)));
    }
}

function draw(){
    background(0);
    Engine.update(engine);
 //   ground.display();
    person.display();
    for(var i=0;i<maxDrops;i++){
      drops[i].display();
    }
    rand=Math.round(random(1,3));
    console.log(rand);
    if(frameCount%80===0){
      thunderCreatedFrame=frameCount;
      thunder=createSprite(random(10,370),random(10,30),10,10);
      switch(rand){
        case 1: thunder.addImage(l1);
        break;
        case 2: thunder.addImage(l2);
        break;
        default:break;
      }
      thunder.scale=random(0.6,1);
      thunder.lifetime=10;
    }
    drawSprites();
}
