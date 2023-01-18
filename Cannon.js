class Cannon{
    constructor(x,y,width,height,angle){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.angle=angle;
    }
    display(){
        if (keyIsDown(RIGHT_ARROW) && this. angle<0.35){
            this.angle += 0.02;
        }
        //cambio en el ángulo
        if (keyIsDown(LEFT_ARROW) && this. angle>-1.45){
            this.angle -= 0.02;
        }
        fill("#676e6a");
        push();
        translate (this.x,this.y);
        rotate (this.angle);
        //cambio en tamaño y coordenadas de rect y arc
        rect (20,0,this.width,this.height);
        pop();
        //arc (this.x-40,this.y+80,PI,TWO_PI);
         arc (this.x-30,this.y+90,70,90,PI,TWO_PI);
        noFill();
    }
 }