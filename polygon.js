class Polygon{
    constructor(x,y,r){
        let options = {
          restitution:0.5
        }
        this.body = Bodies.circle(x,y,25,options);
        World.add(world,this.body);
        this.r = 20;
        this.image = loadImage("polygon.png");
        
    }

    

    show()
    {
        
        let pos  =this.body.position;
        let angle = this.body.angle;
        push();

            translate(pos.x,pos.y);
            rotate(angle);
            imageMode(CENTER);
            image(this.image,0,0,65,65);
            //scale(10);
        pop();
    }
}