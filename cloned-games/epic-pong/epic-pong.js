background(0, 0, 0);
var r = 5;
var l_y = 200;
var l_s = 10;
var l_h = 100;
var r_y = 200;
var r_s = 3;
var r_h = 100;
var d = 15;
var r = d/2;
var xpos = 200;
var ypos = 200;
var xspeed = random(-3,3);
var yspeed = random(-3,3);
var you_win = false;
var score = 0;
var hscore = score;
var money = 0;

var single_player = true;
if (!single_player){
    r_s = l_s;
}

var start_screen = function(){
    background(0, 0, 0);
    fill(255, 255, 255);
    textSize(30);

    if(single_player){
        if(you_win){
            text("you won!",50,150);
            text("Money:" + " " + money ,50,200);
            text("score:" + " " + score ,50,250);
            text("speed:" + " " + floor(xspeed),50,300);

        }

        else{
            text("you lost!",50,150);
            text("Money:" + " " + money ,50,200);
            text("score:" + " " + score ,50,250);
            text("speed:" + " " + floor(xspeed),50,300);
        }
    }
    else{
        if(you_win){
            text("player 1 won!",50,150);
            text("Money:" + " " + money ,50,200);
            text("score:" + " " + score ,50,250);
            text("speed:" + " " + floor(xspeed),50,300);

        }

        else{
            text("player 2 won!",50,150);
            text("Money:" + " " + money ,50,200);
            text("score:" + " " + score ,50,250);
            text("speed:" + " " + floor(xspeed),50,300);
        }
    }


};

var run_game = function(){
    background(179, 179, 179);
    fill(87, 87, 87);
    rect(20, l_y,10,l_h);
    rect(370,r_y,10, r_h);
    fill(0, 0, 0);
    rect(0,0,400,10);
    rect(0,390,400,10);
    line(200,0,200,400);

    xpos += xspeed;
    ypos += yspeed;


    //making sure the left rect doesint go past the top
    if(l_y < 10){
        l_y = 10;
    }

    //making sure the left rect doesint go past the bottom
    if(l_y > 290){
        l_y = 290;
    }

    //making sure the right rect doesint go past the top
    if(r_y < 10){
        r_y = 10;
    }

    //making sure the roight rect doesint go past the bottum
    if(r_y > 290){
        r_y = 290;
    }

    //checking to see if the left rect is in bounce pos
    if(xpos < 30 + r &&
    ypos > l_y  - r &&
    ypos < l_y + l_h +r){
        money ++;
        score ++;
        xspeed = -xspeed;
        xspeed += 0.1;
        if(xspeed > 9){
            xspeed = 9;
        }
    }

    //checking to see if the right rect is in bounce pos
    if(xpos > 370 - r &&
    ypos > r_y - r &&
    ypos < r_y + r_h + r){
        money ++;
        score ++;
        xspeed = -xspeed;
        xspeed -= 0.1;
        if(xspeed < -9){
            xspeed = -9;
        }
    }

    //rebouncing on the top
    if(ypos < 10 + r){
        score ++;
        yspeed = -yspeed;
    }

    //rebouncing on the bottom
    if(ypos > 390 - r){
        score ++;
        yspeed = -yspeed;
    }

    //checking to see if you lost
    if(xpos < 30){
        you_win = false;
        draw = start_screen;
    }

    //checking to see if you won
    if(xpos > 370){
        you_win = true;
        draw = start_screen;
    }

    if(single_player){
        if(xpos < 200){
            if(r_y + r_h - r_h/2 < 200){
                r_y += r_s;
            }

            if(r_y + r_h - r_h/2 > 200){
                r_y -= r_s;
            }
        }
        if(xpos > 200){
            if(r_y + r_h - r_h/2 < ypos){
                r_y += r_s;
            }

            if(r_y + r_h - r_h/2 > ypos){
                r_y -= r_s;
            }
        }

    }


    ellipse(xpos,ypos,d,d);

};

draw = function() {
    draw = run_game;
};

keyPressed = function(){
    if (keyCode === 87 && draw === run_game){
        l_y -= l_s;
    }

    if (keyCode === 83 && draw === run_game){
        l_y += l_s;
    }

    if(!single_player){
        if (keyCode === UP && draw === run_game){
            r_y -= r_s;
        }

        if (keyCode === DOWN && draw === run_game){
            r_y += r_s;
        }
    }
};
