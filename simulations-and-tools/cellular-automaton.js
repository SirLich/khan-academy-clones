var speed = 100;






























var iterations = 0;
var manx = 200;
var many = 200;
var facing = 1;
frameRate(speed);
noStroke();
var move = function(){
    if(get(manx,many) === -1){
        fill(0, 0, 0);
        facing -= 1;
    }
    else{
        fill(255, 255, 255);
        facing += 1;
    }
    if(facing === 0){
        facing = 4;
    }
    if(facing === 5){
        facing = 1;
    }
    rect(manx,many,4,4);

    if(facing === 1){
        many -= 4;
    }
    if(facing === 2){
        manx += 4;
    }
    if(facing === 3){
        many += 4;
    }
    if(facing === 4){
        manx -= 4;
    }

};
var draw = function() {
    iterations += 1;
    println(iterations);
    move();
    fill(255, 0, 0);
    rect(manx+1,many,2,2);
    rect(manx,many+1,2,2);
    rect(manx+1,many+1,2,2);
};
