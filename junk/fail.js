background(0, 0, 0);
var level = 100;
var speed = 10;
var starW = [30,8];
var starX = [5,6];
var starY = [20,2];
for(var i = 0; i < level; i ++){
    starX += 0;
    starY += 0;
    starW += 0;
}
draw = function() {
    background(0, 0, 0);
    text(starX[0],200,200);

    for(var i = 0; i < starX.length; i ++){
        starX[i] += speed;
        starY[i] += speed;
        fill(255, 0, 0);
        ellipse(starX[i],starY[i],starW[i],starW[i]);
    }
    ellipse(starX[0],starY[0],starW[0],starW[0]);
};
