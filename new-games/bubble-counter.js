/**
 * press SPACE to start.
 * a number of bubbles will appear!
 * 5 seconds later they will be replaced by a counting screen.
 * enter the number of bubbles you counted.
 * if you were right, you will advance to the next level (press space)
 * if not, you will lose!
 *
 * HIGH SCORES:
 * 90 >>> φιλιπ oφελo (Philip Othelo) (the creator)
 * <<post your score to see it here!>>
 *
 *
 *
 *
*/


var score = 0;
noFill();
var tick = 0;
var cur = 0;
background(181, 27, 163);
stroke(0, 0, 0);
var ran1 = 5;
var ran2 = 15;
var slice = 0;

var start = function(){
    background(132, 0, 255);
    text("Press Space To Start",100,200);
};
var rand = function(ran1,ran2){
    return round(random(ran1,ran2));
};

var go = function(num){
    background(85, 255, 0);
    for(var i  = 0; i < num; i ++){
        var w = rand(5,100);
        var x = rand(0+(w/2),400-(w/2));
        var y = rand(0+(w/2),400-(w/2));
        ellipse(x,y,w,w);

    }
};
var you_lose = function(){
    background(255, 0, 0);
    textSize(20);
    fill(0, 0, 0);
    text("You lost!",50,50);
    text("Score: " + score,50,100);
};

var pause = function(num){
    background(255, 183, 0);
    textSize(20);
    text("how many bubbles did you count?",50,50);
    text(cur,200,200);
};
var nill = function(){
    if(tick + 5000 < millis()){
        draw = pause;
    }
};
var draw  = function(){
    pause(14);
};
var keyReleased = function(){
    if(keyCode >= 48 && keyCode <= 57){
        cur *= 10;
        cur += keyCode - 48;
    }
    if(keyCode === 32){
        if(slice === cur){
            score += cur;
            cur = 0;
            ran1 += 1;
            ran2 += 2;
            tick = millis();
            draw = nill;
            slice = rand(ran1,ran2);
            go(slice);
        }
        else{
            draw = you_lose;
        }

    }
};
