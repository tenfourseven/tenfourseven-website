let sketch5 = function(p) {

  let dots = [];
  let xoff = 0;
  let start = 0;
  let inc = 0.005;
  
  let img;

  p.preload = function() {
    img = p.loadImage('img/ship.svg');
  }
  
  p.setup = function() {
    p.createCanvas(400, 400);
    p.angleMode(p.DEGREES);
    
    for(let i = 10; i < p.width; i+=10) { 
      dots.push(new Dot(i));    
    } 
  
  }
  
  p.draw = function() {
    p.background(20);
    
    xoff = start;
    for(let i = 0; i < dots.length; i++) {    
      
      dots[i].pos.y = p.noise(xoff) * p.height; 
      //dots[i].show();
  
      let v1 = dots[14].pos;
      let v2 = dots[24].pos;
      let v3 = p5.Vector.sub(v2, v1);
      
      let d = v1.dist(v2) / 2;
      
  
      let angle = v3.heading();
      
      p.push();
      p.imageMode(p.CENTER);
      p.translate(v1.x + d, v1.y - 20);
      p.noStroke();
      p.rotate(angle);
      p.image(img, 0, 0, 120, 60);
      p.pop();
  
      // water
      p.stroke(255);
      p.strokeWeight(1.2);
      p.line(dots[i].pos.x, dots[i].pos.y, dots[i].pos.x, 400);
   
      xoff += inc;
    }
    
    start += inc;
  
  }

  class Dot {
    constructor(x, y) {
      this.pos = p.createVector(x, y);
      this.xoff = 0;
    }
    
    update() {  
      //this.pos.y = noise(this.xoff) * height;   
      //this.xoff += 0.005;
    }
    
    show() {
      stroke(255);
      strokeWeight(3);
      point(this.pos.x, this.pos.y);
    }
    
  }

 

}

new p5(sketch5, 'sketch5');