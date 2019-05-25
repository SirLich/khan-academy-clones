/**
 *
 * NORMAL RULES:
 * * In the normal game the left and right panels follow the mouseY (up and down mouse movment)
 * * In the normal game the bottom and top panels follow the mouseX (the left and right movment)

 * Crazy Hard:
 * *In crazy hard, all of the controls are inverted. Very confusing!

 * Object of the game:
 * * The point of the game is to last as long as possible!
 * * Its like pong where you are the only one playing!
 *
 * Getting on the top scres list:
 * * Chat your score in Tips & Thanks, or make a spin-off of the score screen.
 * * I will post the scores whenever possible
 *
 * CRAZY HARD TOP TEN
 *
 * 1. 122 KingKhan
 * 2. 73 φιλιπ oφελo (Philip Othelo)     ***THE CREATORS BEST SCORE**
 * 3.
 * 4.
 * 5.
 * 6.
 * 7.
 * 8.
 * 9.
 * 10.
 *
 *
 * NORMAL TOP TEN
 *
 * 1. 306 リカルド
 * 2. 155 Shiraz Mcclennon [UNAVAILABLE]...
 * 3. 109 Jamie Parkey Code Na...
 * 4. 100 KingKhan
 * 5. 66 Mr. π
 * 6. 75 φιλιπ oφελo (Philip Othelo)     ***THE CREATORS BEST SCORE**
 * 7.
 * 8.
 * 9.
 * 10.



a wise word for anyone who acctualy read this far; please do not upvote for text programs... all those petitions and joke-book and button programs?
im sure sombody put a lot of work into them, writing all the text and all that.
but this is not a place for that.
the only program you should upvote is the ones that show programing SKILL!
not just persuasive text. even if it it for a good thing, like no texting and driving, or no bullying.
the programs still do not need to be upvoted.
ok, im done. have a great week-end!
**/





















var xpos = 200;
var ypos = 200;
var y_speed = random(-3.33,3.33);
var x_speed = random(-3.33,3.33);
var rect_h = 100;
var l_pos = 100;
var u_pos = 100;
var r_pos = 100;
var d_pos = 100;
var crazy = false;
var f = createFont("fantasy");
var r = 5;
var speed_i = 0.2;
var score = 0;
var hscore = score;

var you_lose = function(){
    background(0, 0, 0);
    textSize(40);
    fill(0, 0, 255);
    text("You lose!",50,50);
    text("Score:" + " " + score,50,150);
    text("High Score:" + " " + hscore,50,250);
    text("Crazy hard = " + " " + crazy,50,350);
};
var start = function(){
    textFont(f,80);
    background(0, 0, 0);
    fill(0, 0, 255);
    rect(20,20,360,150);
    fill(0, 0, 0);
    rect(22,22,356,146);
    fill(0, 0, 255);
    rect(20,220,360,150);
    fill(0, 0, 0);
    rect(22,222,356,146);
    fill(0, 0, 255);
    text("crazy hard",30,320);
    text("normal",75,120);


};
var input1 = [mouseX,mouseY,6];
var input2 = ['!','g','h'];
var debug1 = function(data1,data2,t,s){
    noStroke();
    textSize(10);
    fill(0, 0, 0,100);
    rect(-10,mouseY - (input1.length * 20 ),420,input1.length * 20,4);
    fill(255, 255, 255,100);
    for(var i = 0; i < data1.length; i ++){
        text(input2[i],mouseX - 45,15 + mouseY - input2.length * 20 + i * 20);
    }
    for(var i = 0; i < data2.length; i ++){
        text(input1[i],mouseX + input1.length/10 * 30,15 + mouseY - input1.length * 20 + i * 20);
    }
};

var run_game = function(){
    noFill();
    background(0, 0, 0);
    stroke(138, 138, 255);
    strokeWeight(2);
    line(200,0,200,400);
    line(0,200,400,200);
    stroke(138, 138, 255);
    rect(10,l_pos,10,rect_h);
    rect(380,r_pos,10,rect_h);
    rect(u_pos, 10, rect_h,10);
    rect(d_pos, 380, rect_h,10);
    ellipse(xpos,ypos,10,10);
    if(crazy){
        l_pos = mouseX - rect_h/2;
        r_pos = mouseX - rect_h/2;
        u_pos = mouseY - rect_h/2;
        d_pos = mouseY - rect_h/2;
    }
    else{
        l_pos = mouseY - rect_h/2;
        r_pos = mouseY - rect_h/2;
        u_pos = mouseX - rect_h/2;
        d_pos = mouseX - rect_h/2;
    }

   if(xpos < 20 + r &&
    ypos > l_pos  - r &&
    ypos < l_pos + rect_h +r){
        playSound(getSound("rpg/hit-clop"));
        x_speed = -x_speed;
        x_speed += speed_i;
        score ++;
        if(x_speed > 9){
            x_speed = 9;
        }
        if(score > hscore){
            hscore = score;
        }
    }

    if(xpos > 370 + r &&
    ypos > r_pos  - r &&
    ypos < r_pos + rect_h +r){
        playSound(getSound("rpg/hit-clop"));
        x_speed = -x_speed;
        x_speed -= speed_i;
        score ++;
        if(x_speed > 9){
            x_speed = 9;
        }
        if(score > hscore){
            hscore = score;
        }
    }

    if(ypos < 20 + r &&
    xpos > u_pos  - r &&
    xpos < u_pos + rect_h +r){
        playSound(getSound("rpg/hit-clop"));
        y_speed = -y_speed;
        y_speed += speed_i;
        score++;
        if(x_speed > 9){
            x_speed = 9;
        }
        if(score > hscore){
            hscore = score;
        }
    }

    if(ypos > 370 + r &&
    xpos > d_pos  - r &&
    xpos < d_pos + rect_h +r){
        playSound(getSound("rpg/hit-clop"));
        y_speed = -y_speed;
        y_speed -= speed_i;
        score++;
        if(x_speed > 9){
            x_speed = 9;
        }
        if(score > hscore){
            hscore = score;
        }
    }

    if(xpos + r > 390 || xpos - r < 10 || ypos + r > 390 || ypos - r < 10){
        draw = you_lose;
    }

    ypos += y_speed;
    xpos += x_speed;

    input1 = [mouseX,mouseY,6];
    input2 = ['!','g','h'];
};
var draw = function() {
    draw = start;
};

var mouseReleased = function(){
    if(mouseX > 10 && mouseX < 390 && mouseY > 10 && mouseY < 110 && draw === start ){
        crazy = false;
        draw = run_game;
    }

    if(mouseX > 10 && mouseX < 390 && mouseY > 220 && mouseY < 400 && draw === start ){
        crazy = true;
        draw = run_game;
    }
    if(you_lose && draw === you_lose){
        score = 0;
        xpos = 200;
        ypos = 200;
        y_speed = random(-3.33,3.33);
        x_speed = random(-3.33,3.33);
        draw = run_game;
    }
};
