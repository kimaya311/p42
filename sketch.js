var hr,mn,sc;
var scAngle,mnAngle,hrAngle;

function setup() {
  createCanvas(800,400);
  hr=hour();
  mn=minute();
  sc=second();
 // createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255); 
  angleMode(DEGREES); 
  scAngle =map(sc,0,60,0,360);
  mnAngle =map(mn,0,60,0,360);
  hrAngle =map(hr,0,12,0,360);
  //seconds
push();
  translate(400,200);
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();
//minutes
  push();
  translate(400,200);
  rotate(mnAngle);
  stroke(0, 46, 255);
  strokeWeight(7);
  line(0,0,100,0);
  pop();
//hours
  push();
  translate(400,200);
  rotate(hrAngle);
  stroke(123, 255, 0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();
}