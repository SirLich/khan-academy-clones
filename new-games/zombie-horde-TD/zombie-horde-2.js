/**
 * Make zombie man colisions
 * Make upgrades
 *     ()make three shot
 *     ()make tower placements                    DONE
 *     ()make tower upgrades
 * Make better you_lose screan
 * Fix the glitch                                 DONE
 * make Max_Bullets for towers                              DONE
 * make max_bullets
 * Make lazer cannon?
 * Make blood
 * Make better Zombie
 * Add sound (better)                                DONE
 * Make tower Zombie colisons?
 * Fix Moving Up Glitch
 * Design health bar                                  DONE
 * Add health to Zombies                             DONE
 * Add barbed wire
 * design better man
 * design better tower
 * make ASWD movement
**/


var cut = false;
var cash = 10000000;
var spawn = 0;
var shipx = 200;
var shipy = 200;
var shipr = 20;
var right = false;
var left = false;
var up = false;
var down = false;
var f = 0;
var count = 0;
var health = 1000;
var max_health = 1000;
var attak = 3;

var zombie_health = [1,2,2.3,3,5,10];
var zombie_size = [20,19,18,17,15,10];
var zombie_attak = [0.3,0.5,1,1.5,2,5];
var spawn_rate = [100,80,75,50,30,20];

var tower_limet = 1;
var tower_limet_count = 0;

var income = 20;
var bullet_size = 1;
var bullet_acur = 10;

var wave = 0;
var wave_count = 0;
var wave_check = [10,20,50,50,100];


var zx = [];
var zy = [];
var zs = [];
var zr = [];
var zl = [];
var zu = [];
var zh = [];

var bx = [];
var by = [];
var bs = [];
var br = [];
var bl = [];
var bxt = [];
var byt = [];
var byo = [];
var bxo = [];
var bt = []; //bt 1 = man. bt 2 = tower

var tx = [];
var ty = [];
var tc = [];
var te = [];

var upgrade1cost = [40,150,300,500,1000,2000,5000];
var upgrade1info = ["Buy tower #1. It will be placed randomly.","Buy tower #2. It will be placed randomly.","Buy tower #3. It will be placed randomly.","Buy tower #4. It will be placed randomly.","Buy tower #5. It will be placed randomly.","Buy tower #6. It will be placed randomly.","Buy tower #7. It will be placed randomly.",];
var upgrade1num = 0;

var tower_attak = [1,1.2,1.5,2,3,3.5,5,100];
var upgrade2cost = [40,150,300,500,1000,2000,5000];
var upgrade2info = ["Increase tower damage from 1 to 1.2","Increase tower damage from 1.2 to 1.5","Increase tower damage from 1.5 to 2","Increase tower damage from 2 to 3","Increase tower damage from 3 to 3.5","Increase tower damage from 3.5 to 5","Increase tower damage from 5 to 100"];
var upgrade2num = 0;


var tower_bullet_size = [1,1.1,1.2,1.3,1.5,1.9,2.2,5];
var upgrade3cost = [40,150,300,500,1000,2000,5000];
var upgrade3info = ["Increase the bullet size the tower fires","Increase the bullet size the tower fires","Increase the bullet size the tower fires","Increase the bullet size the tower fires","Increase the bullet size the tower fires","Increase the bullet size the tower fires","Increase the bullet size the tower fires"];
var upgrade3num = 0;

var tower_acur = 10;
var upgrade4cost = [40,150,300,500,1000,2000,5000];
var upgrade4info = ["Increase the bullet acuracy the tower fires","Increase the bullet acuracy the tower fires","Increase the bullet acuracy the tower fires","Increase the bullet acuracy the tower fires","Increase the bullet acuracy the tower fires","Increase the bullet acuracy the tower fires","Increase the bullet acuracy the tower fires"];
var upgrade4num = 0;


