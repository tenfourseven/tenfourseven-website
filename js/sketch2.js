let sketch2 = function(p) {

  let xoff1 = 0;
  let xoff2 = 100;
  p.setup = function() {
    p.createCanvas(400, 400);
  }
  
    p.draw = function() {
    p.background(20);
    
    p.noFill();
    
   
    p.stroke(255);
    
    p.ellipse(200, 270, 270, 50);
    p.line(65, 300, 65, 400);
    p.line(335, 300, 335, 400);
    
    let x1 = p.noise(xoff1) * 200;
    let x2 = (p.noise(xoff2) * 200) + 200;
  
    p.bezier(200, 50, 200, 100, x1, 300, 200, 320); // second curve
    p.bezier(200, 100, 200, 100, x2, 300, 200, 320); // third curve
    
    p.stroke(255, 0, 0);
  
    
    
  //   line(x1, 300, 200, 350); // second anchor
  //   line(x2, 300, 200, 350); // second anchor
    
    
    xoff1 += 0.005;
    xoff2 += 0.005;
    
  }
    
}




new p5(sketch2, 'sketch2');