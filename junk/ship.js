var r = 16;
var shipx = 200;
var shipy = 200;

var d = r * 2;
fill(212, 212, 212);
rect(shipx - d/7,shipy - d * 1.3,d/3.5,d);
fill(0, 21, 255);
ellipse(shipx,shipy,d * 2.2,r);
fill(0, 217, 255);
ellipse(shipx - d/2,shipy,d,d * 1.5);
ellipse(shipx + d/2,shipy,d,d * 1.5);
fill(135, 135, 135);
ellipse(shipx,shipy,d,d);
