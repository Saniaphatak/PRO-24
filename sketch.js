//physics engine
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

//create variables
var engine, world;
var hammer, rubber, stone, iron;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    //create ground
    plane = new Plane(600,height,1200,20)
    //create hammer
    hammer = new Hammer(10,100);
    //create rubberball
    rubber = new Rubber(800,500,100);
    //create ironbox
    iron = new Iron(600,500);
    //create stone
    stone = new Stone(400,500);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    //display bodies
    rubber.display();
    plane.display();
    hammer.display();
    iron.display();
    stone.display();

    
 
}