
/**
 * Try and collect the most blood per round by clicking at the right time for every slot.
 * Collect at least as much blood as the grey minimum-amount bar.
 * Each round it gets harder.
 * tell me your best score!
 * Score is created by the EXTRA blood you collected * the round.
 * So dont get lazy after "passing" or you will get lower score.
 * Have tons of fun!
 * Please tell me Ideas, I would love suggestions.
 * Insulted and or offendid by my blood collecter program? Please let me know what wrong, dont just flag.
 *
 * HIGH SCORES:
 * 1. φιλιπ oφελo (Philip Oth = 20071
 * 2. Could be you!
 * 3. Could be you!
*/

var meter = 0;
var lava = [random(0,150),random(0,150),random(0,150),random(0,150),random(0,150)];
var bounce = [true,true,true,true,true];
var freeze = [false,false,false,false,false];
var speed = 1;
var pointer = 0;
var least = 100;
var game = 1;
var blood_needed = 0;
var count = 0;
var score = 0;
var wait = 0;
var c = createFont ("chiller");
    textFont(c, 70);

var you_lose = function(){
    pushMatrix();
    translate(0,count);
    if(count< 400){
        count += 3;
    }
    background(163-count/5, 88-count/5, 31-count/5);
    fill(0, 0, 0);
    rect(350,50,30,300,5);
    fill(255, 0, 0);
    rect(352,348,26,-meter);
    fill(82, 82, 82);
    rect(340,350 -least,50,4);
    for(var i = 0; i < 5; i ++){
        fill(0, 0, 0);
        rect(50 + i*50,50,30,150,5);
        fill(255, 0, 0);
        rect(52 + i * 50,198,26,-lava[i]);
        if(bounce[i] === true && freeze[i] === false){
            lava[i] += speed;
        }
        if(bounce[i] === false  && freeze[i] === false){
            lava[i] -= speed;
        }
        if(lava[i] > 146){
            bounce[i] = false;
        }
        if(lava[i] < 0){
            bounce[i] = true;
        }
    }
    fill(64, 26, 0);
    rect(45,245,200,100,10);
    fill(227, 159, 86);
    noStroke();
    rect(50,250,200,100,10);
    textSize(50);
    fill(255, 0, 0);
    text("YOU COLLECTED:\n\nGALLONS OF BLOOD ",40,-300);
    text(round(score),50,-245);
    text(round(score),98,313);
    fill(0, 0, 0);
    text(round(score),100,315);
    popMatrix();
    };
var reset = function(){
    if(meter > least){
        speed += 0.15;
        if(least < 290){
            least += 7;
        }
        score +=( meter - least)*game;
        meter = 0;
        lava = [random(0,150),random(0,150),random(0,150),random(0,150),random(0,150)];
        bounce = [true,true,true,true,true];
        freeze = [false,false,false,false,false];
        pointer = 0;
        game += 1;
    }
    else{
        draw = you_lose;
    }

};
draw = function() {
    blood_needed = (least - meter) * 2.5 /4;
    background(163, 88, 31);
    fill(0, 0, 0);
    rect(350,50,30,300,5);
    fill(255, 0, 0);
    rect(352,348,26,-meter);
    fill(82, 82, 82);
    rect(340,350 -least,50,4);
    for(var i = 0; i < 5; i ++){
        fill(0, 0, 0);
        rect(50 + i*50,50,30,150,5);
        fill(66, 66, 66);
        //rect(50 + i*50,-blood_needed,30,3);

        fill(255, 0, 0);
        rect(52 + i * 50,198,26,-lava[i]);
        if(bounce[i] === true && freeze[i] === false){
            lava[i] += speed;
        }
        if(bounce[i] === false  && freeze[i] === false){
            lava[i] -= speed;
        }
        if(lava[i] > 146){
            bounce[i] = false;
        }
        if(lava[i] < 0){
            bounce[i] = true;
        }
    }
    if(pointer === 5){
        if(wait === 2){
            wait = 0;
            reset();
        }
        wait = 1;
    }
    fill(64, 26, 0);
    rect(45,245,200,100,10);
    fill(227, 159, 86);
    noStroke();
    rect(50,250,200,100,10);
    textSize(50);
    fill(255, 0, 0);
    text(round(score),98,313);
    fill(0, 0, 0);
    text(round(score),100,315);

};
mouseClicked = function(){
    playSound(getSound("rpg/water-bubble"));
    if(pointer < 5){
        freeze[pointer] = true;
        meter += lava[pointer]/2.5;
        pointer += 1;
    }
    if(wait === 1){
        wait = 2;
    }
};
