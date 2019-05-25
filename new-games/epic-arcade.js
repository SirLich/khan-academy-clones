//vars
var simon_click = [];
var simon_order = [round(random(1,4))];
var simon_i = -3;
var simon_temp = 0;
var  simon_num = 0;
var simon_part1 = true;

//functions
var lobby = function() {
    strokeWeight(3);
    background(255, 242, 0);
    fill(194, 194, 194);
    for (var j = 0; j < 3; j++) {
        for (var i = 0; i < 5; i++) {
            rect( i*80, j*80, 80, 80);
        }
    }
    rect(20,260,360,120);
    fill(67, 168, 27);
    rect(0,0,80,80);
    fill(0, 0, 0);
    textSize(20);

    if(mouseX > 0 &&
        mouseX < 80 &&
        mouseY > 0 &&
        mouseY < 80){
        text("Game: Keep the mouse on the button.\n\nHigh score:", 30,300);
        text(50,150,347);
   }
};
var draw = function() {
    draw = lobby;
};
var simon_main = function(){
    strokeWeight(5);
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
    simon_i = -2;
};
var simon_lose = function(){
    strokeWeight(5);
    fill(0, 0, 0);
    background(120, 120, 120);
    textSize(75);
    text(simon_order.length,150,200);

};
var simon = function(){
    strokeWeight(5);
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
    simon_temp = simon_order[simon_i];
    fill(255, 255, 255);
    if (simon_part1){
        if ( simon_i > (simon_order.length - 1)){
            draw = simon_main;
        }
        if (simon_temp === 1){
            rect(25,25,150,150,10);
        }
        if (simon_temp === 3){
            rect(25,225,150,150,10);
        }
        if (simon_temp === 4){
            rect(225,225,150,150, 10);
        }

        if (simon_temp === 2){
            rect(225,25,150,150,10);
        }
    }

    if (!simon_part1){
        simon_i ++;
    }
        simon_part1 = ! simon_part1;
    };

//global functions
var mouseClicked = function(){
    if (mouseX > 25 && mouseX < 175 && mouseY > 25 && mouseY < 175 && draw === simon_main){
        simon_click.push(1);
    }
    if (mouseX > 225 && mouseX < 375 && mouseY > 25 && mouseY < 175 && draw === simon_main){
        simon_click.push(2);
    }
    if (mouseX > 25 && mouseX < 175 && mouseY > 225 && mouseY < 375 && draw === simon_main){
        simon_click.push(3);
    }
    if (mouseX > 225 && mouseX < 375 && mouseY > 225 && mouseY < 375 && draw === simon_main){
        simon_click.push(4);
    }
    for(var j = 0; j < simon_click.length; j ++){
        if (simon_order[j] !== simon_click[j]){
            draw = simon_lose;
        }
    }
    if (simon_order.length === simon_click.length && draw === simon_main){
        simon_click = [];
        simon_order.push(round(random(1,4)));
        draw = simon;
    }
};
var mousePressed = function(){
    fill(0, 0, 0);
    if (mouseX > 25 && mouseX < 175 && mouseY > 25 && mouseY < 175 && draw === simon_main){
        rect(25,25,150,150,10);
    }
    if (mouseX > 225 && mouseX < 375 && mouseY > 25 && mouseY < 175 && draw === simon_main){
        rect(225,25,150,150,10);
    }
    if (mouseX > 25 && mouseX < 175 && mouseY > 225 && mouseY < 375 && draw === simon_main){
        rect(25,225,150,150,10);
    }
    if (mouseX > 225 && mouseX < 375 && mouseY > 225 && mouseY < 375 && draw === simon_main){
        rect(225,225,150,150, 10);
    }
};
var keyPressed = function(){
    draw = simon;
};
