/**
 * WELCOME TO SIMON:
 *      This is a Phantom Flame production. (Do Not Change This!)
 *      OWNER AND CREATER: φιλιπ oφελo      (Do Not Change This!)
 * NOTES:
 *      Play with sound for more exitment!
 *      Post your highscore as a spinoff, or as a Tips & Thanks comment.
 *      Tell me what you think!
 *
 * DERECTIONS:
 *      Wait for Simon to make a move.
 *      Watch what Simon does (The square will blink)
 *      Click the same square Simon blinked
 *      Simon will now move again
 *      Now click through the sequence Simon did.
 *      Repeat.
 *
 * HIGH SCORES:
 *      1. senzacic     = 17
 *      2. 🐱charkittyc  = 16
 *      3. φιλιπ oφελo  = 10
 *
 * COMING SOON:
 *      1. My phantom flame logo:         = UNFINISHED
 *      2. More intresting end screen:    = UNFINISHED
 *      3. A Restart Button:              = UNFINESHED
*/




























var click = [];
var order = [round(random(1,4))];
var i = -3;
var temp = 0;
var  num = 0;
var part1 = true;
strokeWeight(5);

var main = function(){
    background(120, 120, 120);
    fill(255, 0, 0);
    rect(25,25,150,150,10);
    fill(0, 255, 0);
    rect(25,225,150,150,10);
    fill(0, 0, 255);
    rect(225,225,150,150, 10);
    fill(255, 0, 255);
    rect(225,25,150,150,10);
    fill(0, 0, 0);
    fill(0, 0, 0);
    textSize(30);
    text("Your turn",130,210);
    frameRate(30);
    i = -2;
};

var lose = function(){
    fill(0, 0, 0);
    background(120, 120, 120);
    textSize(75);
    text(order.length,150,200);

};

var simon = function(){
    background(120, 120, 120);

    fill(255, 0, 0);
    rect(25,25,150,150,10);

    fill(0, 255, 0);
    rect(25,225,150,150,10);

    fill(0, 0, 255);
    rect(225,225,150,150, 10);

    fill(255, 0, 255);
    rect(225,25,150,150,10);

    fill(255, 255, 255);
    fill(0, 0, 0);
    textSize(30);
    text("Simon's turn",130,210);
    frameRate(3);
    temp = order[i];
    fill(255, 255, 255);
    if (part1){
        if ( i > (order.length - 1)){
            draw = main;
        }
        if (temp === 1){
            playSound(getSound("retro/jump1"));
            rect(25,25,150,150,10);
        }
        if (temp === 2){
             playSound(getSound("retro/jump2"));
            rect(225,25,150,150,10);
        }
        if (temp === 3){
             playSound(getSound("retro/laser3"));
            rect(25,225,150,150,10);
        }
        if (temp === 4){
             playSound(getSound("retro/laser4"));
            rect(225,225,150,150, 10);
        }


    }

    if (!part1){
        i ++;
    }
        part1 = !part1;
    };
var mouseClicked = function(){
    if (mouseX > 25 && mouseX < 175 && mouseY > 25 && mouseY < 175 && draw === main){
        playSound(getSound("retro/jump1"));
        click.push(1);
    }
    if (mouseX > 225 && mouseX < 375 && mouseY > 25 && mouseY < 175 && draw === main){
        playSound(getSound("retro/jump2"));
        click.push(2);
    }
    if (mouseX > 25 && mouseX < 175 && mouseY > 225 && mouseY < 375 && draw === main){
        playSound(getSound("retro/laser3"));
        click.push(3);
    }
    if (mouseX > 225 && mouseX < 375 && mouseY > 225 && mouseY < 375 && draw === main){
        playSound(getSound("retro/laser4"));
        click.push(4);
    }
    for(var j = 0; j < click.length; j ++){
        if (order[j] !== click[j]){
            draw = lose;
        }
    }
    if (order.length === click.length && draw === main){
        click = [];
        order.push(round(random(1,4)));
        draw = simon;
    }
};
mousePressed = function(){
    fill(0, 0, 0);
    if (mouseX > 25 && mouseX < 175 && mouseY > 25 && mouseY < 175 && draw === main){
        rect(25,25,150,150,10);
    }
    if (mouseX > 225 && mouseX < 375 && mouseY > 25 && mouseY < 175 && draw === main){
        rect(225,25,150,150,10);
    }
    if (mouseX > 25 && mouseX < 175 && mouseY > 225 && mouseY < 375 && draw === main){
        rect(25,225,150,150,10);
    }
    if (mouseX > 225 && mouseX < 375 && mouseY > 225 && mouseY < 375 && draw === main){
        rect(225,225,150,150, 10);
    }
};

var keyPressed = function(){
    draw = simon;
};

var draw = function() {
    draw = simon;
};
