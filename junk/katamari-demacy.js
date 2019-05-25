var rand = function(x,y){
    return(round(random(x,y)));

};
var peoplex = [];
var peopley = [];
var peoples = [];
var xspeed = [];
var yspeed = [];
var tit = false;
var level = 3;
var speed = 3;
for(var i = 0; i < level; i ++){
    peoples.push(rand(10,20));
    peoplex.push(rand(0 + peoples[i],400 - peoples[i]));
    peopley.push(rand(0 + peoples[i],400 - peoples[i]));
    xspeed.push(random(-speed,speed));
    yspeed.push(random(-speed,speed));
}
draw = function() {
    background(0, 247, 255);
    if(tit === true){
        background(255, 0, 0);
    }
    fill(0, 0, 0);
    for(var i = 0; i < peoplex.length; i ++){
        ellipse(peoplex[i],peopley[i],peoples[i],peoples[i]);
    }
    for(var i = 0; i < peoplex.length; i ++){
        peoplex[i] += xspeed[i];
        peopley[i] += yspeed[i];
        if(peoplex[i] < 0){
            xspeed[i] = -xspeed[i];
        }
        if(peoplex[i] > 400 - peoples[i]){
            xspeed[i] = -xspeed[i];
        }
        if(peopley[i] < 0){
            yspeed[i] = -xspeed[i];
        }
        if(peopley[i] > 400 - peoples[i]){
            yspeed[i] = -yspeed[i];
        }
    }

};
for(var i = 0; i < peoplex.length; i ++){
    for(var j = i + 1; j < peoplex.length; j ++){
        if((peoplex[j] - peoplex[i]) + (peopley[i] - peopley[j]) <= (peoples[i]+peoples[j])){
            xspeed[i] = -xspeed[i];
            yspeed[i] = -xspeed[i];
            xspeed[j] = -xspeed[j];
            yspeed[j] = -xspeed[j];
            tit = true;
        }
    }
}
