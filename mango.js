class Mango {
    constructor(x,y,width,height) {
      var options = {

          isStatic: true,
          restitution:0,
          friction:1,
          
      }
      this.body = Matter.Bodies.rectangle(x,y,width,height,options);
      this.width=width;
      this.height=height;
      this.image = loadImage("mango.png")
      this.image.set.scale = 1;
      World.add(world, this.body);
      

    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);

      fill("yellow"); 
      image(this.image,pos.x, pos.y,this.width,this.height);
    }
  }; 