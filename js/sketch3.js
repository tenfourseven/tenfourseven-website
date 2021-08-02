let sketch3 = function(p) {

  let r = 0;
  let angle = 0;
  let x, y;
  
  p.setup = function() {
    p.createCanvas(400, 400); 
    p.background(20);
    p.angleMode(p.DEGREES);
    p.translate(200, 200);
    
    
    while(r < 100) {
    
      x = r * p.cos(angle);
      y = r * p.sin(angle);
      r += 0.1;
      
      angle += p.random(0.5, 7);
    
      p.fill(255);
      p.noStroke();
      p.circle(x, y, 5);
      
      
    }
    
  }

}


new p5(sketch3, 'sketch3');