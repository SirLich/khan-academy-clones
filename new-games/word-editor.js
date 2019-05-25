//vars
var xpointer = 70;
var ypointer = 60;
var shifted = false;
var y = 0;
var first_click = true;
var cursor_on = true;
frameRate(2);
//background crap

strokeWeight(1);
background(135, 135, 135);
rect(5,5,390,390);
fill(0, 0, 0);
textFont(createFont("monospace"));
stroke(255, 0, 0);
line(60,5,60,395);
stroke(0, 136, 255);
fill(0, 0, 0);
for(var i =0;i<24;i++){
    line(6,62+y,394,62+y);
    y +=15;
}
noStroke();

fill(0, 0, 0);
ellipse(34,39,18,18);
ellipse(34,349,18,18);
ellipse(34,199,18,18);
fill(102, 102, 102);
ellipse(35,40,18,18);
ellipse(35,350,18,18);
ellipse(35,200,18,18);

var erase_char = function() {
    fill(255, 255, 255);
    noStroke();
    rect(xpointer-1,ypointer-10,10,12);
};
var erase_cursor = function() {
    fill(255, 255, 255);
    noStroke();
    rect(xpointer-1,ypointer-10,2,10);
};

var draw_cursor = function() {
    if (cursor_on) {
        fill(74, 74, 74);
    }
    else {
        fill(255, 255, 255);
    }
    rect(xpointer-1,ypointer-10,2,10);
};

var mouseClicked = function(){
    if (!first_click){
        if (mouseX > 70 &&
            mouseX < 350 &&
            mouseY > 60 &&
            mouseY < 390)
        {
            erase_cursor();
            xpointer = floor((mouseX - 70)/10)*10 + 70;
            ypointer = floor((mouseY - 60)/15)*15 + 60 + 15;
            draw_cursor();
        }

    }
    first_click = false;
};

var keyPressed = function() {
    erase_cursor();
    switch (keyCode) {
        case BACKSPACE:
            xpointer -= 10;
            erase_char();
            break;
        case LEFT:
            xpointer -= 10;
            break;
        case RIGHT:
            xpointer += 10;
            break;
        case UP:
            ypointer -= 15;
            break;
        case DOWN:
            ypointer += 15;
            break;
        case ENTER:
            xpointer = 70;
            ypointer += 15;
            break;
        case 16:
        case 20:
            break;
        default:
            erase_char();
            fill(0, 0, 0);
            text(key,xpointer,ypointer);
            xpointer += 10;
            break;
    }
    if (xpointer > 350){
        xpointer = 70;
        ypointer += 15;
    }
    if (xpointer < 70){
        xpointer = 350;
        ypointer -= 15;
    }
    if (ypointer < 60){
        ypointer += 15;
    }
    if (ypointer >390){
        ypointer -=15;
    }
    //draws pointer
    //fill(255, 255, 255);
    //nostroke();
    //rect(xpointer,ypointer-10,10,12);
    draw_cursor();
};

 var draw = function() {
    cursor_on = !cursor_on;
    draw_cursor();
 };
