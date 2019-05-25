/**
 * THIS IS A HADES BUNNY GAME

Please do NOT copy and paste this code, if you are interested then use the "spin-off-button"!!!

dodge the blocks to survive, and try to get as many points as posible! everytime a block hits the edge of the screen, your score goes up. you have five lives, use all of them, and you die! please post you score in the 'questions box' and i will update it when i get the chance.

also; much thanks to mr. Steve for all the great help in making this production.

**/

















var program_start = millis();

var s1_1 = 2;
var s2_1 = 2;
var rect_w = 10;
var rect_h = 10;
var snow_d = 10;

var speed = [];

var kind = [];

var snowball = 50;



var y = [];
var x = [];

for (var i = 0 ; i < snowball ; i += 1){
    kind.push(floor(random(0,3.99)));
    switch (kind[i]){
        case 0:
            x.push(random(-5,-400));
            y.push (random(0,400));
            break;

        case 1:
            y.push(random(-5,-400));
            x.push (random(0,400));
            break;

        case 2:
            x.push(random(400,900));
            y.push (random(0,400));
            break;

        case 3:
            y.push(random(400,900));
            x.push (random(0,400));
            break;
    }


    speed.push(random(s1_1,s2_1));


}



//rect(50,50,50,50);
var points = 0;

var life = 5; //number of lives you have before you die


var draw_banner_page = function() {
            background(138, 56, 12);
noStroke();


fill(255, 255, 255);
rect(100,120,200,10);

ellipse(100,115,20,20);

ellipse(100,130,20,20);

ellipse(300,115,20,20);

ellipse(300,130,20,20);


fill(171, 165, 154);
ellipse(200,125,100,100);
ellipse(160,90,30,30);
ellipse(155,85,30,30);
ellipse(150,85,30,30);
ellipse(145,85,30,30);
ellipse(140,90,30,30);

ellipse(240,90,30,30);
ellipse(245,85,30,30);
ellipse(250,85,30,30);
ellipse(255,85,30,30);
ellipse(260,90,30,30);

fill(255, 0, 0);
ellipse(175,120,20,20);
ellipse(225,120,20,20);

fill(255, 0, 21);
arc(200, 145, 40, 40, 1, 180);

fill(8, 7, 7);
ellipse(175,120,3,15);
ellipse(225,120,3,15);

fill(255, 0, 0);
ellipse(200,100,20,20);
fill(8, 7, 7);
ellipse(200,100,3,15);

fill(255, 255, 255);

ellipse(150,125,10,10);

ellipse(250,125,10,10);

fill(250, 8, 28);
textSize(30);


text("A HADES-BUNNY GAME:",20,230);
text("dodge the blocks!!!",20,300);



};

var draw_game_update = function() {
        background(125, 122, 150);
    textSize(30);
    text(life, 30,30);
    text(points,30,60);
    fill(255, 242, 0);
    rect(mouseX,mouseY,rect_w, rect_h);

    for(var i = 0 ; i < y.length ;  i += 1){


        switch (kind[i]){
            case 0:
                fill(242, 249, 250);
                break;
            case 1:
                fill(168, 163, 163);
                break;
            case 2:
                fill(64, 66, 63);
                break;
            case 3:
                fill(5, 5, 5);
                break;
        }



        rect(x[i],y[i], snow_d,snow_d);


        if (x[i] + snow_d / 2 > mouseX - snow_d / 2 &&
            x[i] + snow_d / 2  < mouseX + rect_w + snow_d / 2 &&
            y[i] + snow_d / 2  > mouseY - snow_d / 2 &&
            y[i] + snow_d / 2  < mouseY + rect_h + snow_d /2)
        {
            y[i] -=400;
            x[i] = random(snow_d / 2 ,400 - snow_d/2);
            s1_1 += 0.02;
            s2_1 += 0.02;
            speed[i] = random(s1_1,s2_1);
            life -= 1;
        }




        switch (kind[i]){
            case 0:
                x[i] += speed[i];
                if (x[i] > 400){
                    x[i] = random(-5,-500);
                    y[i] = random(snow_d / 2 ,400 - snow_d/2);
                    s1_1 += 0.001;
                    points += 1;
                }
                break;
            case 1:
                y[i] += speed[i];
                if (y[i] > 400){
                    y[i] = random(-5,-500);
                    x[i] = random(snow_d / 2 ,400 - snow_d/2);
                    s1_1 += 0.001;
                    points += 1;
                }
                break;
            case 2:
                x[i] -= speed[i];
                if (x[i] < 0){
                    x[i] = random(400,900);
                    y[i] = random(snow_d / 2 ,400 - snow_d/2);
                    s1_1 += 0.001;
                    points += 1;
                }
                break;
            case 3:
                y[i] -= speed[i];
                if (y[i] < 0){
                    y[i] = random(400,900);
                    x[i] = random(snow_d / 2 ,400 - snow_d/2);
                    s1_1 += 0.001;
                    points += 1;
                }
                break;






        }


        }
};

var draw_end_game = function() {
    background(255, 0, 0);
    textSize(100);
    fill(10, 9, 9);
    text("you died",20,350);
    textSize(50);
    text("score: " + points,20,250);
    fill(255, 255, 255);

rect(100,120,200,10);

ellipse(100,115,20,20);

ellipse(100,130,20,20);

ellipse(300,115,20,20);

ellipse(300,130,20,20);


fill(171, 165, 154);
ellipse(200,125,100,100);
ellipse(160,90,30,30);
ellipse(155,85,30,30);
ellipse(150,85,30,30);
ellipse(145,85,30,30);
ellipse(140,90,30,30);

ellipse(240,90,30,30);
ellipse(245,85,30,30);
ellipse(250,85,30,30);
ellipse(255,85,30,30);
ellipse(260,90,30,30);

fill(255, 0, 0);
ellipse(175,120,20,20);
ellipse(225,120,20,20);

fill(255, 0, 21);
arc(200, 145, 40, 40, 1, 180);

fill(8, 7, 7);
ellipse(175,120,3,15);
ellipse(225,120,3,15);

fill(255, 0, 0);
ellipse(200,100,20,20);
fill(8, 7, 7);
ellipse(200,100,3,15);

fill(255, 255, 255);

ellipse(150,125,10,10);

ellipse(250,125,10,10);

fill(250, 8, 28);
textSize(30);
};


draw = function() {
    if (millis() - program_start < 2000){
        draw_banner_page();
    }
    else if (life > 0){
        draw_game_update();
    }
    else{
        draw_end_game();
    }
};
