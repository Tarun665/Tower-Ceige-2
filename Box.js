class Box{
    constructor(x,y,w,h,col){
        let options = {
          restitution:0.9,
          mass:0.2,
          density:0.5
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.body);
        this.w = w;
        this.h = h;
        this.x = x;
        this.y = y;
        this.col = col;
        // this.image = loadImage("paper.png");
        this.Visiblity = 255;

    }

    
 
    show()
    {
        let dispState = 0;
        let pos  =this.body.position;
        let angle = this.body.angle;
        if(this.body.speed < 10){
            push();
            translate(pos.x,pos.y);
            rotate(angle);
            ellipseMode(CENTER);
            fill(this.col);
            strokeWeight(3);
            stroke(0);
            rect(0,0,this.w,this.h);
            //scale(10);
        pop();           
        }
        else{
            dispState = 1;
            World.remove(world, this.body);
            push();
            this.Visiblity = this.Visiblity - 5;
            if(dispState === 0){
            translate(pos.x,pos.y);
            rotate(angle);
            rectMode(CENTER);
            fill(this.col);
            strokeWeight(3);
            stroke(0);
            rect(pos.x,pos.y,this.w,this.h);
            tint(255,this.Visiblity);
            }
            pop();
     
   }
 
    }
}