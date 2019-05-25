var w1x = 170;
var w1y = 200;
var w2x = 200;
var w2y = 200;
var d = 10;
var force1 = 1;
var force2 = 1;
var xforce = -0.01;
var suspension = 2;
noStroke();
var draw = function() {
    background(0, 123, 255);
    fill(64, 145, 32);
    rect(0,300,400,100);
    ellipse(200,310,60,60);
    fill(0, 0, 0);
    ellipse(w1x,w1y,d,d);
    ellipse(w2x,w2y,d,d);

    if(get(w1x,w1y + d/2) !== -12545760){
        w1y += force1;
    }
    if(get(w2x,w2y + d/2) !== -12545760){
        w2y += force2;
    }
    if(get(w1x,w1y + d/2) === -12545760){
        force1 = -force1/suspension;
        w1y -= 1;
    }
    if(get(w2x,w2y + d/2) === -12545760){
        force2 = -force2/suspension;
        w2y -= 1;
    }
    force1 += 0.098;
    force2 += 0.098;
    if(xforce <= 0){
        xforce -= (w1y - w2y)/1000;
        xforce -= (w1y - w2y)/1000;
        xforce += 0.005;
    }
    if(xforce > 0){
        xforce += (w1y - w2y)/1000;
        xforce += (w1y - w2y)/1000;
        xforce -= 0.005;
    }
    w1x += xforce;
    w2x += xforce;



};
keyPressed = function(){
    if(keyCode === RIGHT){
        xforce += 0.2;
    }
    if(keyCode === LEFT){
        xforce -= 0.2;
    }
};
//-12545760
