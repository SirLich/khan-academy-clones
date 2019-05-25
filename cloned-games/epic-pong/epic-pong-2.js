/**
 * Hey Everybody Welcome To Epic Pong 2.0!
 *
 * Credits:
 * This game is Coded by Philip Othelo!
 * I did not steal this code.
 * I think Pong (the real thing) might be copy writed.
 * so just in case: thank you Pong!!!
 *
 * Instructions:
 *
 * single player:
 * use W & S to move up and down. or use the mouse.
 * this can be switched in the settings.
 *
 * You start with the mouse being the defualt setting.
 *
 * multiplayer:
 * use W & S for left rect, and UP & DOWN for right rect.
 * or use mouse. using mouse in multiplayer sets both rects
 * to the mouse. in other words, its just a diferant kind of
 * single player.
 *
 * MORE INFO:
 * there are two game-modes;
 *
 * Campaign: this one is all about beating the game and getting upgrades.
 *
 * Freestyle: this one is all about having fun and changing settings.
 *
 * EPIC TO DO LIST!
 *
 * finsish visuals in the settings page;         DONE
 * make the settings page click-able;            DONE
 * make back button from settings;               DONE
 * make left player advantage work-able;         DONE
 * make right player advantage work-able;        DONE
 * make mouse conrol an option;                  DONE
 * make the game have two diferant gamemodes:    DONE
 * add comments to all if statments;             DONE
 * make the visuals in the store page;           XXX
 * fix setting button;                           DONE
 * make a program header;                        DONE
 * make a 10$ bonus if you beat the computer;    DONE
 * make a 10$ fine if you lose;                  DONE
 * get infinate monmey when freestyle;           DONE
 * fix left and right player advantage;          DONE
 * make the store page button clickable;         DONE
 * make all the upgrades work;                   XXX
 * make a controls button;
 * make controls graphics;
 * make the you lose screen better;              DONE
 * make it so it says not to cheat;              DONE
 * make imposible version;                       DONE
 * make imposible version button clickable;      DONE
 * make imposible version work;                  DONE
 * add death mode to the list of cheats;         DONE

**/

var death_mode = false;
var freestyle = true;
var speed_i = 0.2;
var r_advantage_speed = 2;
var r_advantage_y = 100;
var l_advantage_speed = 2;
var l_advantage_y = 100;
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
var total_money = 0;
var l_advantage = false;
var r_advantage = false;
var mouse_control = true;
var single_player = true;

var you_lose = function(){
    background(0, 0, 0);
    textSize(30);
    fill(255, 0, 0);
    text("It is cheating to try \nand add this setting \nwhen playing Campaign \nmode!!! \n\nYOU LOSE",50,50);
};

if (!single_player){
    r_s = l_s;
}

var info = function(){
    background(0, 0, 0);
    textSize(14);
    fill(255, 255, 0);
    text("Instruction:\nThe point of the game is to last as long as possible.\nyou are the left rectangle.\nuse the mouse to move, or use W and S.\nsettings can be changed in the settings page.\nyou can play two player if you want.\nthen the controls are up and down as well.\nthere are two game-modes: freestyle and Campaign.\nCampaign is all about getting cash without cheating.\nand freestyle is all about changing the settings\nand having fun.\nyou cannot play two player with Campaign mode.",20,20);

    rect(100,250,200,100);
    fill(0, 0, 0);
    textSize(50);
    text("BACK",130,320);
};

