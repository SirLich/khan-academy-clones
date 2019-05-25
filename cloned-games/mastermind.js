var colors = [1,1,3,4];

var guess = [100,100,100,100];

var saved = [0,0,0,0];

var peg_info = [];
var pex = [200,200,220,220,200,200,220,220,200,200,220,220,200,200,220,220,200,200,220,220,200,200,220,220,200,200,220,220];
var pey = [40,60,40,60,90,110,90,110,140,160,140,160,190,210,190,210,240,260,240,260,290,310,290,310,340,360,340,360];
var color_data = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var x = [50,90,130,170,50,90,130,170,50,90,130,170,50,90,130,170,50,90,130,170,50,90,130,170,50,90,130,170];
var y = [50,50,50,50,100,100,100,100,150,150,150,150,200,200,200,200,250,250,250,250,300,300,300,300,350,350,350,350];

var row = 0;

var pick = false;

var clicked = 0;
var draw = function() {
    background(115, 54, 0);
    fill(115, 54, 0);
    stroke(0, 0, 0);
    strokeWeight(2);
    rect(240,40,140,60,20);
    textSize(30);
    fill(0, 0, 0);
    text("Start",270,80);
    fill(82, 42, 0);
    text("Start",272,82);
    fill(255, 255, 0);
    triangle(30,50+row*50,20,60+row*50,20,40+row*50);
    if(mouseX > 240 && mouseX < 380 && mouseY > 40 && mouseY < 100){
        fill(145, 68, 0);
        rect(240,40,140,60,20);
        fill(0, 0, 0);
        text("Start",270,80);
        fill(82, 42, 0);
        text("Start",272,82);
    }
    noStroke();
    for(var i = 0; i < 28; i ++){
        if(peg_info[i] === 2){
            fill(0, 0, 0);
        }
        else if(peg_info[i] === 1){
            fill(255, 255, 255);
        }
        else{
            fill(82, 42, 0);
        }
        ellipse(pex[i],pey[i],15,15);
    }
    stroke(0, 0, 0);
    strokeWeight(2);
    for(var i = 0; i < x.length; i ++){
        if(color_data[i] === 1){
            fill(255, 0, 0);
        }
        else if(color_data[i] === 2){
            fill(0, 0, 0);
        }
        else if(color_data[i] === 3){
            fill(255, 255, 255);
        }
        else if(color_data[i] === 4){
            fill(255, 255, 0);
        }
        else if(color_data[i] === 5){
            fill(0, 0, 255);
        }
        else if(color_data[i] === 6){
            fill(0, 255, 0);
        }
        else{
            fill(64, 46, 0);
        }
        ellipse(x[i],y[i],20,20);
    }
    if(pick === true){
        fill(0, 0, 0,175);
        rect(-10,-10,420,420);
        fill(115, 54, 0);
        stroke(179, 72, 0);
        strokeWeight(5);
        rect(100,150,200,100,20);
        textSize(20);
        fill(0, 0, 0);
        text("Pick a color",152,191);
        fill(179, 72, 0);
        text("Pick a color",150,190);
        stroke(0, 0, 0);
        strokeWeight(2);
        fill(255, 0, 0);
        ellipse(125,215,20,20);
        fill(0, 0, 0);
        ellipse(155,215,20,20);
        fill(255, 255, 255);
        ellipse(185,215,20,20);
        fill(255, 255, 0);
        ellipse(215,215,20,20);
        fill(0, 0, 255);
        ellipse(245,215,20,20);
        fill(0, 255, 0);
        ellipse(275,215,20,20);
    }
};


