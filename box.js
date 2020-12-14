class Box {
    constructor (x,y,width,height) {
        //properties
        var option ={
            restitution : 0.8,
            density : 0.8,
            friction : 0.1
        }
            this.width = width;
            this.height = height;
        this.body = Bodies.rectangle(x,y,width,height,option);
        World.add(world,this.body);
    
    }
    //function
    display (){
        //task to be performed
        var pos = this.body.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }
}
