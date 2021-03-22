class Rain{
    constructor(x,y){
        var options={
            'density':1,
            'friction':0.1,
            'restitution':0,
           // isStatic:true
        }
        this.body=Bodies.circle(x,y,10,options);
        this.radius=5;
        World.add(world, this.body);
    }
    display(){
        var pos=this.body.position;
        ellipseMode(CENTER);
        fill("blue");
        ellipse(pos.x,pos.y,10);
        if(pos.y>height){
            Matter.Body.setPosition(this.body,{x:random(0,400),y:random(-1000,100)})
          }
    }
}