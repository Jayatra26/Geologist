const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var stone,rubber1,rubber2,rubber3,rubber4,rubber5,iron;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    stone = new Stone(300,100,90,30);
    iron = new Iron (400,100);
    rubber1 = new Rubber(500,100,5);
    rubber2 = new Rubber(520,100,5);
    rubber3 = new Rubber(540,100,5);
    rubber4 = new Rubber(560,100,5);
    rubber5 = new Rubber(580,100,5);
  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    stone.display();
    iron.display();
    rubber1.display();
    rubber2.display();
    rubber3.display();
    rubber4.display();
    rubber5.display();
}