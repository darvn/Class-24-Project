class PlayerArcher {
    constructor(x, y, w, h, angle){
        var options = {
            isStatic : true
        }

        this.body = Bodies.rectangle(x, y, w, h, options);
        this.image = loadImage("assets/playerArcher.png")
        this.width = w;
        this.height = h;
        this.body.angle = angle
        World.add(world, this.body);
    }

    show(){

        var pos = this.body.position;
      //  var angle = this.body.angle;

        if(keyIsDown (UP_ARROW) && this.body.angle > -2.3){
            this.body.angle -= 0.1;
        }

        // if(this.body.angle < -0.95){
        //     this.body.angle += 0.05;
        // }


          if(keyIsDown (DOWN_ARROW) && this.body.angle < -0.95){
            this.body.angle += 0.1;
          }

        push();
        translate(pos.x, pos.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
    
}