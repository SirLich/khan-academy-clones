/**
 * WELCOME TO GREEN-FADE:
 *
 * The point of the game is to get twenty points.
 * Get points by correctly selecting the darker bubble.
 * Press (keyboard) 'A' or 'B' to pick your choice.
 * A wrong choice will lower your points.
 * It gets harder so win quikly or don't win at all.
 * Save as a spin off to show that you won.
 *
 * FIRST 10 WINNERS:
 * 1. philip othelo
 * 2. minecraftclub00
 * 3. Greta
 * 4. Hermione Granger
 * 5. Ridgetheninja∞☾TJF☽{a ranger}✞✩†☢☣ϟ✪
 * 6. Shiraz Mcclennon >
 * 7. AC Universes
 * 8. luosinuo罗思娜
 * 9. 💻🎃Legoprincess🎃💻
 * 10.Room 11

**/


















var end_game = function(){
    textSize(70);
    background(138, 23, 102);
    fill(255, 213, 0);
    text("you win!!!",50,200);
};
var shade1 = floor(random(50,200));
var level = 50;
var shade2 = shade1-level;
var side = floor(random(1,100));
var score = 0;

var draw = function() {
    background(112, 173, 0);
    fill(0, shade1, 0);
    ellipse(100,150,150,150);
    if(side < 50){
        shade2 = shade1-level;
        fill(0, shade2, 0);
    }
    if(side > 50){
        shade2 = shade1+level;
        fill(0, shade2, 0);
    }
    fill(0, shade2, 0);
    ellipse(300,150,150,150);
    fill(166, 255, 0);
    ellipse(200,60,100,100);
    fill(0, 0, 0);
    textSize(50);
    text(score,175,75);
    textSize(40);
    text("which is darker...?",40,350);
    if(score >= 20){
        draw = end_game;
    }
    fill(255, 0, 0);
    textSize(100);
    text("A",70,185);
    text("B",270,185);
};
keyReleased = function(){
    if(keyCode === 66 && side < 50){
        shade1 = floor(random(50,200));
        shade2 = shade1-level;
        side = random(1,100);
        level = level - 1;
        score = score + 1;
    }
    if(keyCode === 66 && side > 50){
        shade1 = floor(random(50,200));
        shade2 = shade1-level;
        side = random(1,100);
        score = score - 1;
    }
    if(keyCode === 65 && side < 50){
        shade1 = floor(random(50,200));
        shade2 = shade1-level;
        side = random(1,100);
        level = level - 1;
        score = score - 1;
    }
    if(keyCode === 65 && side > 50){
        shade1 = floor(random(50,200));
        shade2 = shade1-level;
        side = random(1,100);
        score = score + 1;
    }
};
