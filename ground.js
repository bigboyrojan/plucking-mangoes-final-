class Ground  {
    constructor (x,y,width,height){
    
    
    var choices = {
    isStatic: true
    
    }
    this.body = Bodies.rectangle (x,y,width,height, choices);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
    }
    display() {
    var epicness = this.body.position;
    fill(116);
    rectMode(CENTER);
    rect(epicness.x, epicness.y, this.width, this.height);
    
    }
    
    }