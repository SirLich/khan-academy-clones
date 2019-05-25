//Work In Progress!

/**
 * NOTES:
 * HAVE FUN
 *
 * TO-DO:
 * Make "Time"
 * Make more "states"
 * Make score "complete"
 * Make state "transfers"
 *
**/

var states = 1;
var message = ["greater then 0","less than 0"];
var points = 0;
var tran = 0;
var speed = 1;
var score = false;
var prob = 1;
var slide = 2;
var dark = 1;
var x = [];
var fade = false;
var val = [];
var knob = [-50,50,150,250,350,450];

var run_game = function(){
    speed += 0.0001;
    points += 1;
    if(points < 0){
        points = 0;
    }
    fill(0, 0, 255, 128);
    var c = createFont ("chiller");
    textFont(c, 70);
    background(0, 166, 255);
    fill(199, 106, 0);
    rect(0,300,400,200);
    noStroke();
    fill(255, 140, 0);
    ellipse(50,50,55,55);
    fill(255, 204, 0);
    ellipse(50,50,50,50);
    stroke(0, 0, 0);
    fill(222, 131, 40);
    textSize(30);
    fill(140, 65, 0);
    rect(-1,200-10/2,402,10);
    for(var i = 0; i < knob.length; i ++){
        fill(222, 106, 4);
        ellipse(knob[i],200,15,15);
        knob[i] += speed;
        if(knob[i] > 500){
            knob[i] = -100;
            var check = random(1,3);
            if(check > 2){
                x.push(-100);
                val.push(round(random(-500,500)));
                x.splice(x.length,1);
                val.splice(val.length,1);
            }

        }
    }
    for(var i = 0; i < x.length; i ++){
        fill(255, 0, 0);
        ellipse(x[i],200,50,50);
        fill(255, 255, 255);
        ellipse(x[i],200,40,40);
        fill(255, 0, 0);
        ellipse(x[i],200,30,30);
        fill(255, 255, 255);
        ellipse(x[i],200,20,20);
        fill(255, 0, 0);
        ellipse(x[i],200,10,10);
        fill(255, 255, 255);
        stroke(0, 0, 0);
        text(val[i],x[i] - 20,170);
        fill(0, 0, 0);
        stroke(0, 0, 0);
        text(val[i],x[i] - 18,172);
        x[i] += speed;
    } //Draws Targets

    noFill();
    stroke(255, 0, 0);
    ellipse(mouseX,mouseY,50,50);
    rect(mouseX,mouseY - 30,1,60);
    rect(mouseX - 30,mouseY,60,1);
    stroke(0, 0, 0);
    fill(0, 0, 0);
    text("Click on the targets that are:\n" + message[states],10,340);
    text("Score: " + points,100,60);
    fill(0, 0, 0,dark);
    rect(0,0,400,400);
    if(fade === true){
        dark -= 1;
    }
};
var instructions = false;
var start_screen = function(){
    noStroke();

    background(0, 166, 255);
    fill(255, 140, 0);
    ellipse(50,50,55,55);
    fill(255, 204, 0);
    ellipse(50,50,50,50);
    stroke(0, 0, 0);
    pushMatrix();
    translate(slide,tran);
    {
    var c = createFont ("chiller");
    textFont(c, 70);
    fill(122, 57, 0);
    rect(190,50,20,350);
    rect(590,50,20,350);
    fill(199, 106, 0);
    rect(0,300,800,400);
    fill(222, 131, 40);
    stroke(173, 99, 50);
    rect(100,70,200,30);
    rect(100,140,200,30);
    rect(100,210,200,30);
    rect(500,70,200,30);
    rect(500,140,200,30);
    rect(500,210,200,30);
    rect(300,-280,90,60);
    stroke(0, 0, 0);
    fill(0, 0, 0);
    text("Bullet Frenzy",75,370);
    text("Most Wanted",475,370);
    text("What the HELL??",410,650);
    textSize(30);
    text("Play",180,93);
    text("Rules",180,165);
    text("Most-Wanted",140,233);
    fill(94, 49, 0);
    textSize(70);
    text("Bullet Frenzy",77,372);
    text("Most Wanted",477,372);
    textSize(30);
    text("Play",182,95);
    text("Rules",182,167);
    text("Most-Wanted",142,235);
    fill(0, 0, 0, 150);
    textSize(70);
    }
    if(mouseX > 100 && mouseX < 300 && mouseY > 70 && mouseY < 100){
        text("*",110,128);
        text("*",270,128);
    }
    if(mouseX > 100 && mouseX < 300 && mouseY > 140 && mouseY < 170){
        text("*",110,198);
        text("*",270,198);
    }
    if(mouseX > 100 && mouseX < 300 && mouseY > 210 && mouseY < 280){
        text("*",110,270);
        text("*",270,270);
    }
    textSize(25);
    fill(0, 0, 0);
    text("Welcome to Bulllet Frenzy!\nRules:\nA math problem will apear on the bottom\nof the screen.\nAnd numbered targets will come\nfrom the left side.\nfire at the correct targets, but avoid\nthe fake ones!",50,450);
    text("Right click\nto return.",320,-260);
    popMatrix();
    fill(0, 0, 0,dark);
    rect(0,0,400,400);
    if(fade === true){
        dark += 3;
    }
    if(dark > 300){
        draw = run_game;
    }
    if(instructions === true && tran > -300){
        tran -= 2;
        playSound(getSound("retro/rumble"));
    }
    if(instructions === false && tran < 0){
        tran += 2;
        playSound(getSound("retro/rumble"));
    }
    if(score === true && slide > -400){
        slide -= 2;
        playSound(getSound("retro/rumble"));
    }
    if(score === false && slide  < 0){
        slide += 2;
        playSound(getSound("retro/rumble"));
    }
};

var draw = function() {
    draw = start_screen;
};
mouseClicked = function(){
    if(draw === start_screen){
        if(mouseX > 100 && mouseX < 300 && mouseY > 70 && mouseY < 100 && instructions === false){
            fade = true;
        }
        if(mouseX > 100 && mouseX < 300 && mouseY > 140 && mouseY < 170  && instructions === false){
            instructions = true;
        }
        if(mouseX > 100 && mouseX < 300 && mouseY > 210 && mouseY < 280  && instructions === false){
            score = true;
        }
        if(instructions === true && mouseButton === 39){
            instructions = false;
        }
    }
    if(draw === run_game){
        for(var i = 0; i < x.length; i ++){
            if (sqrt(sq(mouseX - x[i]) + sq(mouseY - 200)) < 20){
                if(states === 0){
                    if(val[i] > 0){
                        points += 1000;
                        playSound(getSound("retro/boom2"));
                        x.splice(i,1);
                        val.splice(i,1);
                    }
                    else{
                        points -= 1000;
                        playSound(getSound("retro/whistle1"));
                    }
                }
                if(states === 1){
                    if(val[i] < 0){
                        points += 1000;
                        playSound(getSound("retro/boom2"));
                        x.splice(i,1);
                        val.splice(i,1);
                    }
                    else{
                        points -= 1000;
                        playSound(getSound("retro/whistle1"));
                    }
                }

            }

        }
    }
};
