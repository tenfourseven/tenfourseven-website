let sketch4 = function(p) {

let points = [];
let scl = 40;

p.setup = function() {
  p.createCanvas(400, 400);

  
  
  
  for(let i = 0; i < p.width - scl; i+=scl) {
    for(let j = 0; j < p.height - scl; j+=scl) {
      points.push(p.createVector(i+scl, j+scl));
    }
  }
}

p.draw = function() {
  p.background(20);
  
  let mouse = p.createVector(p.mouseX, p.mouseY);
  
  for(let i = 0; i < points.length;i++) {
    let pos = points[i];
    let v = p5.Vector.sub(mouse, pos);
    
    v.setMag(20);
     

    p.push()
    p.translate(pos.x, pos.y);
    p.stroke(255);
    p.line(0, 0, v.x, v.y);
    p.fill(0, 50);
    p.circle(v.x, v.y, 20);
    p.pop();
    
    p.push()
    p.stroke(255);
    p.strokeWeight(3);
    p.point(pos.x, pos.y);
    p.pop()
    
  }

 }

 

}

new p5(sketch4, 'sketch4');