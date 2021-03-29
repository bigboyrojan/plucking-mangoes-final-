class rock {
    constructor (x,y,r){
    var choices = {
    isStatic : true,
    restitution:0,
    friction:1,
    density:1.2

    } 
    this.x = x;
    this.y = y;
    this.r = r
    this.image = loadImage("Pluckingmangoes/stone.png");
    this.body = Bodies.circle(this.x,this.y,this.r/2,choices);
    World.add(world,this.body);
    }
    display(){
    var gravel = this.body.position;
    push()
    translate(gravel.x,gravel.y)
    //rectMode (CENTER);
    fill(198);
    imageMode(CENTER);
    ellipseMode(RADIUS);
    ellipse(gravel.x,gravel.y,this.radius);
    image(this.image,0,0,this.r*2,this.r*2)
    pop()
    }
    
    }