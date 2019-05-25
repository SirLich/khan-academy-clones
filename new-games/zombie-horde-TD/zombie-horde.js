//*************** the X and Y of your spaceship  *******************************************************
var shipx = 200;
var shipy = 200;

//*************** Derection values. setting them to true will make the ship move in that derection ******
var right = false;
var left = false;
var up = false;
var down = false;

//************* other variables   ************************************
var r = 10;
var r2 = 1;
var r3 = 5;
var f = 50;
var g = 50;
var level = 30;
var health = 200;
var count = 0;
//************* These are all bullet variables ************************************************

var bulletx = [];  //the actual ypos of the bullet
var bullety = [];  // the actual xpos of the bullet
var pointx = [];   //the spaceship y when the bullet was fired
var pointy = [];   //the space shipx when the bulet was fired
var posx = [];     //where the mouse was clicked (one of the points)
var posy = [];     //where the mouse is clicked (one of the points)
var prime = [];    //shows wether a bulet is 'primed' (can inflict damage)
var f = 50;

//************* These are all alien variables ************************************************

var alienx = [];  //the aliens x pos
var alieny = [];  // the aliens y pos
var live = [];    //true ro false value on wether alien is alvie
var alienh = [];    //alien health
for(var i = 0; i < level; i ++){

}

var you_lose = function(){
    background(255, 0, 0);
};
var draw = function() {
    if(count > level){
        count = 0;
        alienx.push(random(-200,200));
        alieny.push(random(-200,200));
        live.push(true);
        alienh.push(5);
    }
    count += 1;
    if(health < 0){
        draw = you_lose;
    }
    background(0, 238, 255);
    textSize(20);
    fill(0, 0, 0);
    text(health,50,50);
    fill(255, 221, 0);
    ellipse(shipx,shipy,r *2,r *2);
    fill(87, 87, 87);
    for(var i = 0; i < bulletx.length; i ++){
        if(prime[i] === true){
            ellipse(bulletx[i],bullety[i],r2*2,r2*2);

        }
    }           //where the bullet is drawn
    for(var i = 0; i < bulletx.length; i ++){
        f = 2/sqrt(sq(posx[i] - pointx[i]) + sq(posy[i] - pointy[i]));
        bulletx[i] += (posx[i] - pointx[i] ) * f;
        bullety[i] += (posy[i] - pointy[i] ) * f;
    }           //where the bullet is moved
    for(var i = 0; i < alienx.length; i ++){
        f = 1/sqrt(sq(alienx[i] - shipx) + sq(alieny[i] - shipy));
        alienx[i] -= (alienx[i] - shipx) * f;
        alieny[i] -= (alieny[i] - shipy) * f;
    }            //there the alien is moved
    for(var i = 0; i < alienx.length; i ++){
        if(live[i] === true){
            fill(250, alienh[i] * 50, 0);
            ellipse(alienx[i],alieny[i],r3*2,r3*2);
        }


    }            //where the alien is drawn
    if(right){
        shipx += 2;
    }                                          //moving ship to the right
    if(left){
        shipx -= 2;
    }                                           //moving ship to the left
    if(up){
        shipy -= 2;
    }                                             //moving ship to the up
    if(down){
            shipy += 2;
        }                                           //moving ship to the down
    if(shipx - r < 0){
        shipx = 0 + r;
    }                               //keeps ship in bounds
    if(shipx + r > 400){
        shipx = 400 - r;
    }                                //keeps ship in bounds
    if(shipy + r > 400){
        shipy = 400 - r;
    }                              //keeps ship in bounds
    if(shipy - r < 0){
        shipy = 0 + r;
    }                               //keeps ship in bounds
    for(var i = 0; i < bulletx.length; i ++){
        if(prime[i] === true){
            for(var j = 0; j < alienx.length; j ++){
                if(sqrt(sq(alienx[j] - bulletx[i]) + sq(alieny[j] - bullety[i])) < (r2 + r3) && live[j] === true && prime[i] === true){
                    alienh[j] -= 2;
                    if(alienh[j] < 0){
                        live[j] = false;
                        playSound(getSound("retro/boom2"));

                    }
                    prime[i] = false;
                    playSound(getSound("retro/laser2"));

                }
            }
        }
    }
    for(var j = 0; j < alienx.length; j ++){
        if(sqrt(sq(alienx[j] - shipx) + sq(alieny[j] - shipy)) < (r2 + r) && live[j] === true){
            health -= r * 5;
            live[j] = false;
        }
    }
};
var mousePressed = function(){
//>>>>>>>>>>>>>>>>>>>pushing on values (AKA "making" a bullet) <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    bulletx.push(shipx);
    playSound(getSound("retro/laser1"));
    bullety.push(shipy);
    pointx.push(shipx);
    pointy.push(shipy);
    posx.push(mouseX);
    posy.push(mouseY);
    prime.push(true);
};
var keyPressed = function(){
    if(keyCode === RIGHT){
        right = true;
    } //sets movemnt to true
    if(keyCode === LEFT){
        left = true;
    }  //sets movemnt to true
    if(keyCode === UP){
        up = true;
    }    //sets movemnt to true
    if(keyCode === DOWN){
        down = true;
    }  //sets movemnt to true
    if(keyCode === ESC){
        down = false;
        right = false;
        up = false;
        left = false;
    }
};
var keyReleased  = function(){
    if(keyCode === RIGHT){
        right = false;
    } //sets movemnt to false
    if(keyCode === LEFT){
        left = false;
    }  //sets movemnt to false
    if(keyCode === UP){
        up = false;
    }    //sets movemnt to false
    if(keyCode === DOWN){
        down = false;
    }  //sets movemnt to false
};
