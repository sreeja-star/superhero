class block{
    constructor(x,y,width,height){
        var options={
          restitution: 0.4,
          density: 1,
          friction: 1,
          //isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    
    }
   display(){
   var pos=this.body.position;
   var angle= this.body.angle;
   push();
   translate(pos.x,pos.y)
   rotate(angle);
   rectMode(CENTER);
   fill("coral");
   stroke("black");
   strokeWeight(2);
   rect(0,0,this.width,this.height);
   pop();
   
   }
 }