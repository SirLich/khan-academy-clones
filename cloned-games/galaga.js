/**
 * fix the D var                                                 #4
 * make another alien                                            #5
 * make another alien
 * make another alien
 * make another alien
 * make another powerup
 * make another powerup
 * fix the shield colisions
 * make a main menu
 * make a start screen
 * impliment phantom games
 * disable alien swarm
 * add corrected flight patterns
 * romove println() status                                       #1
 * make an alien boss
 * make the aliens not matter till on screen
 * make the aliens stop mattering when the go off screen
 * fix where the ship goes off the screen                        #3
 * add up and down movement?                                     #2
 * make spaceShip1 === r. instead of r/2.                        #5
 * fix the shields                                               #6
 * take away the up and down movement                            #7
*/













//*************** the X and Y of your spaceship  *******************************************************
var shipx = 200;
var shipy = 350;
var shipt = 1;

//*************** Derection values. setting them to true will make the ship move in that derection ******
var right = false;
var left = false;
var up = false;
var down = false;

//************* other variables   ************************************
var r = 25;
var r2 = 1;
var health = 3;
var count = 0;
var index = 0;
var temp = 0;
var move = 3;
var xp = 0;
var upgrade = [500,2500];
var shield = false;
var mid = -400;
var com = 0;
var miny = 1;
var maxy = 5;
var level = 200;

//************* These are all bullet variables ************************************************

var bulletx = [];  //the actual ypos of the bullet
var bullety = [];  // the actual xpos of the bullet
var pointx = [];   //the spaceship y when the bullet was fired
var pointy = [];   //the space shipx when the bullet was fired
var posx = [];     //where the mouse was clicked (one of the points)
var posy = [];     //where the mouse is clicked (one of the points)
var prime = [];    //shows wether a bulet is 'primed' (can inflict damage)
var f = 50;

//************* These are all alien variables ************************************************

var alienx = [];  //the aliens x pos
var alieny = [];  // the aliens y pos
var live = [];    //true ro false value on wether alien is alvie
var alienh = [];    //alien health
var juice = [];
var r3 = [];
var alient = [];
var aliena = [];


