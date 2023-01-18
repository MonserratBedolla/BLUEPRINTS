class CannonBall{
    constructor(x,y,){
        var options={
            restitution:0.8,
            friction:0.1,
            density:1.0,
            isStatic:true
        };
        this.r=40;
        this.body= Bodies.circle(x,y,this.r,options);
        this.image = loadImage("./assets/cannonball.png")
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate (pos.x, pos.y);
        rotate (angle);
        imageMode(CENTER);
        image (this.image,0,0,this.r,this,r);
        pop();
    }
    shoot(){
        var velocity=p5.Vector.fromAnglle(cannon.angle);
        velocity.mult(20);
        Matter.Body.setStatic(this.body,false);
        Matter.Body.setVeocity(this.body,{x:velocity.x,y:velocity.y});

    }
}