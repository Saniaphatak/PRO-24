class Hammer {
  constructor(x, y) {
    //assign options to hammer
    var options = {
      'density':4,
      'friction': 1.0,
      'restitution':0.5
    };
    //giving parameters
    this.body = Bodies.rectangle(x, y, 50, 50, options);
    //assigning particular width and height
    this.width = 150;
    this.height = 40;
    World.add(world, this.body);
  };
  display(){
    var pos = this.body.position;
    pos.x = mouseX;
    pos.y = mouseY;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    strokeWeight(3);
    //colour 
    stroke('white')
    fill('orange')
    rectMode(CENTER)
    rect(0, 0, this.width, this.height);
    pop();
  };
};
