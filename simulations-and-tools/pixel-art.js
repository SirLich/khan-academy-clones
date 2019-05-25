var c1 = color(255, 255, 255);
var c2 = color(255, 0, 0);
var c3 = color(255, 0, 0);
var c4 = color(0, 0, 0);
var colorScale = 7;
var screenWidth = 400;
var screenScale = 5;
var currentColor = color(0, 255, 234);
var pickColor = false;
var lineScale = 10;
var colorRed = color(255, 0, 0);
var colorPurple = color(255, 0, 255);
var colorBlue = color(0, 0, 255);
var colorLBlue = color(0, 255, 255);
var colorGreen = color(0, 255, 0);
var colorYellow = color(255, 255, 0);
fill(255, 234, 0);
var SCALE = 290/7;

var draw = function() {
    if(pickColor === true){
        background(128, 128, 128);
        noStroke();
        for(var i = 0; i < screenWidth/colorScale; i ++){
            for(var j = 0; j < screenWidth/colorScale; j ++){
                c3 = (lerpColor(c1,c2,(1/(screenWidth/colorScale)) * i));
                fill(lerpColor(c3,c4,(1/(screenWidth/colorScale)) * j));
                rect(i * screenScale,j * screenScale,screenScale,screenScale);
            }
        }
        for(var i = 0; i < 100/2.5; i ++){
            for(var j = 0; j < 290/2.5/7; j ++){
                fill(lerpColor(colorRed,colorPurple,0.0 + 0.05 * j));
                rect(300 + (i * 2.5),0 + (j * 2.5),2.5,2.5);
            }
        }
        for(var i = 0; i < 100/2.5; i ++){
            for(var j = 0; j < 290/2.5/7; j ++){
                fill(lerpColor(colorPurple, colorBlue,0.0 + 0.05 * j));
                rect(300 + (i * 2.5),43 + (j * 2.5),2.5,2.5);
            }
        }
        for(var i = 0; i < 100/2.5; i ++){
            for(var j = 0; j < 290/2.5/7; j ++){
                fill(lerpColor(colorBlue, colorLBlue,0.0 + 0.05 * j));
                rect(300 + (i * 2.5),86 + (j * 2.5),2.5,2.5);
            }
        }
        for(var i = 0; i < 100/2.5; i ++){
            for(var j = 0; j < 290/2.5/7; j ++){
                fill(lerpColor(colorLBlue, colorGreen,0.0 + 0.05 * j));
                rect(300 + (i * 2.5),129 + (j * 2.5),2.5,2.5);
            }
        }
        for(var i = 0; i < 100/2.5; i ++){
            for(var j = 0; j < 290/2.5/7; j ++){
                fill(lerpColor(colorGreen, colorYellow,0.0 + 0.05 * j));
                rect(300 + (i * 2.5),172 + (j * 2.5),2.5,2.5);
            }
        }
        for(var i = 0; i < 100/2.5; i ++){
            for(var j = 0; j < 510/2.5/7; j ++){
                fill(lerpColor(colorYellow, colorRed,0.0 + 0.034 * j));
                rect(300 + (i * 2.5),215 + (j * 2.5),2.5,2.5);
            }
        }
        fill(currentColor);
        ellipse(50,350,40,40);
        if(mouseIsPressed && mouseX < 290 && mouseY < 290){
            currentColor = (get(mouseX,mouseY));
        }
        if(mouseIsPressed && mouseX > 300 && mouseY < 290){
            c2 = (get(mouseX,mouseY));
        }
    }
    else{
        background(255, 255, 255);
        for(var i = 0; i <= 400/lineScale; i ++){
            stroke(0, 0, 0);
            strokeWeight(0.5);
            line(0,i * lineScale,400,i * lineScale);
            line(i * lineScale, 0, i * lineScale,400);
        }
    }
};
mouseClicked = function(){
    if(mouseButton === RIGHT){
        pickColor = true;
    }
};
keyReleased = function(){
    if(pickColor){
        pickColor = false;
    }
    else{
        //vlah
    }
};
