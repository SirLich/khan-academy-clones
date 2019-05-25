var level = 1;

var o1x = 0;
var o1y = 0;
var o1xs = 0;
var o1ys = 0;

var you_lose = function(){
    background(217, 255, 0);
};
var start_screan = function(){
    background(0, 0, 0);
    fill(255, 255, 255);
    ellipse(200,200,30,30);
};
var run_game = function(){
    noStroke();
    if(level === 1){
        background(0, 0, 0);
        fill(255, 255, 255);
        ellipse(200,200,30,30);
        rect(200- 10,200,20,80);
        ellipse(200,280,30,30);
        ellipse(100,200,30,30);
        ellipse(o1x,o1y,30,30);
        rect(100- 5,200,10,-120);
        ellipse(100,280,30,30);
        rect(100- 10,200,20,80);
        ellipse(100,100,60,60);
        ellipse(150,140,60,60);
        ellipse(200,100,60,60);
        rect(200,100,100,5);
        ellipse(300,100,30,30);
        fill(0, 85, 255);
        ellipse(300,280,30,30);
        o1x += o1xs;
        if(o1x > 200 || o1x < 100){
            o1xs = - o1xs;
        }
    }
    if(get(mouseX,mouseY) !== -1){
        draw = you_lose;
    }
};
var draw = function() {
    draw = start_screan;
};

mouseClicked = function(){
    if(draw === start_screan && sqrt(sq(mouseX - 200) + sq(mouseY - 200)) < 15){
        o1x = 100;
        o1y = 280;
        o1xs = 1;
        draw = run_game;
    }
};
//-16758529
