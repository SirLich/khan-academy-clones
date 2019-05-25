var tick = 3;
var count = 0;
var pressed = false;
var p1x = 0;
var p1y = 0;
var p2x = 0;
var p2y = 0;
var p3x = 0;
var p3y = 0;

var draw = function() {
    if(count > tick && pressed === true){
        p1x = mouseX;
        p1y = mouseY;
        line(p1x,p1y,p2x,p2y);
        p2x = p1x;
        p2y = p1y;
    }
    count += 1;
};
mouseClicked = function(){
    p1x = mouseX;
    p1y = mouseY;
    p2x = mouseX;
    p2y = mouseY;
};
mousePressed = function(){
    pressed = true;
};
mouseReleased = function(){
    pressed = false;
};
