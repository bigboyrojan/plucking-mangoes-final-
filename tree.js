class tree {
constructor (x,y,width,height){
var choices = {
isStatic : true
} 
this.body = Bodies.rectangle(x,y,width,height,choices);
this.width = 450;
this.height = 600;
this.thickness = 10;
this.image = loadImage("Pluckingmangoes/tree.png");

World.add(world,this.body);
}
display(){
var tre = this.body.position;
push()
translate(tre.x,tre.y+10);
fill(198);
imageMode(CENTER);
rect(tre.x, tre.y,this.width,this.height);
image(this.image,0,this.height/2,this.width,this.height)
pop()
}

}