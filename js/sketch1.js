let sketch1 = function(p) {
 
  
  let step = 8;
  p.setup = function() {
    p.createCanvas(400, 400);
    p.angleMode(p.DEGREES);
  }

  p.draw = function() {
    p.background(0);
    p.stroke(255);
    p.noFill();
    p.translate(200, 200);
    for(let i = 0; i < step; i++) {
      p.rotate(180 / step  * i);
      drawCircle(0, 0, 100);
    }
    p.noLoop();
    
  }

  // recursion function
  function drawCircle(x, y, d) {
    p.ellipse(x, y, d);
    if(d > 1) {
      drawCircle(x + 25, y, d * 0.5);
      drawCircle(x - 25, y, d * 0.5);
    }
    
  }

}


new p5(sketch1, 'sketch1');





