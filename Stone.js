class Stone{
	constructor(x,y){
        // assign options to the stone
		var options = {
			restitution:0.8,
			friction:0.9,
            density:12,
		}
		this.x=x;
		this.y=y;
        //assigning particular width and height
		this.width=30;
        this.height = 25;
        //giving parameters
		this.body=Bodies.rectangle(x,y,30,25, options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
            //colour the stone
			strokeWeight(4);
			stroke("white");
			fill("black");
            //initiate values
		    rect(0,0,this.width,this.height);
			pop()
	}

}