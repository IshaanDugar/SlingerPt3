class str{
    constructor(bodyA, pointB){
        var options ={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.05,
            length:10
        }
        this.pointB = pointB;
        this.str = Constraint.create(options);
        World.add(world, this.str);
    }

    attach(body){
        this.str.bodyA = body;
    }

    fly(){
        this.str.bodyA = null;
    }

    display(){
        if(this.str.bodyA){
        var pointA = this.str.bodyA.position;
        var pointB = this.pointB;

        push(); 
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            if(pointA.x < 220){
            stroke("green");
            strokeWeight(7);
            line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
            line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
            }
        pop();
        }
    }
}