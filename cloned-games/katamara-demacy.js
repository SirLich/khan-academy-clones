var mobx = [];
var moby = [];
var mobs = [];
var mobr = [];

var manx = 200;
var many = 200;
var manr = 20;
var mans = 2;

var right = false;
var left = false;
var up = false;
var down = false;

var spawn = 20;
var spawn_rate = 30;

var randint = function(val1,val2){
    return floor(random(val1,val2));
};

for(var i = 0; i < spawn; i ++){
    mobx.push(randint(0,400));
    moby.push(randint(0,400));
    mobs.push(randint(1,2));
    mobr.push(random(5,50));
}
draw = function(){
    if(spawn > spawn_rate){
        mobx.push(randint(0,400));
        moby.push(randint(0,400));
        mobs.push(randint(1,2));
        mobr.push(random(manr/3,manr * 1.5));
        spawn = 0;
    }
    spawn += 1;
    background(44, 102, 0);
    fill(43, 0, 255);
    ellipse(manx,many,manr,manr);
    if(up){
        many -= mans;
    }
    if(down){
        many += mans;
    }
    if(right){
        manx += mans;
    }
    if(left){
        manx -= mans;
    }
    fill(255, 136, 0);
    for(var i = 0; i < mobx.length; i ++){
        ellipse(mobx[i],moby[i],mobr[i],mobr[i]);
        if (sqrt(sq(mobx[i] - manx) + sq(moby[i] - many)) < mobr[i]/2 + manr/2){
            if(mobr[i] > manr){
                manr -= mobr[i]/20;
            }
            else{
                manr += mobr[i]/10;
            }
            mobx.splice(i,1);
            moby.splice(i,1);
            mobs.splice(i,1);
            mobr.splice(i,1);
        }

    }
};

keyPressed = function(){
    if(keyCode === UP){
        up = true;
    }
    else if(keyCode === DOWN){
        down = true;
    }
    else if(keyCode === LEFT){
        left = true;
    }
    else if(keyCode === RIGHT){
        right = true;
    }
};

keyReleased = function(){
    if(keyCode === UP){
        up = false;
    }
    else if(keyCode === DOWN){
        down = false;
    }
    else if(keyCode === LEFT){
        left = false;
    }
    else if(keyCode === RIGHT){
        right = false;
    }
};
