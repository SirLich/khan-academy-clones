//
fill(255, 0, 0);
ellipse(200,200,5,5);
fill(186, 186, 186);
var p1x;
var p1y;
var pressed = false;

var draw = function() {
    if (pressed) {
        var p2x = mouseX;
        var p2y = mouseY;
        rect (p1x, p1y, p2x-p1x, p2y-p1y);
    }
};

var mousePressed = function(){
    //background(0, 0, 0);
    p1x = mouseX;
    p1y = mouseY;
    pressed = true;
};

var mouseReleased = function(){
    pressed = false;
};
