class Plinko{
constructor(x,y,radius){

var options = {
isStatic:true
}

this.body = Bodies.circle(x,y,radius,options)
World.add(world,this.body);
this.radius=radius;

}
display(){
var pos = this.body.position;
push();
translate(pos.x,pos.y);
fill("white");
ellipseMode(RADIUS);
ellipse(0,0,this.radius,this.radius);
pop();
}
} ;
