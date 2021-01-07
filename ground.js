class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
     
      this.x=x;
      this.y=y;
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x,y,width,height,options);
      World.add(world, this.body);
    }
    display(){
      
      var groundpos =this.body.position;
      push()
      translate(groundpos.x,groundpos.y)
      rectMode(CENTER);
      strokeWeight(4);
			fill(255,255,0)
      rect(0,0, this.width, this.height);
      pop()
    }
  }