var ballx = [200];
var bally = [200];
var stagex = 200;
var speed = 0.1;
var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
textFont('monospace');
var right_key = 'a';
var left_key = 'b';
var holder = '';
textAlign(CENTER, CENTER);
var draw = function() {
    background(0, 0, 0);
    fill(255, 255, 255);
    textSize(20);
    text("_ _ _ _",stagex,350);
    text("_ _ _ _",stagex,345);
    textSize(15);
    text("[                ]",stagex,356);
    for(var i = 0; i < ballx.length; i ++){
        textSize(15);
        text("{:|:}",ballx[i],bally[i]);
        bally[i] += speed;
    }
    text("(" + left_key + ")",30,370);
    text("(" + right_key + ")",370,370);
};
keyReleased = function(){
    holder = holder + key.toString();
    if(holder === right_key){
        stagex += 10;
        right_key = letters[floor(random(1,26))];
    }
    if(holder === left_key){
        stagex -= 10;
        left_key = letters[floor(random(1,26))];
    }
    holder = '';

};
