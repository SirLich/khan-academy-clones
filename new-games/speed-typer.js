/**
 * NEW SOUND VERSION!
 * INSTRUCTIONS:
 * The top left circle is your life.
 * The top right circle is your level
 * The middle top oval is your score.
 * The middle oval is the word you have yo type.
 * The bottom oval is the word you are typing.
 * And the last orange circle is your Streak.
 * Getting a streak of 10 gives you an extra life.
 * Missing a word makes you lose a life.
 * You lose when you are out of lives (-1)
 * Make a SpinOff to get on the highscore page!
 *
 * HighScores:
 * 1. The_Mom_%100 (The creators mother) == 3065.977
 * 2. φιλιπ oφελo (The creator) =========== 2383.536
 * 3. El Knico ============================ 603.317
 * 4.
 * 5.
 * 6.
 * 7.
 * 8.
 * 9.
 * 10.
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
*/













var run_game = function(){
    background(255, 0, 0);
};
{
var it = 200;
var c1 = color(46, 189, 255);
var c2 = color(0, 19, 140);
var n = 40;
var s = 0.9;
strokeWeight(1);
var r = 10;
var sped = 10;
var x = [200,200,200,200,200,200,200,200,210,220,230,210,220,200, 190, 210,220,230,240,230,250,260,270,270,270,270,270,220,230,210,200,190,180,170,160,150,150,150,150,150];
var y = [200,210,220,230,240,250,260,270,200,200,200,230,230,160,160,160,160,160,160,160,170,180,190,200,210,220,230,300,300,300,300,300,300,300,290,280,270,260,250,240,230];
var xpos = [];
for (var i = 0; i < x.length; i ++){
    xpos.push(floor(random(-200,-1000)));
}
strokeWeight(3);
var startGame = false;
}
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
var run_logo = function() {
    draw_start_screen();
    textSize(50);
    text("Phantom",200,130);
    text("Flame",200,350);
    fill(0, 0, random(50,255));
    for (var i = 0; i < x.length; i ++){
        if(xpos[i] < x[i]){
            xpos[i] += sped;
            rect(xpos[i],y[i],r,r);
        }
        else{
            rect(x[i],y[i],r,r);
        }

    }
    if(it < 0){
        draw = run_game;
    }
    it --;
};
var draw = function() {
    if(startGame === false){
        draw = run_logo;
    }
    else{
        draw = run_game;
    }
};
var f = createFont("monospace");
{


textFont(f);
var rand = function(min,max){
    var f = random(min,max);
    return round(f);
};
textAlign(CENTER, CENTER);
var max_time = 250;
var speed = 0;
var level = 1;
var score = 0;
var count = 0;
var words = ["ball","bat","bed","book","boy","bun","can","cake","cap","car","cat","cow","cub","cup","dad","day","disco"," man","dog","doll","dust","fan","feet","girl","gun","hall","hat","hen","jar","kite","man","map","men","mom","pan","pet","pie","pig","pot","rat","son","sun","toe","van" ,"will","never","not","what","where","because","why","blue","sexy","unicycle","mouse","hello","that","is","out","of","the","question","and","if","you","want","to","know","answer","i","do","care","please","go","away","from","this","castle","came","reply","house","sticker","smoke","fire","boat","man","child","gun","back","spine","dinosaur","broken","tooth","dentist","killed","eye","killer","tidal","atomic","energy","minecraft","trivia","blocks","horrible","bed","couch","pop","soda","snacks","snake","skin","fish","elephant","dog","god","cat","horse","book","movie"];
var current_word = words[rand(0,words.length - 1)];
var life = 3;
var time = max_time;
var typed_word = "";
var streak = 0;
}
var new_word = function(){
    var r = rand(0,words.length -1);
    return words[r];
};
var word_check = function(){
    if(current_word !== typed_word){
        playSound(getSound("rpg/hit-whack"));
        typed_word = "";
    }
    else{
        typed_word = "";
        playSound(getSound("rpg/coin-jingle"));
        current_word = new_word();
        time = max_time;
        streak += 1;
        count += 1;
    }
};
var you_lose = function(){

    background(255, 0, 0);
    fill(97, 97, 97);
    rect(0,0,400,100);
    rect(0,400,400,-100);
    fill(255, 234, 0);
    ellipse(50,50,20,20);
    ellipse(100,50,20,20);
    ellipse(150,50,20,20);
    ellipse(200,50,20,20);
    ellipse(250,50,20,20);
    ellipse(300,50,20,20);
    ellipse(350,50,20,20);

    ellipse(50,350,20,20);
    ellipse(100,350,20,20);
    ellipse(150,350,20,20);
    ellipse(200,350,20,20);
    ellipse(250,350,20,20);
    ellipse(300,350,20,20);
    ellipse(350,350,20,20);

    fill(0, 0, 0);
    textSize(20);

    text("You did well, fleet Commander!\n Your Score: "+ score + "\nMake a SpinOff to get in the \nhighscore section!",200,200);

};
var keyReleased = function(){
    playSound(getSound("rpg/hit-splat"));
    if(keyCode === ENTER){
        word_check();
        background(255, 0, 0);
    }
    else if(keyCode === BACKSPACE){
        typed_word = typed_word.substring(0,typed_word.length - 1);
    }
    if(keyCode !== ENTER){
        typed_word = typed_word + key.toString();
    }


};
var run_game = function() {
    if (count > 20){
        level += 1;
        count = 0;
    }
    speed = 0.4 + (0.2 * level);
    if(streak > 9){
        life += 1;
        streak = 0;
    }
    score += ((0.1 + streak) * level)/100;

    background(92, 92, 92);
    fill(255, 255, 255);
    ellipse(200,175,300,100);
    ellipse(200,325,300,100);
    fill(0, 255, 0);
    ellipse(200,60,200,100);
    fill(0, 0, 0);
    text(score,200,60);
    fill(140, 197, 207);
    ellipse(50,50,75,75);
    ellipse(350,50,75,75);
    fill(255, 255, 255);
    textSize(25);
    fill(0, 0, 0);
    text(current_word,200,175);
    fill(25, 184, 0);
    if(time < max_time*3/4){
        fill(255, 234, 0);
    }
    if(time < max_time*1/2){
        fill(255, 111, 0);
    }
    if(time < max_time*1/4){
        fill(255, 0, 0);
    }
    rect(50,240,time,20);
    fill(255, 102, 214);
    fill(0, 0, 0);
    text(level,350,50);
    text(life,50,50);
    text(typed_word,200,325);
    fill(255, 153, 0);
    ellipse(350,250,75,75);
    fill(0, 0, 0);
    text(streak,350,250);
    if (time > 0){
         time -= speed;
    }
    else{
        if(life >= 0){
            playSound(getSound("rpg/battle-magic"));
            life -= 1;
            current_word = new_word();
            time = max_time;
            streak = 0;
        }
        if(life < 0){
            playSound(getSound("rpg/battle-spell"));
            draw = you_lose;
        }

    }

};
