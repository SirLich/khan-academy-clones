background(49, 87, 0);
var x = -200;
var y = -200;
var w = 20;
var XS = [200];
var YS = [200];

var speed = 20;
draw = function() {
    for(var i = 0; i < XS.length; i ++){
        if(mouseX > XS[i] - w/2 && mouseX < XS[i] + w/2 && mouseY > YS[i] - w/2 && mouseY < YS + w/2){
            background(255, 0, 0);
        }
    }
    fill(255, 0, 0);
    ellipse(x,y,w,w);
    if(mouseX > x && mouseIsPressed){
        x += 3;
    }
    if(mouseX < x && mouseIsPressed){
        x -= 3;
    }
    if(mouseY > y  && mouseIsPressed){
        y += 3;
    }
    if(mouseY < y  && mouseIsPressed){
        y -= 3;
    }
    XS += x;
    YS += y;
};
mousePressed = function(){
    x = mouseX;
    y = mouseY;
};
