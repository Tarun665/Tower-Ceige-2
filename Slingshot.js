class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.06,
            length: 10
        }
        this.pointB = pointB
        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling);
        this.bodyA = bodyA;
        this.sling3 = loadImage("sling3.png");
    }

    fly(){
        this.sling.bodyA = null;
    }
    update(){
        if(keyWentDown("space")){
            this.sling.bodyA = this.bodyA;
        }
    }
    display(){
        
       // image(this.sling3,200,25);
        
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
           
        if(pointA.x<220){
            stroke(48, 22, 8);
            strokeWeight(8);
            //line(pointA.x-25, pointA.y-5, pointB.x-10, pointB.y);
            line(pointA.x-25, pointA.y-5, pointB.x+30, pointB.y-2);
            image(this.sling3,pointA.x-35,pointA.y-15,15,30);

        }else{
            stroke(48, 22, 8);
            strokeWeight(4);
            //line(pointA.x+20, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x+27, pointA.y, pointB.x+30, pointB.y-2);
            image(this.sling3,pointA.x+27,pointA.y-15,15,30);

        }
    }
    }
}