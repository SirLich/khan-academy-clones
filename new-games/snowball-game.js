
// use the rectangle to catch as many snowballs as you can before you lose all five of your lives. letting a snowball touch the ground makes you lose a life, while catching a snowball on the rectangle gives you a point. comment your scores, and i will start a score board. also, if you comment that background out on line 32(the first line in the draw loop) the game gets a little more intresting.
// SCORE:
//lrkoehler77(creator) = 398










var s1 = 1;
var s2 = 1;
var rect_w = 40;
var rect_h = 10;
var snow_d = 20;
var speed = [];
var snowball = 10;
var y = [];
var x = [];
for (var i = 0 ; i < snowball ; i += 1){
    y.push(random(-5,-400));
    x.push (random(0,400));
    speed.push(random(s1,s2));
}



//rect(50,50,50,50);
var points = 0;

var life = 5; //number of lives you have before you die





draw = function() {

    background(0, 255, 221);
    rect(0,350,400,50);
    textSize(30);
    text(life, 30,30);
    text(points,30,60);
    rect(mouseX,mouseY,rect_w, rect_h);
    //debug(speed);

    for(var i = 0 ; i < y.length ;  i += 1){
        fill(255, 255, 255);
        ellipse(x[i],y[i],snow_d,snow_d);
        if(x[i] > mouseX - snow_d / 2 && x[i] < mouseX + rect_w + snow_d / 2 && y[i] > mouseY - snow_d / 2 && y[i] < mouseY + rect_h + snow_d /2){
            points += 1;
            y[i] -=400;
            x[i] = random(snow_d / 2 ,400 - snow_d/2);
            s1 += 0.1;
            s2 += 0.1;
            speed[i] = random(s1,s2);
        }
        y[i] += speed[i];
        if (y[i] > 350){
            y[i] -=400;
            x[i] = random(snow_d / 2 ,400 - snow_d/2);
            life = life -1;

        }

    if (life < 1){
        background(255, 0, 0);
        textSize(100);
        fill(10, 9, 9);
        text("you died",20,100);
        textSize(50);
        text("score: " + points,20,200);
    }

    }








};
