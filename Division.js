class Divisions {
constructor(x,y,width,height){
var choose={
isStatic:true
}
this.seperate=Bodies.rectangle(x,y,width,height,choose);
this.width=width;
this.height=height;
World.add(world,this.seperate);

}
display(){
var pos=this.seperate.position;
rectMode(CENTER);
fill("red");
rect(pos.x,pos.y,this.width,this.height)



}


}