class mangos  {
constructor (x,y,radius){

var choices = {
    isStatic: true,
    restitution: 0,
    friction: 1,
}
this.x = x;
this.y = y;
this.radius = radius;
this.image = loadImage("Pluckingmangoes/mango.png");
this.body = Bodies.circle(x,y,radius, choices);
World.add(world, this.body);
}
display() {
var ball = this.body.position;
push()
translate(ball.x,ball.y);
rotate(this.body.angle);
fill(200,32,40);
imageMode(CENTER);
ellipseMode(RADIUS);
ellipse(ball.x,ball.y,this.radius)
image(this.image,0,0,this.radius*2,this.radius*2);
pop()
}

}