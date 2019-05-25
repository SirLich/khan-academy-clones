var x = 200;
var y = 200;
var shipX = [200];
var shipY = [200];
var clickX = [1];
var clickY = [1];
var bulletX = [200];
var bulletY = [200];
var r = 3;
mouseReleased = function(){
    bulletY.push(x);
    bulletX.push(x);
    clickX.push(mouseX);
    clickY.push(mouseY);
};
draw = function() {
    background(77, 255, 0);
    fill(0, 0, 0);
    ellipse(x,y,r*10,r*10);
    for(var i = 0; i < clickX; i ++){
        println(bulletX[i]);
        ellipse(bulletX[i] ,bulletY[i] ,r,r);
    }
    for(var i = 0; i < clickX; i ++){
        bulletX[i] -= (shipX[i] - clickX[i])/30;
        bulletY[i] -= (shipY[i] - clickY[i])/30;
    }

};
