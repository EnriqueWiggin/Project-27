class Rope {
    constructor(body1, body2, offset, offset )
    {
        this.offsetX=offsetX
        this.offsetY=offsetY
      var options = {
        bodyA:body1,
        bodyB:body2,
        pointB:{x:this.offsetX,y:this.offsetY}
    }
    this.rope = Constraint.create(options);
    World.add(world,this.rope);
}

rope=new Rope(bobObject1.body,roofObject.body,bobDiameter*2,0)
rope=new Rope(bobObject2.body,roofObject.body,bobDiameter*2,0)
rope=new Rope(bobObject3.body,roofObject.body,bobDiameter*2,0)
rope=new Rope(bobObject4.body,roofObject.body,bobDiameter*2,0)
rope=new Rope(bobObject5.body,roofObject.body,bobDiameter*2,0)


display(){
    var pointA=this.rope.bodyA.position;
    var pointB=this.rope.bodyB.position;

    strokeWeight(2);

    var Anchor1X=pointA.x
    var Anchor1Y=pointA.y

    var Anchor2X=pointB.x+this.offsetX
    var Anchor2Y=pointB.y+this.offsetY
    line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
}
}

