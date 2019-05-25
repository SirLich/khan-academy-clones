/**
 *
 * click on the the "start" button to play. as soon as you click,
 * the game will start. the point of the game is to keep the
 * mouse on the button. as you play, the button will get smaller
 * and faster. to save your highscore, use the provided restart
 * button, and not the "program restart" button. if you get a
 * good score save as a spin off, and I will put it in the
 * highscore section.
 *
 *
 * Khan academy's best Gamer = <<<your name here>>>;
 *
 *
 * beat my score to get your name here


keep the mouse on the button best scores!


1. 36,156 = Philip Othelo (the creator)
2. 30,987 = ƬΉᄃ (DΛЯKΉЦПƬΣЯ)
3. 30,684 = Sky does minecraft.
4. 18,096 = ☣☢☠Բɪʀɛʂ†ąʀ☣☢☠ (Furious Runner)
5. 14,316 = Detective Arachnidjds (KA police);
6. 4,104  = The #1 pi, radian & net neutrality proponent
7. 336    = Ⓐ̲̅ⓝ̲̅ⓣ̲̅ⓗ̲̅ⓞ̅ⓐ̲̅ⓒ̲̅ⓤ̲̅ⓔ̲̅ⓩ̅

thanks to all upvoters! (this is not asking for votes, this is just thanking my supporters!

GOALS: 10 = NOT COMPLETE.


**/

frameRate(30);



















// vars
var b = 0;
var c = 142;
var score = 0;
var hscore = 0;
var xspeed = random(-3,3);
var yspeed = random(-3,3);
var xpos = 200;
var ypos = 200;
var xspeed2 = random(-3,3);
var yspeed2 = random(-3,3);
var xpos2 = 200;
var ypos2 = 200;
var r = 50;
var info = false;
var greenc = false;
var orangec = false;
var blackc = true;
var start = true;
var c1 = color(88, 222, 227);
var c2 = color(72, 199, 80);
var n = 20;
var s = 0.9;

//LERP color/draw start screen function
frameRate(30);
strokeWeight(3);
var draw_start_screen = function(){
    var m = 0;
    noStroke();
    background(255, 255, 255);
    for(var i = 0; i < 400 ; i += 400/n){
        for(var j = 0; j < 400 ; j += 400/n){
            fill(13, 0, 255);
            fill (lerpColor(c1, c2, m));
            m += 1/(n*n);
            var sz = 400/n * s;
            rect(i,j,sz,sz);

        }
    }
    stroke(0, 0, 0);
};

//draw start screen

draw_start_screen();

fill(255, 255, 255);
ellipse(xpos,ypos,r*2,r*2);
fill(0, 0, 0);
textSize(20);
text("your score is:",10,30);
text(score,140,30);
text("your high score is:",10,60);
text(hscore,180,60);
textSize(30);
fill(0, 0, 0);
text("start",175,210);





//setting the draw loop

var do_nothing = function() {

};

draw = do_nothing;

