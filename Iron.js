class Iron{
	constructor(x,y){
        // assign options to the iron box
		var options = {
			restitution:0.8,
			friction:3,
            density:30,
		}
		this.x=x;
		this.y=y;
        //assigning particular width and height
		this.width=70;
        this.height = 70;
        //parameters
		this.body=Bodies.rectangle(x,y,70,70, options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
            //colour the box
			stroke("brown");
			fill("red");
            //initiate values
		    rect(0,0,this.width,this.height);
			pop()
	}

}