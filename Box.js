class Box{
    constructor(x,y){
        var options = {
         'restitution':0.01,
         'friction': 1.0,
         'density': 0.4
        }
        this.body = Bodies.rectangle(x,y, 35, 50,options);
       
        World.add(world, this.body);
        this.visibility = 255; 
        };
        display(){
          var pos = this.body.position;    
       push();
       translate(pos.x, pos.y);
       rotate(this.body.angle);
       strokeWeight(3);
       rectMode(CENTER);
       this.visibility = this.visibility-5; 
       tint (255, this.visibility); 
       rect(0, 0, 33, 50);
       pop();
     }
   }