var run_game = function() {

//if in circle

    draw_start_screen();
    fill(0, 0, 0);
    ellipse(xpos,ypos,r*2,r*2);
    textSize(19);

    text("your score is:",10,30);
    text(score,135,30);
    text("your high score is:",10,60);
    text(hscore,175,60);
    if(info){
        textSize(19);
        text("seconds:",10,90);
        text(floor(millis()/1000),100, 90);
        text("X position:",10,120);
        text(xpos,110,120);
        text("Y position:",10,150);
        text(ypos,110,150);
        text("X speed:",10,180);
        text(xspeed,110,180);
        text("Y speed:",10,210);
        text(yspeed,110,210);
        text("milli seconds:",10,240);
        text(millis(),134,240);
        text("circle radius:",10,270);
        text(r/2,125,270);
        text("circle diameter:",10,300);
        text(r,150,300);
        text("bounce:",10,330);
        text(b, 100, 330);
        text("X mouse coordinates:", 10, 360);
        text(mouseX,200,360);
        text("Y mouse coordinates:", 10, 390);
        text(mouseY,200,390);


    }



    if ( r >= 20){
        r -= 0.01;
        b ++;
    }
    if (xspeed >=0){
        xspeed  += 0.001;
        b ++;
    }
    else{
        xspeed -= 0.001;
        b ++;
    }
    if (yspeed > 0){
        yspeed += 0.001;
        b ++;
    }
    else{
        yspeed -= 0.001;
        b ++;
    }
    score += 12;
    c += 1;


if (sqrt(sq(mouseX - xpos) + sq(mouseY - ypos)) < r){

    fill(255, 255, 255);
    ellipse(xpos,ypos,r*2,r*2);

    //settin the bounce for the ball
    if (xpos - r <= 0 || xpos + r >= 400){
        xspeed = - xspeed;
        b ++;
    }
    if (ypos - r <= 0 || ypos + r >= 400){
        yspeed = - yspeed;
        b ++;
    }
    //setting the pos of the circle

    xpos += xspeed;
    ypos += yspeed;
}



    //if the mouse comes out, do this;

    else{
        r = 50;
        draw_start_screen();
        fill(255, 255, 255);
        draw = do_nothing;
        textSize(33);
        fill(0, 0, 0);
        if (score > hscore){
            hscore = score;
        }

        xpos = 200;
        ypos = 200;
        fill(255, 255, 255);
        ellipse(xpos,ypos,r*2,r*2);
        textSize(20);
        fill(0, 0, 0);
        text("your score was:",10,30);
        text(score,160,30);
        text("your high score is:",10,60);
        text(hscore,180,60);
        score = 0;
        textSize(25);
        fill(0, 0, 0);
        text("restart",165,210);
        c = 142;
        xspeed = random(-2.91,2.33);
        yspeed = random(-2.91,2.33);

        // colors

        fill(255, 255, 255); // fill white
        ellipse(75,325,100,100); //green
        ellipse(200,325,100,100); //orange
        ellipse(325,325,100,100); // black
        fill(0, 0, 0); //fill black

        text("Green",45,330);
        text("Orange",160,330);
        text("Blue",300,330);


        if (sqrt(sq(mouseX - 75) + sq(mouseY - 325)) < r){
            fill(51, 255, 0);
            ellipse(75,325,100,100);
            fill(0, 0, 0);
            text("Green",45,330);
            c1 = color(85, 255, 0);
            c2 = color(0, 66, 2);
        }


        if (sqrt(sq(mouseX - 325) + sq(mouseY - 325)) < r){
            fill(51, 255, 0);
            ellipse(325,325,100,100);
            fill(0, 0, 0);
            text("Blue",300,330);

            c1 = color(186, 191, 255);
            c2 = color(18, 0, 122);

        }

        if (sqrt(sq(mouseX - 200) + sq(mouseY - 325)) < r){
            fill(51, 255, 0);
            ellipse(200,325,100,100);
            fill(0, 0, 0);
            text("Orange",160,330);

            c1 = color(255, 255, 0);
            c2 = color(255, 60, 0);

        }



        //statistics

        if (!info){
        if (sqrt(sq(mouseX - 75) + sq(mouseY - 200)) < 100 && mouseIsPressed){
            info = true;
        }

        fill(64, 255, 0);
        ellipse(325,200,100,100);
        fill(0, 0, 0);
        textSize(19);
        text("No",310,200);
        text("statistics",290,220);

        fill(255, 255, 255);
        ellipse(75,200,100,100);
        fill(0, 0, 0);
        textSize(20);
        text("statistics",40,210);



        }
        
        if (info){
            if (sqrt(sq(mouseX - 325) + sq(mouseY - 200)) < 100 && mouseIsPressed){
                info = false;
            }
            fill(255, 255, 255);
            ellipse(325,200,100,100);
            fill(0, 0, 0);
            textSize(19);
            text("No",310,200);
            text("statistics",290,220);

            fill(47, 255, 0);
            ellipse(75,200,100,100);
            fill(0, 0, 0);
            textSize(20);
            text("statistics",40,210);

        }



       }





};

//setting the functions again.
mousePressed = function() {
    draw = run_game;
};
