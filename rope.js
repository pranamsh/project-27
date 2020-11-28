class rope
{
    constructor(bodyA,bodyB,offsetX,offsetY)
    //constructor(bodyA,bodyB)
    {

   this.offsetX=offsetX;
   this.offsetY=offsetY; 
    
    var options=
    {
        bodyA:bodyA,
        bodyB:bodyB,
        //length:10,
        //stiffness:0.05,
       // pointB:{x:this.offsetX,y:this.offsetY}

    }
    

    

    this.rope=Constraint.create(options);
    World.add(world,this.rope);

    }

    display()
    {
        line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.rope.bodyB.position.x+this.offsetX,this.rope.bodyB.position.y+this.offsetY);
     //line(this.ropeObject.bodyA.position.x,this.ropeObject.bodyA.position.y,this.ropeObject.bodyB.position.x,this.ropeObject.bodyB.position.y);
    }
}