var setting = function(){
    background(0, 0, 0);
    fill(255, 255, 255);
    textSize(15);

    fill(255, 255, 255);
    text("Single player =" + " " + single_player,50,25);
    if(single_player){
        fill(255, 255, 0);
        rect(10,10,20,20);
        fill(0, 0, 0);
        rect(14,14,12,12);
    }
    else{
        fill(255, 255, 255);
        rect(10,10,20,20);
    }

    fill(255, 255, 255);
    text("Left player advantage =" + " " + l_advantage,50,65);
    if(l_advantage){
        fill(255, 255, 0);
        rect(10,50,20,20);
        fill(0, 0, 0);
        rect(14,54,12,12);
    }
    else{
        fill(255, 255, 255);
        rect(10,50,20,20);
    }

    fill(255, 255, 255);
    text("Right player advantage =" + " " + r_advantage,50,105);
    if(r_advantage){
        fill(255, 255, 0);
        rect(10,90,20,20);
        fill(0, 0, 0);
        rect(14,94,12,12);
    }
    else{
        fill(255, 255, 255);
        rect(10,90,20,20);
    }

    fill(255, 255, 255);
    text("Mouse control =" + " " + mouse_control,50,145);
    if(mouse_control){
        fill(255, 255, 0);
        rect(10,130,20,20);
        fill(0, 0, 0);
        rect(14,134,12,12);
    }
    else{
        fill(255, 255, 255);
        rect(10,130,20,20);
    }

    fill(255, 255, 255);
    text("Death mode =" + " " + death_mode,50,185);
    if(death_mode){
        fill(255, 255, 0);
        rect(10,170,20,20);
        fill(0, 0, 0);
        rect(14,174,12,12);
    }
    else{
        fill(255, 255, 255);
        rect(10,170,20,20);
    }

    fill(255, 255, 255);
    rect(100,200,150,100);
    fill(0, 0, 0);
    rect(105,205,140,90);
    fill(255, 255, 255);
    textSize(50);
    text("Back",120,265);


    textSize(10);
    fill(255, 255, 0);
    text("Warning! if playing Campaign mode; do not change any setting exept mouse control!",10,390);


};

var start = function(){
    textSize(25);
    background(0, 0, 0);
    fill(255, 255, 255);
    text("<<<Choose A Mode Of Play>>>",30,100);
    fill(255, 255, 255);

    rect(20,200,150,150);

    fill(0, 0, 0);
    rect(24,204,142,142);
    fill(255, 255, 255);

    rect(230,200,150,150);

    fill(0, 0, 0);
    rect(234,204,142,142);
    fill(255, 255, 255);
    textSize(25);
    text("freestyle",40,280);
    text("Campaign ",245,280);


};

var start_screen = function(){
    background(0, 0, 0);
    fill(255, 255, 255);
    textSize(30);

    text("Recent Score:" + " " + score, 30, 50);
    text("Money Earned:" + " $" + money, 30, 100);
    text("High Score:" + " " + hscore, 30, 150);
    text("Total Money:" + " $" + total_money, 30, 200);
    rect(30, 250 ,150,100);
    rect(230, 250 ,150,100);
    rect(300,10,90,50);
    fill(0, 0, 0);
    textSize(30);
    text("play\nagain!",40,290);
    text("shop",250,300);
    textSize(20);
    text("settings",310,40);





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



//if mouse control sets the left rect movemtn to mouse
    if(mouse_control){
        l_y = mouseY - 50;
    }

//sets it so both rect move with the mouse
    if(mouse_control && !single_player){
        r_y = mouseY - 50;
    }

//setting the speed of the right rect if its single player
    if(single_player){
        r_s = 3;
    }
    else{
        r_s = 10;
    }
    if(death_mode){
        r_s = 50;
    }




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
        xspeed += speed_i;
        if(xspeed > d){
            d = xspeed;
        }
    }

//seeing if l_advantage is in bounce pos
    if(l_advantage){
        if(xpos < 50 &&
        ypos > l_advantage_y &&
        ypos < l_advantage_y + 100){
            money ++;
            score ++;
            xspeed = -xspeed;
            xspeed += speed_i;
            if(xspeed > 9){
                xspeed = 9;
            }
        }
    }


//checking to see if the right rect is in bounce pos
    if(xpos > 370 - r &&
    ypos > r_y - r &&
    ypos < r_y + r_h + r){
        money ++;
        score ++;
        xspeed = -xspeed;
        xspeed -= speed_i;
        if(xspeed < -9){
            xspeed = -9;
        }
    }

//seeing if r_advantage is in bounce pos
    if(r_advantage){
        if(xpos > 350 &&
        ypos > r_advantage_y &&
        ypos < r_advantage_y + 100){
            money ++;
            score ++;
            xspeed = -xspeed;
            xspeed += speed_i;
            if(xspeed > 9){
                xspeed = 9;
            }
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
        if(single_player){
            money = money - 10;
        }
        if(score > hscore){
            hscore = score;
        }
        total_money  += money;
        you_win = false;
        draw = start_screen;
    }

    //checking to see if you won
    if(xpos > 370){
        if(single_player){
            money = money + 10;
        }
        if(score > hscore){
            hscore = score;
        }
        total_money  += money;
        you_win = true;
        draw = start_screen;
    }

//setting the AI for singlepleayer game
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

//if viable, sets the left advantage movment
    if(l_advantage){
        rect(30, l_advantage_y, 10 ,100);

        if(l_advantage_y + 100 > 390){
            l_advantage_speed = -l_advantage_speed;
        }

        if(l_advantage_y < 0){
            l_advantage_speed = -l_advantage_speed;
        }

        l_advantage_y += l_advantage_speed;

    }

//if viable sets the right advantage movemnt
    if(r_advantage){
        rect(360, r_advantage_y, 10 ,100);

        if(r_advantage_y + 100 > 390){
            r_advantage_speed = -r_advantage_speed;
        }

        if(r_advantage_y < 0){
            r_advantage_speed = -r_advantage_speed;
        }

        r_advantage_y += r_advantage_speed;

    }


    ellipse(xpos,ypos,d,d);

};

