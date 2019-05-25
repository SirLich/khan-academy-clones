{
var ktmotb_x = 200;
var ktmotb_y = 200;
var ktmotb_s = 100;
var ktmotb_xspeed = 100;
var ktmotb_yspeed = 100;
}
{
var gamemode = 0;
var highscores = [0];
var gamenames = ["Keep the mouse on the button"];
textFont(createFont("monspace"));
var current_score = 0;
} //Globol Variables
var keep_the_mouse_on_the_button = function(){
    if(gamemode === 0){
        {
        var m = 0;
        var c1 = (40,40,40);
        var c2 = (0,0,0);
        background(0, 0, 0);
        for(var i = 0 ;i  < 30; i ++){
            for(var j = 0; j < 30; j ++){
                m += 1;
                fill (lerpColor(c1, c2, m));
                rect(i*20,j*20,400/30,400/30);
            }
        }
        }
        fill(120, 109, 109);
        ellipse(ktmotb_x,ktmotb_y,ktmotb_s,ktmotb_s);
        fill(255, 255, 255);
        textAlign(CENTER,CENTER);
        textSize(15);
        text(">>>Click<<<",200,200);
        fill(0, 0, 0);
        text(">>>Click<<<",201,201);
    }
    if(gamemode === 1){
        {
        var m = 0;
        var c1 = (40,40,40);
        var c2 = (0,0,0);
        background(0, 0, 0);
        for(var i = 0 ;i  < 30; i ++){
            for(var j = 0; j < 30; j ++){
                m += 1;
                fill (lerpColor(c1, c2, m));
                rect(i*20,j*20,400/30,400/30);
            }
        }
        }
        fill(120, 109, 109);
        ellipse(ktmotb_x,ktmotb_y,ktmotb_s,ktmotb_s);
        ktmotb_x += ktmotb_xspeed;
        ktmotb_y += ktmotb_yspeed;
        if(ktmotb_xspeed > 0){
            ktmotb_xspeed += 0.01;
        }
        else{
            ktmotb_xspeed -= 0.01;
        }
        if(ktmotb_yspeed > 0){
            ktmotb_yspeed += 0.01;
        }
        else{
            ktmotb_yspeed -= 0.01;
        }
        ktmotb_s -= 0.01;
        if(sqrt(sq(mouseX - ktmotb_x) + sq(mouseY - ktmotb_y)) > ktmotb_s/2 && gamemode === 1){
            ktmotb_x = 200;
            ktmotb_y = 200;
            ktmotb_s = 100;
            if(current_score > highscores[0]){
                highscores[0] = current_score;
            }
            current_score = 0;
            gamemode = 0;
        }
        if(ktmotb_x > 400-ktmotb_s/2){
            ktmotb_xspeed = -ktmotb_xspeed;
        }
        if(ktmotb_x < 0 + ktmotb_s/2){
            ktmotb_xspeed = -ktmotb_xspeed;
        }
        if(ktmotb_y > 400-ktmotb_s/2){
            ktmotb_yspeed = -ktmotb_yspeed;
        }
        if(ktmotb_y < 0 + ktmotb_s/2){
            ktmotb_yspeed = -ktmotb_yspeed;
        }
        current_score += 1;
    }
};
var pick_game = function(){
    background(0, 64, 255);
    fill(87, 132, 255);
    rect(5,5,90,90,10);
    rect(105,5,90,90,10);
    rect(205,5,90,90,10);
    rect(305,5,90,90,10);
    rect(5,105,90,90,10);
    rect(105,105,90,90,10);
    rect(205,105,90,90,10);
    rect(305,105,90,90,10);
    rect(5,205,390,190,10);
    if(mouseX > 5 && mouseX < 90 && mouseY > 5 && mouseY < 90){
        fill(255, 162, 0);
        rect(5,5,90,90,10);
        fill(0, 0, 0);
        textSize(20);
        text("Game: "+gamenames[0]+"\n\nHigh-Score: "+highscores[0],20,250);
    }
    if(mouseX > 105 && mouseX < 190 && mouseY > 5 && mouseY < 90){
        fill(255, 162, 0);
        rect(105,5,90,90,10);
    }
    if(mouseX > 205 && mouseX < 290 && mouseY > 5 && mouseY < 90){
        fill(255, 162, 0);
        rect(205,5,90,90,10);
    }
    if(mouseX > 305 && mouseX < 390 && mouseY > 5 && mouseY < 90){
        fill(255, 162, 0);
        rect(305,5,90,90,10);
    }
    if(mouseX > 5 && mouseX < 90 && mouseY > 105 && mouseY < 190){
        fill(255, 162, 0);
        rect(5,105,90,90,10);
    }
    if(mouseX > 105 && mouseX < 190 && mouseY > 105 && mouseY < 190){
        fill(255, 162, 0);
        rect(105,105,90,90,10);
    }
    if(mouseX > 205 && mouseX < 290 && mouseY > 105 && mouseY < 190){
        fill(255, 162, 0);
        rect(205,105,90,90,10);
    }
    if(mouseX > 305 && mouseX < 390 && mouseY > 105 && mouseY < 190){
        fill(255, 162, 0);
        rect(305,105,90,90,10);
    }
};
var draw = function() {
    draw = pick_game;
};
mouseClicked = function(){
    if(draw === pick_game){
        if(mouseX > 5 && mouseX < 90 && mouseY > 5 && mouseY < 90){
            gamemode = 0;
            current_score = 0;
            draw = keep_the_mouse_on_the_button;
        }
    }
    if(draw === keep_the_mouse_on_the_button){
        if (sqrt(sq(mouseX - 200) + sq(mouseY - 200)) < 50 && gamemode === 0){
            gamemode += 1;
            ktmotb_xspeed = random(-3,3);
            ktmotb_yspeed = random(-3,3);
        }

    }
};
