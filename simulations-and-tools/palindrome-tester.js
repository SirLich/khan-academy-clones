//Enter (click into the screen first) some characters. Then press the "click" button. is what you typed
//a palondrome? The computer will tell you!


var fail = false;
var countup = 0;
var countdown = 0;
var blink = 0;
var txt = [];
var loader = 0;
var f = createFont("monospace");
textFont(f);
textAlign(CENTER, CENTER);
textSize(30);

var u_win = function(){
    background(0, 255, 0);
    text("Correct: \n'"+txt+"'\n is a palindrome.",200,200);
};
var u_lose = function(){
    background(255, 0, 0);
    fill(0, 0, 0);
    text("Incorrect: \n'"+txt+"'\n is not a palindrome.",200,200);
};
var check = function(){
    for(var i = 0; i < countup; i ++){
        if(txt[i] !== txt[countdown]){
            fail = true;
        }
        countdown -= 1;
    }
    if(fail === false){
        draw = u_win;
    }
    else{
        draw = u_lose;
    }
};
var enter_data = function(){
    background(0, 64, 255);
    fill(87, 132, 255);
    rect(10,10,380,380);
    fill(0, 64, 255);
    rect(50,175,300,50);
    rect(60,185,300,50);
    ellipse(195,295,100,100);
    ellipse(205,305,100,100);
    fill(87, 132, 255);
    ellipse(200,300,100,100);
    rect(55,180,300,50);
    if(blink > 15){
        fill(0, 0, 0);
        rect(205 + (txt.length * 8),190,1,30);
    }
    blink += 1;
    if(blink > 50){
        blink = 0;
    }
    fill(0, 0, 0);
    text(txt,200,205);
    text("Start",200,300);
};
var loading = function(){
    background(0, 64, 255);
    fill(87, 132, 255);
    rect(10,10,380,380);
    fill(0, 64, 255);
    rect(50,175,300,50);
    rect(60,185,300,50);
    ellipse(195,295,100,100);
    ellipse(205,305,100,100);
    fill(87, 132, 255);
    rect(55,180,300,50);
    ellipse(200,300,100,100);
    fill(0, 64, 255);
    rect(55,180,loader,50);
    fill(0, 0, 0);
    text(txt,200,205);
    text("Click",200,300);
    if(loader < 300){
        loader += 5;
    }
    else{
        fail = false;
        if(txt.length % 2 === 0){
            countup = txt.length/2;
        }
        else{
            countup = (txt.length-1)/2;
        }
        countdown = txt.length-1;
        draw = check;
    }
};
keyPressed = function(){
    if(draw === enter_data){
        if(keyCode === ENTER){

        }
        else if(keyCode === BACKSPACE){
            txt = txt.substring(0,txt.length - 1);
        }
        if(keyCode !== ENTER && txt.length < 16){
            playSound(getSound("rpg/step-heavy"));
            txt = txt + key.toString();
        }
    }
};
mouseClicked = function(){
    if (sqrt(sq(mouseX - 200) + sq(mouseY - 300)) < 50 && draw === enter_data){
        draw = loading;
    }
};
var draw = function() {
    draw = enter_data;
};