draw = function() {
    draw = start;
};

keyPressed = function(){

//moving the left rect if NOT mouse control
    if(!mouse_control){
        if (keyCode === 87 && draw === run_game){
            l_y -= l_s;
        }

        if (keyCode === 83 && draw === run_game){
            l_y += l_s;
        }
    }


//moving the RIGHT rect if NOT singleplayer
    if(!single_player){
        if (keyCode === UP && draw === run_game){
            r_y -= r_s;
        }

        if (keyCode === DOWN && draw === run_game){
            r_y += r_s;
        }
    }
};

mouseReleased = function(){

//goas back from info
if(mouseX > 100 && mouseX < 300 && mouseY > 250 && mouseY < 350 && draw === info){
    draw = start_screen;
}
//rect(100,250,200,100);
//changes the gamemode to freestyle from start
if(mouseX > 20 &&
mouseX < 170 &&
mouseY > 200 &&
mouseY < 350 &&
draw === start){
    freestyle = true;
    draw = run_game;

}


//changes the gamemode to camp from start
if(mouseX > 230 &&
mouseX < 380 &&
mouseY > 200 &&
mouseY < 350 &&
draw === start){
    freestyle = false;
    draw = run_game;
}
//runs the game. from the start screen
    if(mouseX > 30 && mouseX < 30 + 150 && mouseY > 250 && mouseY < 250 + 100 && draw === start_screen){
        score = 0;
        xpos = 200;
        ypos = 200;
        xspeed = random(-3,3);
        yspeed = random(-3,3);
        draw = run_game;
    }

//runs shop. from the start screen
    if(mouseX > 250 && mouseX < 250 + 150 && mouseY > 250 && mouseY < 250 + 100 && draw === start_screen){
        draw = info;
    }

//runs setting. from the start screen
    if(mouseX > 300 && mouseX < 390 && mouseY > 10 && mouseY < 60 && draw === start_screen){
        draw = setting;
    }

//runs the toggle switch SINGLE PLAYER from start screen
    if(mouseX > 10 && mouseX < 30 && mouseY > 10 && mouseY < 30 && draw === setting){
        if(!freestyle){
            draw = you_lose;

        }
        if(single_player === true){
            single_player = false;
        }
        else{
            single_player = true;
        }
    }


    //runs the toggle switch DEATH MODE from start screen
    if(mouseX > 10 && mouseX < 30 && mouseY > 170 && mouseY < 190 && draw === setting){
        if(!freestyle){
            draw = you_lose;

        }
        if(death_mode === true){
            death_mode = false;
        }
        else{
            death_mode = true;
        }
    }
//runs the toggle switch L_ADVANTAGE from start screen
    if(mouseX > 10 && mouseX < 30 && mouseY > 50 && mouseY < 80 && draw === setting){
        if(!freestyle){
            draw = you_lose;

        }
        if(l_advantage === true){
            l_advantage = false;
        }
        else{
            l_advantage = true;
            l_advantage_y = floor(random(10,290));

        }
    }

//runs the toggle switch R_ADVANTAGE from start screen
    if(mouseX > 10 && mouseX < 30 && mouseY > 90 && mouseY < 120 && draw === setting){
        if(!freestyle){
            draw = you_lose;

        }
        if(r_advantage === true){
            r_advantage = false;
        }
        else{
            r_advantage = true;
            r_advantage_y = floor(random(10,290));
        }
    }

//runs the toggle switch MOUSE_CONTROLfrom start screen
    if(mouseX > 10 && mouseX < 30 && mouseY > 130 && mouseY < 160 && draw === setting){
        if(mouse_control === true){
            mouse_control = false;
        }
        else{
            mouse_control = true;
        }
    }

//back button from the setting's page
    if(mouseX > 100 && mouseX < 250 && mouseY > 200 && mouseY < 300 && draw === setting){
        draw = start_screen;
    }


};