var edit = function(){
    background(6, 115, 0);
    for(var i = 0; i < tx.length; i ++){
        fill(138, 138, 138);
        ellipse(tx[i],ty[i],20,20);
    }                //Draws towers
    fill(115, 74, 13);
    rect(0,350,400,100);
    for(var i = 0; i < tx.length; i ++){
        if(te[i] === true){
            tx[i] = mouseX;
            ty[i] = mouseY;
        }
    }
};
var you_lose = function(){
    background(46, 0, 199);
};
var upgrades1 = function(){
    background(181, 181, 181);
    fill(138, 138, 138);
    rect(20,20,360,360);
};
var upgrades2 = function(){
    println(tower_bullet_size[upgrade3num]);
    background(107, 107, 107);
    fill(140, 140, 140);
    rect(5,300,390,95);
    ellipse(50,50,40,40);
    ellipse(50,100,40,40);
    ellipse(50,150,40,40);
    ellipse(50,200,40,40);
    ellipse(50,250,40,40);
    for(var i = 100; i < 300; i += 30){
        ellipse(i,50,20,20);
        ellipse(i,100,20,20);
        ellipse(i,150,20,20);
        ellipse(i,200,20,20);
        ellipse(i,250,20,20);
    }
    for(var i = 0; i < upgrade1num; i ++){
        fill(0, 0, 0);
        ellipse((i * 30) + 100,50,20,20);
        fill(140, 140, 140);
    }
    for(var i = 0; i < upgrade2num; i ++){
        fill(0, 0, 0);
        ellipse((i * 30) + 100,100,20,20);
        fill(140, 140, 140);
    }
    for(var i = 0; i < upgrade3num; i ++){
        fill(0, 0, 0);
        ellipse((i * 30) + 100,150,20,20);
        fill(140, 140, 140);
    }
    for(var i = 0; i < upgrade4num; i ++){
        fill(0, 0, 0);
        ellipse((i * 30) + 100,200,20,20);
        fill(140, 140, 140);
    }

    if(sqrt(sq(mouseX - 50) + sq(mouseY - 50)) < 20){
        fill(0, 0, 0);
        textSize(15);
        text("Cost: " + upgrade1cost[upgrade1num] + "   Money: " + cash,20,330);
        text(upgrade1info[upgrade1num],20,350);
    }
    if(sqrt(sq(mouseX - 50) + sq(mouseY - 100)) < 20){
        fill(0, 0, 0);
        textSize(15);
        text("Cost: " + upgrade2cost[upgrade2num] + "   Money: " + cash,20,330);
        text(upgrade2info[upgrade2num],20,350);
    }
    if(sqrt(sq(mouseX - 50) + sq(mouseY - 150)) < 20){
        fill(0, 0, 0);
        textSize(15);
        text("Cost: " + upgrade3cost[upgrade3num] + "   Money: " + cash,20,330);
        text(upgrade3info[upgrade3num],20,350);
    }
    if(sqrt(sq(mouseX - 50) + sq(mouseY - 200)) < 20){
        fill(0, 0, 0);
        textSize(15);
        text("Cost: " + upgrade4cost[upgrade4num] + "   Money: " + cash,20,330);
        text(upgrade4info[upgrade4num],20,350);
    }
};
var choose = function(){
    background(181, 181, 181);
    fill(138, 138, 138);
    rect(20,20,360,160);
    rect(20,220,360,160);
    textSize(40);
    fill(0, 0, 0);
    text("Tower Upgrades",70,300);
    text("Other Upgrades",70,100);
};
var run_game = function() {
    if(health < 0){
        draw = you_lose;
    }
    for(var i = 0; i < bl.length; i ++){
        if(bl[i] === true){
            count += 1;
        }
    }
    count = 0;
    background(6, 115, 0);
    image(getImage("space/healthheart"),30,30,60,60);
    var spit = 60/max_health;
    fill(6, 115, 0);
    noStroke();
    rect(0,30 - spit * health,120,60);
    stroke(0, 0, 0);
    fill(49, 61, 30);
    ellipse(shipx,shipy,shipr,shipr);
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
    for(var i = 0; i < zx.length; i ++){
        if(zl[i] === true && zu[i] === false){
            if(zh[i] <= zombie_health[wave]){
                fill(61, 217, 0);
            }
            if(zh[i] < (zombie_health[wave]/3) * 2){
                fill(255, 140, 0);
            }
            if(zh[i] < zombie_health[wave]/3){
                fill(255, 0, 0);
            }
            rect(zx[i] - zr[i]/2,zy[i] - zr[i],(zr[i]/zombie_health[wave]) *zh[i],zr[i]/4);
            fill(107, 107, 107);
            ellipse(zx[i],zy[i] + zr[i] - zr[i]/3,zr[i],zr[i]/4);
            ellipse(zx[i],zy[i] + zr[i] - zr[i] / 2,zr[i]/3,zr[i] * 1.5);
            ellipse(zx[i],zy[i],zr[i],zr[i]);
            ellipse(zx[i] + zr[i]/5,zy[i] + zr[i] + zr[i]/3,zr[i]/4,zr[i]/2);
            ellipse(zx[i] - zr[i]/5,zy[i] + zr[i] + zr[i]/3,zr[i]/4,zr[i]/2);

        }
    }                //Draws the Zombie swarm
    for(var i = 0; i < bx.length; i ++){
        fill(0, 0, 0);
        if(bl[i] === true){
            ellipse(bx[i],by[i],br[i],br[i]);
        }
    }                //Draws the Bullets
    for(var i = 0; i < tx.length; i ++){
        fill(138, 138, 138);
        ellipse(tx[i],ty[i],20,20);
    }                //Draws towers
    for(var i = 0; i < tc.length; i ++){
        tc[i] += 1;
    }                //Counting tower counters
    for(var i = 0; i < tc.length; i ++){
        if(tc[i] > 2){
            for(var j = 0; j < zx.length; j ++){
                if(sqrt(sq(zx[j] - tx[i]) + sq(zy[j] - ty[i])) < 100 && zl[j] === true && cut === true){
                    bx.push(tx[i]);
                    by.push(ty[i]);
                    bl.push(true);
                    bs.push(3);
                    br.push(tower_bullet_size[upgrade3num]);
                    bxt.push(random(zx[j] - tower_acur,zx[j] + tower_acur));
                    byt.push(random(zy[j] - tower_acur,zy[j] + tower_acur));
                    byo.push(ty[i]);
                    bxo.push(tx[i]);
                    bt.push(2);
                    if(tower_limet > tower_limet_count){

                    }
                }
                tc[i] = 0;
            }
            cut = true;

        }
    }                //tower bullets
    if(spawn > spawn_rate[wave]){
        zr.push(zombie_size[wave]);
        zx.push(random(0 + zr[i],400 - zr[i]));
        zy.push(random(-200,-300));
        zs.push(random(0.5,1));
        zl.push(true);
        zu.push(false);
        zh.push(zombie_health[wave]);
        spawn = 0;
    }                       //Makes the Zombie swarm
    for(var i = 0; i < zx.length; i ++){
        zy[i] += zs[i];
        if(zy[i] > 350 - zr[i] - zr[i]/2 && zl[i] === true){
            zy[i] = 350 - zr[i]- zr[i]/2;
            health -= zombie_attak[wave];
        }
    }                //moves the Zombie swarm
    for(var i = 0; i < bx.length; i ++){
        f = 5/sqrt(sq(bxo[i] - bxt[i]) + sq(byo[i] - byt[i]));
        bx[i] -= (bxo[i] - bxt[i] ) * f;
        by[i] -= (byo[i] - byt[i] ) * f;
        if(bx[i] > 400 || bx[i] < 0 || by[i] > 400 || by[i] < 0){
            bl[i] = false;
        }
    }                //Moves the Bullets
    if(shipx - shipr < 0){
        shipx = 0 + shipr;
    }                              //keeps ship in bounds
    if(shipx + shipr > 400){
        shipx = 400 - shipr;
    }                            //keeps ship in bounds
    if(shipy + shipr > 350){
        shipy = 350 - shipr;
    }                            //keeps ship in bounds
    if(shipy - shipr < 0){
        shipy = 0 + shipr;
    }                              //keeps ship in bounds
    for(var i = 0; i < bx.length; i ++){
        if(bl[i] === true){
            for(var j = 0; j < zx.length; j ++){
                if(sqrt(sq(zx[j] - bx[i]) + sq(zy[j] - by[i])) < (br[i]/2 + zr[j]/2) && zl[j] === true && bl[i] === true && zu[j] === false){
                    if(bt[i] === 1){
                        zh[j] -= attak;
                        bl[i] = false;
                    }
                    if(bt[i] === 2){
                        zh[j] -= tower_attak[upgrade2num];
                        bl[i] = false;
                    }
                    playSound(getSound("rpg/hit-splat"));

                }
            }
        }
    }                //checks bullets against zombies.
    for(var i = 0; i < zx.length; i ++){
        if(zh[i] < 0 && zl[i] === true){
            zl[i] = false;
            cash += income;
            wave_count += 1;
        }
    }                //kills zombies
    fill(115, 74, 13);
    rect(0,350,400,100);
    if(health < max_health){
        health += 0.5;
    }
    if(wave_count > wave_check[wave]){
        wave_count = 0;
        wave += 1;
    }
    spawn += 1;
    println(wave);
};
draw = run_game;
var mouseClicked = function(){
    if(draw === edit){
        for(var i = 0; i < tx.length; i ++){
            te[i] = false;
        }
        draw = run_game;
    }
    if(draw === run_game){
        playSound(getSound("retro/boom1"));
        bx.push(random(shipx - bullet_acur,shipx + bullet_acur));
        by.push(random(shipy - bullet_acur,shipy + bullet_acur));
        bl.push(true);
        bs.push(3);
        br.push(bullet_size);
        bxt.push(mouseX);
        byt.push(mouseY);
        byo.push(shipy);
        bxo.push(shipx);
        bt.push(1);
    }
    if(draw === choose){
        if(mouseY < 200){
            draw = upgrades1;
        }
        if(mouseY > 200){
            draw = upgrades2;
        }
    }//choose draw
    if(draw === upgrades2){
        if(sqrt(sq(mouseX - 50) + sq(mouseY - 50)) < 20 && cash >= upgrade1cost[upgrade1num]){
                cash -= upgrade1cost[upgrade1num];
                upgrade1num += 1;
                tx.push(random(50,350));
                ty.push(random(50,300));
                tc.push(100);
                te.push(true);
                draw = edit;
        }
        if(sqrt(sq(mouseX - 50) + sq(mouseY - 100)) < 20 && cash >= upgrade2cost[upgrade2num]){
                cash -= upgrade2cost[upgrade2num];
                upgrade2num += 1;
        }
        if(sqrt(sq(mouseX - 50) + sq(mouseY - 150)) < 20 && cash >= upgrade3cost[upgrade3num]){
                cash -= upgrade3cost[upgrade3num];
                upgrade3num += 1;
        }
        if(sqrt(sq(mouseX - 50) + sq(mouseY - 200)) < 20 && cash >= upgrade4cost[upgrade4num] ){
                cash -= upgrade4cost[upgrade4num];
                tower_acur -=1;
                upgrade4num += 1;
        }
    }
};
var keyPressed = function(){
    if(draw === run_game){
        if(keyCode === 68){
            right = true;
        }                              //sets movemnt to true
        if(keyCode === 65){
            left = true;
        }                               //sets movemnt to true
        if(keyCode === 87){
            up = true;
        }                                 //sets movemnt to true
        if(keyCode === 83){
            down = true;
        }                               //sets movemnt to true
        }
    if(keyCode === ENTER){
        if(draw === run_game){
                draw = choose;
            }
        else{
                draw = run_game;
            }
    }
};
var keyReleased  = function(){
    if(draw === run_game){
        if(keyCode === 68){
        right = false;
        } //sets movemnt to false
        if(keyCode === 65){
            left = false;
        }  //sets movemnt to false
        if(keyCode === 87){
            up = false;
        }    //sets movemnt to false
        if(keyCode === 83){
            down = false;
        }  //sets movemnt to false
    }

};
