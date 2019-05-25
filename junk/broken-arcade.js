









/**vars*********************************************************/
var play_wam = false;
var playOrbit = false;
var forum = true;
var pagingOrbit = 0;
var play_ktmotb = false;
var draw_lobby;

var b = 0;
var c = 142;
var score_ktmotb = 0;
var hscore_ktmotb = 0;
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
var c1 = color(255, 255, 0);
var c2 = color(255, 60, 0);
var n = 20;
var s = 0.9;



/**minigame functions*******************************************/

var whack_a_mole = function(){
    background(145, 61, 5);
    ellipse(50,50,75,75);
    ellipse(250,100,75,75);
};


var portalOrbit = function(t,x,y,paging){
    strokeWeight(5);
    var w = textWidth(t);
    textFont(createFont("Monospace"),30);
    fill(0,0,0);
    stroke(255, 132, 0);
    rect(x,y,100,32);
    fill(255, 132, 0);
    text(t,x+((100-w)/2),y+27);
    if(mouseIsPressed&&
    mouseX>x&&
    mouseX<x+100&&
    mouseY>y&&
    mouseY<y+32){
        pagingOrbit=paging;
    }
};

var startScreenOrbit = function(){
        background(0, 0, 0);
        portalOrbit("Begin",160,150,1);
        portalOrbit("How",160,200,2);
};

var startGameOrbit = function(){
    background(0, 0, 0);
};


/** Keep the mouse on the button **/

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
    text(score_ktmotb,135,30);
    text("your high score is:",10,60);
    text(hscore_ktmotb,175,60);
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
    score_ktmotb += 12;
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
        if (score_ktmotb > hscore_ktmotb){
            hscore_ktmotb = score_ktmotb;
        }

        xpos = 200;
        ypos = 200;
        fill(255, 255, 255);
        ellipse(xpos,ypos,r*2,r*2);
        textSize(20);
        fill(0, 0, 0);
        text("your score was:",10,30);
        text(score_ktmotb,160,30);
        text("your high score is:",10,60);
        text(hscore_ktmotb,180,60);
        score_ktmotb = 0;
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

        //lobby
        fill(255, 255, 255);
        ellipse(325,75,100,100);
        fill(0, 0, 0);
        text("Lobby",295,80);



        if (sqrt(sq(mouseX - 75) + sq(mouseY - 325)) < r){
            fill(51, 255, 0);
            ellipse(75,325,100,100);
            fill(0, 0, 0);
            text("Green",45,330);
            c1 = color(85, 255, 0);
            c2 = color(0, 66, 2);
        }

        if (sqrt(sq(mouseX - 325) + sq(mouseY - 75)) < r){
            fill(51, 255, 0);
            ellipse(75,325,100,100);
            fill(0, 0, 0);
            forum = true;
            draw = draw_lobby;
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



/**draw function*************************************************/

var draw_lobby = function() {


    //forum visuals
    background(255, 242, 0);
    fill(194, 194, 194); //lightish grey

    for (var j = 0; j < 3; j++) {
        for (var i = 0; i < 5; i++) {
            rect( i*80, j*80, 80, 80);
        }
    }

    rect(20,260,360,120);

    //first rect
    fill(67, 168, 27);
    rect(0,0,80,80);
    fill(0, 0, 0);

    //second rect
    fill(0, 0, 0);
    rect(80,0,80,80);
    fill(0, 0, 0);


    textSize(20);

    if(mouseX > 0 &&
        mouseX < 80 &&
        mouseY > 0 &&
        mouseY < 80){
        text("Game: Keep the mouse on the button.\n\nHigh score:", 30,300);
        text(hscore_ktmotb,150,347);
   }


    if(play_wam){
        draw = whack_a_mole;
    }
    if(play_ktmotb){

    }
    if(playOrbit&&pagingOrbit===0){
        startScreenOrbit();
    }
    if(playOrbit&&pagingOrbit===1){
        startGameOrbit();
    }
    if(playOrbit&&pagingOrbit===2){
        startGameOrbit();
    }

}; //draw function end bracket>>>>>>>>>>>>>

var draw = draw_lobby;

/**mouse released function**************************************/

var mouseReleased = function(){

    if(mouseX > 0 && mouseX < 80 && mouseY > 0 && mouseY < 80 && forum === true){
        play_ktmotb = true;
    }

    if(mouseX > 80 && mouseX < 160 && mouseY > 0 && mouseY < 080 && forum === true){
        playOrbit = true;
    }
};

mousePressed = function() {
    if(play_ktmotb){
        draw = run_game;
    }
};