var mouseClicked = function(){
    if(pick === false){
        if (sqrt(sq(mouseX - 50) + sq(mouseY - (50 + 50 * row))) < 10){
            clicked = 1;
            pick = true;
        }
        if (sqrt(sq(mouseX - 90) + sq(mouseY - (50 + 50 * row))) < 10){
            clicked = 2;
            pick = true;
        }
        if (sqrt(sq(mouseX - 130) + sq(mouseY - (50 + 50 * row))) < 10){
            clicked = 3;
            pick = true;
        }
        if (sqrt(sq(mouseX - 170) + sq(mouseY - (50 + 50 * row))) < 10){
            clicked = 4;
            pick = true;
        }

        if(mouseX > 240 && mouseX < 380 && mouseY > 40 && mouseY < 100 && guess[0] !== 100 && guess[1] !== 100 && guess[2] !== 100 && guess[3] !== 100 && row < 8){
            row += 1;
            var counter = 0;
            var found = false;
            for(var i = 0; i < 4; i ++){
                if(colors[i] === guess[i]){
                    saved[i] = 1;
                    peg_info.push(2);
                    counter += 1;
                }
            }
            for(var i = 0; i < 4; i ++){
                for(var j = 0; j < 4; j ++){
                    if(colors[i] === guess[j] && saved[i] === 0 && found === false){
                        saved[i] = 1;
                        peg_info.push(1);
                        counter += 1;
                        found = true;
                    }
                }
                found = false;
            }
            for(var i = 0 ; i < 4 - counter; i ++){
                peg_info.push(0);
            }
            counter = 0;
            for(var i = 0; i < 4; i ++){
                guess[i] = 100;
                saved[i] = 0;
            }
            playSound(getSound("retro/laser4"));

        }
        else{
            playSound(getSound("retro/laser2"));
        }
    }
    else{
        if(sqrt(sq(mouseX - 125) + sq(mouseY - 215)) < 10){
            if(clicked === 1){
                color_data[0 + 4 * row] = 1;
                guess[0] = 1;
            }
            if(clicked === 2){
                color_data[1 + 4 * row] = 1;
                guess[1] = 1;
            }
            if(clicked === 3){
                color_data[2 + 4 * row] = 1;
                guess[2] = 1;
            }
            if(clicked === 4){
                color_data[3 + 4 * row] = 1;
                guess[3] = 1;
            }
            pick = false;
        }
        if(sqrt(sq(mouseX - 155) + sq(mouseY - 215)) < 10){
            if(clicked === 1){
                color_data[0 + 4 * row] = 2;
                guess[0] = 2;
            }
            if(clicked === 2){
                color_data[1 + 4 * row] = 2;
                guess[1] = 2;
            }
            if(clicked === 3){
                color_data[2 + 4 * row] = 2;
                guess[2] = 2;
            }
            if(clicked === 4){
                color_data[3 + 4 * row] = 2;
                guess[3] = 2;
            }
            pick = false;
        }
        if(sqrt(sq(mouseX - 185) + sq(mouseY - 215)) < 10){
            if(clicked === 1){
                color_data[0 + 4 * row] = 3;
                guess[0] = 3;
            }
            if(clicked === 2){
                color_data[1 + 4 * row] = 3;
                guess[1] = 3;
            }
            if(clicked === 3){
                color_data[2 + 4 * row] = 3;
                guess[2] = 3;
            }
            if(clicked === 4){
                color_data[3 + 4 * row] = 3;
                guess[3] = 3;
            }
            pick = false;
        }
        if(sqrt(sq(mouseX - 215) + sq(mouseY - 215)) < 10){
            if(clicked === 1){
                color_data[0 + 4 * row] = 4;
                guess[0] = 4;
            }
            if(clicked === 2){
                color_data[1 + 4 * row] = 4;
                guess[1] = 4;
            }
            if(clicked === 3){
                color_data[2 + 4 * row] = 4;
                guess[2] = 4;
            }
            if(clicked === 4){
                color_data[3 + 4 * row] = 4;
                guess[4] = 4;
            }
            pick = false;
        }
        if(sqrt(sq(mouseX - 245) + sq(mouseY - 215)) < 10){
            if(clicked === 1){
                color_data[0 + 4 * row] = 5;
                guess[0] = 5;
            }
            if(clicked === 2){
                color_data[1 + 4 * row] = 5;
                guess[1] = 5;
            }
            if(clicked === 3){
                color_data[2 + 4 * row] = 5;
                guess[2] = 5;
            }
            if(clicked === 4){
                color_data[3 + 4 * row] = 5;
                guess[3] = 5;
            }
            pick = false;
        }
        if(sqrt(sq(mouseX - 275) + sq(mouseY - 215)) < 10){
            if(clicked === 1){
                color_data[0 + 4 * row] = 6;
                guess[0] = 6;
            }
            if(clicked === 2){
                color_data[1 + 4 * row] = 6;
                guess[1] = 6;
            }
            if(clicked === 3){
                color_data[2 + 4 * row] = 6;
                guess[2] = 6;
            }
            if(clicked === 4){
                color_data[3 + 4 * row] = 6;
                guess[3] = 6;
            }
            pick = false;
        }
    }
};