var you_lose = function(){
    background(255, 0, 0);
};
var draw = function() {
    background(0, 0, 0);
    textSize(20);
    fill(255, 255, 255);
    text(xp,30,75);
    for(var i = 1; i < health + 1; i ++){
        image(getImage("cute/Heart"),25 * i,20 ,25,40);
    }               //draws the life
    if(count > level){
        com = round(random(miny,maxy));
        if(com === 1){
            for(var i = 1; i < 10; i ++){
                juice.push(50);
                alienx.push(i * 40);
                alieny.push(mid + 200);
                live.push(true);
                alienh.push(3);
                r3.push(12);
                alient.push(1);
                aliena.push(1);
            }
        }
        if(com === 2){
            for(var i = 0; i < 8; i ++){
                juice.push(50);
                alienx.push(100 + i * 30);
                alieny.push(mid + 200);
                live.push(true);
                alienh.push(3);
                r3.push(12);
                alient.push(5);
                aliena.push(1);

                juice.push(50);
                alienx.push(100 + i * 30);
                alieny.push(mid + 250);
                live.push(true);
                alienh.push(3);
                r3.push(12);
                alient.push(5);
                aliena.push(1);

                juice.push(50);
                alienx.push(100 + i * 30);
                alieny.push(mid + 300);
                live.push(true);
                alienh.push(3);
                r3.push(12);
                alient.push(5);
                aliena.push(1);
            }
            juice.push(-100);
            alienx.push(200);
            alieny.push(mid + 225);
            live.push(true);
            alienh.push(3);
            r3.push(12);
            alient.push(4);
            aliena.push(1);

            juice.push(-100);
            alienx.push(200);
            alieny.push(mid + 275);
            live.push(true);
            alienh.push(3);
            r3.push(12);
            alient.push(6);
            aliena.push(1);
        }
        if(com === 3){
            juice.push(-100);
            alienx.push(200);
            alieny.push(mid + 200);
            live.push(true);
            alienh.push(5);
            r3.push(12);
            alient.push(3);
            aliena.push(1);
    }
        if(com === 4){
            for(var i = 1; i < 10; i ++){
                juice.push(50);
                alienx.push(40);
                alieny.push(mid + 40 * i);
                live.push(true);
                alienh.push(1);
                r3.push(12);
                alient.push(2);
                aliena.push(5);

                juice.push(50);
                alienx.push(360);
                alieny.push(mid + 40 * i);
                live.push(true);
                alienh.push(1);
                r3.push(12);
                alient.push(2);
                aliena.push(5);
            }
        }
        if(com === 5){
            for(var i = 1; i < 10; i ++){
                juice.push(50);
                alienx.push(mid + 40 * i);
                alieny.push(mid + 40 * i);
                live.push(true);
                alienh.push(2);
                r3.push(12);
                alient.push(round(random(1,2)));
                aliena.push(2);
                juice.push(50);
                alienx.push(mid + 400 - ( 40 * i));
                alieny.push(mid + 40 * i);
                live.push(true);
                alienh.push(2);
                r3.push(12);
                alient.push(round(random(1,2)));
                aliena.push(2);
            }
        }
        count = 0;
    }                                   //Makes the alien swarm
    count += 1;
    if(xp > upgrade[shipt - 1]){
        xp = xp - upgrade[shipt - 1];
        shipt += 1;
    }
    if(health < 0){
        draw = you_lose;
    }                                     // Makes you lose
    fill(255, 255, 255);
    if(shipt === 1){
        stroke(0, 0, 0);
        fill(212, 212, 212);
        rect(shipx - (r/2)/7,shipy - (r/2) * 1.3,(r/2)/3.5,(r/2));
        fill(0, 21, 255);
        ellipse(shipx,shipy,(r/2) * 2.2,(r/2));
        fill(0, 217, 255);
        ellipse(shipx - (r/2)/2,shipy,(r/2),(r/2) * 1.5);
        ellipse(shipx + (r/2)/2,shipy,(r/2),(r/2) * 1.5);
        fill(135, 135, 135);
        ellipse(shipx,shipy,(r/2),(r/2));
        if(shield === true){
            noFill();
            stroke(225, 255, 0);
            ellipse(shipx,shipy,(r/2) * 5,(r/2) * 5);
        }
    }                                    //draws ship1
    if(shipt === 2){
        if(shield === true){
            noFill();
            stroke(225, 255, 0);
            ellipse(shipx,shipy,(r/2) * 5,(r/2) * 5);
        }
        stroke(255, 242, 0);
        fill(255, 234, 0);
        rect(shipx - r/3,shipy - r/6,r/1.5,r/5);
        fill(0, 0, 0);
        ellipse(shipx - r/3,shipy - r/10,r/4,r/1.5);
        ellipse(shipx + r/3,shipy - r/10,r/4,r/1.5);
        ellipse(shipx,shipy - r/16,r/5,r/5);
    }                                    //draws ship2
    if(shipt === 3){
        if(shield === true){
            noFill();
            stroke(225, 255, 0);
            ellipse(shipx,shipy,(r/2) * 5,(r/2) * 5);
        }
        stroke(0, 0, 0);
        fill(0, 255, 0);
        ellipse(shipx,shipy,r/4,r);
        fill(120, 120, 120);
        ellipse(shipx,shipy,r,r/5);
        fill(120, 120, 120);
        ellipse(shipx,shipy,r/2,r/2);
        fill(0, 255, 0);
        ellipse(shipx - r/3,shipy,r/3/2,r/1.5);
        fill(0, 255, 0);
        ellipse(shipx + r/3,shipy,r/3/2,r/1.5);
    }                                    //draws ship3
    fill(255, 255, 255);
    for(var i = 0; i < bulletx.length; i ++){
        if(prime[i] === true){
            fill(255, 255, 255);
            noStroke();
            rect(bulletx[i],bullety[i],r2*2,r2*2);
        }
    }           //where the bullet is drawn
    for(var i = 0; i < bulletx.length; i ++){
        if(bullety[i] < 0 - r/2){
            prime[i] = false;
        }
        bullety[i] -= 3;
    }           //where the bullet is moved
    for(var i = index; i < alienx.length; i ++){
        if(alieny[i] > 400){
            live[i] = false;
        }
        alieny[i] += 1;
}        //there the alien is moved
    for(var i = index; i < alienx.length; i ++){
        if(live[i] === true){
            if(alient[i] === 1){
                stroke(255, 255, 255);
                fill(0, 0, 0);
                var d = r3[i] * 2;
                fill(255, 0, 255);
                ellipse(alienx[i],alieny[i],d,d/2.5);
                fill(255, 255, 255);
                ellipse(alienx[i],alieny[i],d/2,d/3);
                fill(255, 0, 255);
                ellipse(alienx[i],alieny[i] - d/3,d/3,d/3);
                ellipse(alienx[i],alieny[i] + d/3,d/3,d/3);
            }
            if(alient[i] === 2){
                stroke(0, 115, 255);
                fill(0, 0, 0);
                var d = r3[i] * 2;
                ellipse(alienx[i],alieny[i],d,d);
                ellipse(alienx[i],alieny[i],d / 5,d);
                ellipse(alienx[i],alieny[i],d,d / 5);
                ellipse(alienx[i],alieny[i],d/5,d/5);
            }
            if(alient[i] === 3){
                var d = r3[i] * 2;
                image(getImage("cute/Heart"),alienx[i] - d/1.8,alieny[i] - d,30,50);
            }
            if(alient[i] === 4){
                var d = r3[i] * 2;
                image(getImage("cute/GemBlue"),alienx[i] - d/2,alieny[i] - d,30,40);
    }
            if(alient[i] === 5){
                stroke(0, 0, 0);
                fill(64, 255, 0);
                ellipse(alienx[i],alieny[i],(r3[i] *2),(r3[i]*2));
                fill(0, 85, 255);
                ellipse(alienx[i],alieny[i],r3[i],r3[i]);
                fill(51, 255, 0);
                ellipse(alienx[i],alieny[i],r3[i]/3,(r3[i]*2)/3);
                fill(60, 0, 255);
                ellipse(alienx[i],alieny[i],r3[i]/4,(r3[i]*2)/5);
                fill(0, 43, 255);
                ellipse(alienx[i] - r3[i],alieny[i],(r3[i]*2)/5,(r3[i]*2)/5);
                ellipse(alienx[i] + r3[i],alieny[i],(r3[i]*2)/5,(r3[i]*2)/5);
            }
            if(alient[i] === 6){
                var d = r3[i] * 2;
                image(getImage("cute/GemOrange"),alienx[i] - d/2,alieny[i] - d,30,40);
            }
        }


    }        //where the alien is drawn
    if(right){
        shipx += move;
    }                                          //moving ship to the right
    if(left){
        shipx -= move;
    }                                           //moves ship up
    if(up){
        shipy -= move;
    }                                             //moves ship down
    if(down){
        shipy += move;
    }                                           //moving ship up
    if(shipx + r > 400){
        shipx = 400 - r;
    }                                //keeps ship in bounds
    if(shipx - r < 0){
        shipx = 0 + r;
    }                                  //keeps ship in bounds
    if(shipy - r < 0){
        shipy = 0 + r;
    }
    if(shipy + r > 400){
        shipy = 400 - r;
    }                                //keeps ship in bounds
    for(var i = 0; i < bulletx.length; i ++){
        if(prime[i] === true){
            for(var j = index; j < alienx.length; j ++){
                if(sqrt(sq(alienx[j] - bulletx[i]) + sq(alieny[j] - bullety[i])) < (r2 + r3[j]) && live[j] === true && prime[i] === true){
                    alienh[j] -= 2;
                    if(alienh[j] < 0){
                        live[j] = false;

                        temp = live[j];
                        live[j] = live[index];
                        live[index] = live[j];

                        temp = alienx[j];
                        alienx[j] = alienx[index];
                        alienx[index] = alienx[j];

                        temp = r3[j];
                        r3[j] = r3[index];
                        r3[index] = r3[j];

                        temp = aliena[j];
                        aliena[j] = aliena[index];
                        aliena[index] = aliena[j];

                        temp = alient[j];
                        alient[j] = alient[index];
                        alienx[index] = alient[j];

                        temp = juice[j];
                        juice[j] = juice[index];
                        juice[index] = juice[j];

                        temp = alieny[j];
                        alieny[j] = alieny[index];
                        alieny[index] = alieny[j];

                        temp = alienh[j];
                        alienh[j] = alienh[index];
                        alienh[index] = alienh[j];

                        index+=1;
                        playSound(getSound("retro/boom2"));
                        xp += juice[j];

                    }
                    prime[i] = false;
                    playSound(getSound("retro/laser2"));

                }
            }
        }
    }           //checks bullet Vs. alien
    for(var j = index; j < alienx.length; j ++){
        if(sqrt(sq(alienx[j] - shipx) + sq(alieny[j] - shipy)) < (r2 + r) && live[j] === true ){
            if(alient[j] === 1){
                if(shield === false){
                    live[j] = false;
                    health -= aliena[j];
                    playSound(getSound("rpg/battle-magic"));

                }
                if(shield === true){
                    shield = false;
                    live[j] = false;
                    playSound(getSound("retro/jump1"));

                }

            }
            if(alient[j] === 2){
                if(shield === false){
                    live[j] = false;
                    health -= aliena[j];
                    playSound(getSound("rpg/battle-magic"));
                }
                if( shield === true){
                    shield = false;
                    live[j] = false;
                    playSound(getSound("retro/jump1"));

                }

            }

            if(alient[j] === 3 ){
                if(health < 14){
                    health += 1;
                    playSound(getSound("rpg/battle-spell"));

                }
                live[j] = false;
            }
            if(alient[j] === 4){
                shield = true;
                playSound(getSound("retro/thruster-long"));
                live[j] = false;
            }
            if(alient[j] === 5){
                if(shield === false){
                    live[j] = false;
                    health -= aliena[j];
                    playSound(getSound("rpg/battle-magic"));
                }
                if( shield === true){
                    shield = false;
                    live[j] = false;
                    playSound(getSound("retro/jump1"));

                }

            }
            if(alient[j] === 6){
                playSound(getSound("retro/whistle1"));
                for(var i = 0; i < 40; i ++){
                    bulletx.push(10*i + 5);
                    bullety.push(400);
                    prime.push(true);
                }
                live[j] = false;

            }
        }
    }        //checking is alien is in ship
};
var mousePressed = function(){

};
var keyPressed = function(){
    if(keyCode === RIGHT){
        right = true;
    } //sets movemnt to true
    if(keyCode === LEFT){
        left = true;
    }  //sets movemnt to true
};
var keyReleased  = function(){
    if(keyCode === RIGHT){
        right = false;
    }   //sets movemnt to false
    if(keyCode === LEFT){
        left = false;
    }    //sets movemnt to false
    if(keyCode === SHIFT){
        if(xp > 0){
            xp -= 10;
        }
        if(shipt === 1){
            bulletx.push(shipx);
            playSound(getSound("retro/laser1"));
            bullety.push(shipy - r);
            prime.push(true);
        }
        if(shipt === 2){
            playSound(getSound("retro/laser2"));

            bulletx.push(shipx - r/2.5);
            bullety.push(shipy - r/2);
            prime.push(true);

            bulletx.push(shipx + r / 2.5);
            bullety.push(shipy - r/2);
            prime.push(true);
        }
        if(shipt === 3){
            playSound(getSound("retro/laser3"));
            bulletx.push(shipx);
            bullety.push(shipy - r/2);
            prime.push(true);

            bulletx.push(shipx - r/2.5);
            bullety.push(shipy - r/2);
            prime.push(true);

            bulletx.push(shipx + r / 2.5);
            bullety.push(shipy - r/2);
            prime.push(true);
        }
    }   //makes bullet
};
