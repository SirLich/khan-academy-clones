//https://www.khanacademy.org/computer-programming/tdnew/5729215043076096

//use ENTER. for fun!
var bx = [];
var by = [];
var bt = [];
var bd = [];
var bl = [];
var ba = [];
var bs = [];
var bxt = [];
var byt = [];
var byo = [];
var bxo = [];

var zx = [];
var zy = [];
var zs = [];
var zd = [];
var zt = [];
var zh = [];
var zder = [];
var zc = [];
var zi = [];
var zl = [];

var tx = [];
var tt = [];
var ty = [];
var td = [];
var te = [];
var tc = [];
var tr = [];


var bestnum = 0;
var bestdis = 1000;
var cash = 100;
var n = 499;
var spawn = 500;
var next_der = ["right","up","right","down"];
var count = [385,133,310,127];
var bullets_alive = 9;
var wave = function(num,s,h){
    for(var i = 0; i < num; i ++){
        n = 0;
        zx.push(30);
        zy.push(-30-(i*20));
        zs.push(s);
        zd.push(10);
        zt.push(1);
        zh.push(h);
        zder.push("down");
        zc.push(0 - (i*20));
        zi.push(0);
        zl.push(true);
    }
};
var run_game = function(){
    bullets_alive = 0;
    for(var i = 0; i < bl.length;i ++){
        if(bl[i] === true){
            bullets_alive += 1;
        }
    }
    if(bx.length >= 2){
        println(bx.length + ":" + bx[1] + " " +  by[1] + " " + bl[1] + " " + bt[1]);
    }
    {
    background(22, 112, 0);
    fill(143, 99, 11);
    noStroke();
    rect(15,0,30,370);
    rect(15,340,150,30);
    rect(150,30,30,340);
    rect(150,30,150,30);
    rect(280,30,30,400);
    fill(161, 161, 161);
    stroke(0, 0, 0);
} //Drawing Graphics
    if(n > spawn){
        wave(30,2,3);
    }                                        //Making Zombies
    for(var i = 0; i < zx.length; i ++){
        if(zl[i] === true){
            fill(255, 191, 135);
            ellipse(zx[i],zy[i],zd[i],zd[i]);
        }

        if(zder[i] === "down"){
            zy[i] += zs[i];
        }
        if(zder[i] === "up"){
            zy[i] -= zs[i];
        }
        if(zder[i] === "left"){
            zx[i] -= zs[i];
        }
        if(zder[i] === "right"){
            zx[i] += zs[i];
        }
        if(zc[i] > count[zi[i]]){
            zc[i] = 0;
            zder[i] = next_der[zi[i]];
            zi[i] += 1;
        }
        if(zy[i] > 400){
            zl[i] = false;
        }
        zc[i] += zs[i];
    }                  //Zombies
    for(var i = 0; i < tt.length; i ++){
        if(te[i] === true){
            tx[i] = mouseX;
            ty[i] = mouseY;
            noFill();
            stroke(255, 0, 0);
            ellipse(tx[i],ty[i],tr[i],tr[i]);
            stroke(0, 0, 0);
            fill(110, 110, 110);
        }
        fill(110, 110, 110);
        ellipse(tx[i],ty[i],td[i],td[i]);
    }                  //tower edit
    for(var i = 0; i < bx.length; i ++){
        if(bl[i] === true){
            for(var j = 0; j < zx.length; j ++){
                if(sqrt(sq(zx[j] - bx[i]) + sq(zy[j] - by[i])) < (bd[i] + zd[j]) && zl[j] === true && bl[i] === true){
                    zh[j] -= ba[i];
                    if(bt[i] === 1){
                        bl[i] = false;
                        playSound(getSound("rpg/hit-splat"));
                    }



                }
            }
        }

    }                  //zombie/bullet collisions
    for(var i = 0; i < tc.length; i ++){
        if(te[i] === false){
            tc[i] += 1;
        }
        if(tt[i] === 1 && te[i] === false){
            if(tc[i] > 50){
                for(var j = 0; j < zx.length; j ++){
                    if(sqrt(sq(zx[j] - tx[i]) + sq(zy[j] - ty[i])) < tr[i] && zl[j] === true){
                        if(sqrt(sq(zx[j] - tx[i]) + sq(zy[j] - ty[i])) < bestdis){
                            bestdis = sqrt(sq(zx[j] - tx[i]) + sq(zy[j] - ty[i]));
                            bestnum = j;
                        }
                    }
                    tc[i] = 0;
                }
                bx.push(tx[i]);
                by.push(ty[i]);
                bl.push(true);
                bt.push(1);
                ba.push(10);
                bs.push(5);
                bd.push(2);
                bxt.push(zx[bestnum]);
                byt.push(zy[bestnum]);
                byo.push(ty[i]);
                bxo.push(tx[i]);
                bestdis = 10000;
                bestnum = 10000;
            }
        }
        if(tt[i] === 2&& te[i] === false){
            if(tc[i] > 5){
                for(var j = 0; j < zx.length; j ++){
                    if(sqrt(sq(zx[j] - tx[i]) + sq(zy[j] - ty[i])) < tr[i] && zl[j] === true){
                        if(sqrt(sq(zx[j] - tx[i]) + sq(zy[j] - ty[i])) < bestdis){
                            bestdis = sqrt(sq(zx[j] - tx[i]) + sq(zy[j] - ty[i]));
                            bestnum = j;
                        }
                    }
                    tc[i] = 0;
                }
                bx.push(tx[i]);
                by.push(ty[i]);
                bl.push(true);
                bs.push(3);
                bd.push(2);
                ba.push(1);
                bxt.push(zx[bestnum]);
                byt.push(zy[bestnum]);
                byo.push(ty[i]);
                bt.push(1);
                bxo.push(tx[i]);
                bestdis = 10000;
                bestnum = 10000;
            }
        }
        if(tt[i] === 3&& te[i] === false){
            if(tc[i] > 50){
                for(var j = 0; j < zx.length; j ++){
                    if(sqrt(sq(zx[j] - tx[i]) + sq(zy[j] - ty[i])) < tr[i] && zl[j] === true){
                        if(sqrt(sq(zx[j] - tx[i]) + sq(zy[j] - ty[i])) < bestdis){
                            bestdis = sqrt(sq(zx[j] - tx[i]) + sq(zy[j] - ty[i]));
                            bestnum = j;
                        }
                    }
                    tc[i] = 0;
                }
                for(var j = 0; j < 5; j ++){
                    bx.push(tx[i]);
                    by.push(ty[i]);
                    bl.push(true);
                    ba.push(100);
                    bs.push(random(3,5));
                    bd.push(2);
                    bt.push(1);
                    bxt.push(random(zx[bestnum] - 20,zx[bestnum] + 20));
                    byt.push(random(zy[bestnum],zy[bestnum]));
                    byo.push(ty[i]);
                    bxo.push(tx[i]);
                }
                bestdis = 10000;
                bestnum = 10000;

            }
        }
        if(tt[i] === 4&& te[i] === false){
            if(tc[i] > 50){
                for(var j = 0; j < zx.length; j ++){
                    if(sqrt(sq(zx[j] - tx[i]) + sq(zy[j] - ty[i])) < tr[i] && zl[j] === true){
                        if(sqrt(sq(zx[j] - tx[i]) + sq(zy[j] - ty[i])) < bestdis){
                            bestdis = sqrt(sq(zx[j] - tx[i]) + sq(zy[j] - ty[i]));
                            bestnum = j;
                        }
                    }
                    tc[i] = 0;
                }
                bt.push(1);
                bx.push(tx[i]);
                by.push(ty[i]);
                bl.push(true);
                ba.push(10);
                bs.push(15);
                bd.push(2);
                bxt.push(zx[bestnum]);
                byt.push(zy[bestnum]);
                byo.push(ty[i]);
                bxo.push(tx[i]);
                bestdis = 10000;
                bestnum = 10000;
            }
        }
        if(tt[i] === 5 && te[i] === false){
            if(tc[i] < -3){
                bt.push(2);
                bx.push(tx[i]);
                by.push(ty[i]);
                bl.push(true);
                ba.push(0.1);
                bs.push(0.0000001);
                bd.push(50);
                bxt.push(zx[bestnum]);
                byt.push(zy[bestnum]);
                byo.push(ty[i]);
                bxo.push(tx[i]);
                bestdis = 10000;
                bestnum = 10000;
            }

        }
    }                  //makes the bullets
    for(var i = 0; i < bx.length; i ++){
        if(bt[i] === 1){
            var f = bs[i]/sqrt(sq(bxo[i] - bxt[i]) + sq(byo[i] - byt[i]));
            bx[i] -= (bxo[i] - bxt[i] ) * f;
            by[i] -= (byo[i] - byt[i] ) * f;
        }

    }                  //Moves the Bullets
    for(var i = 0; i < bx.length; i ++){
        fill(0, 0, 0);
        if(bl[i] === true && bt[i] === 1){
            fill(0, 0, 0);
            ellipse(bx[i],by[i],bd[i],bd[i]);
        }
        else if(bl[i] === true && bt[i] === 2){
            fill(255, 0, 0,100);
            noStroke();
            ellipse(bx[i],by[i],bd[i]*2,bd[i]*2);
            stroke(0, 0, 0);
        }
        else if(true){
            fill(255, 234, 0);
            ellipse(bx[i],by[i],bd[i]*15,bd[i]*15);
        }


    }                  //draws bullets
    for(var i = 0; i < zx.length; i ++){
        if(zh[i] < 0){
            zl[i] = false;
        }
    }                  //kills zombies
    for(var i = bx.length - 1; i >= 0; i --){
        if(bx[i] > 400 || bx[i] < 0 || by[i] > 400 || by[i] < 0){
            bl[i] = false;
        }
        if(bl[i] === false){
            bx.splice(i,1);
            by.splice(i,1);
            bt.splice(i,1);
            bd.splice(i,1);
            bl.splice(i,1);
            ba.splice(i,1);
            bs.splice(i,1);
            byt.splice(i,1);
            bxt.splice(i,1);
            bxo.splice(i,1);
            byo.splice(i,1);
        }
    }             //lag clear
    n+=1;
};
var upgrades = function(){
    {
    background(171, 110, 50);
    fill(115, 59, 0);
    ellipse(50,50,30,30);
    ellipse(100,50,30,30);
    ellipse(50,100,30,30);
    ellipse(100,100,30,30);
    ellipse(50,150,30,30);
    ellipse(100,150,30,30);
    ellipse(50,200,30,30);
    ellipse(100,200,30,30);
    ellipse(50,250,30,30);
    ellipse(100,250,30,30);
    fill(255, 255, 255);
    for(var i = 0; i < 5; i ++){
        ellipse(150 + 50*i,50,20,20);
    }
    for(var i = 0; i < 5; i ++){
        ellipse(150 + 50*i,100,20,20);
    }
    for(var i = 0; i < 5; i ++){
        ellipse(150 + 50*i,150,20,20);
    }
    for(var i = 0; i < 5; i ++){
        ellipse(150 + 50*i,200,20,20);
    }
    for(var i = 0; i < 5; i ++){
        ellipse(150 + 50*i,250,20,20);
    }
    }
    if(sqrt(sq(mouseX - 50) + sq(mouseY - 50)) < 20){
        fill(189, 113, 0);
        ellipse(50,50,30,30);
    }
    if(sqrt(sq(mouseX - 50) + sq(mouseY - 100)) < 20){
        fill(189, 113, 0);
        ellipse(50,100,30,30);
    }
    if(sqrt(sq(mouseX - 100) + sq(mouseY - 50)) < 20){
        fill(189, 113, 0);
        ellipse(100,50,30,30);
    }
    if(sqrt(sq(mouseX - 100) + sq(mouseY - 100)) < 20){
        fill(189, 113, 0);
        ellipse(100,100,30,30);
    }
    if(sqrt(sq(mouseX - 50) + sq(mouseY - 150)) < 20){
        fill(189, 113, 0);
        ellipse(50,150,30,30);
    }
    if(sqrt(sq(mouseX - 100) + sq(mouseY - 150)) < 20){
        fill(189, 113, 0);
        ellipse(100,150,30,30);
    }
    if(sqrt(sq(mouseX - 50) + sq(mouseY - 200)) < 20){
        fill(189, 113, 0);
        ellipse(50,200,30,30);
    }
    if(sqrt(sq(mouseX - 100) + sq(mouseY - 200)) < 20){
        fill(189, 113, 0);
        ellipse(100,200,30,30);
    }
    if(sqrt(sq(mouseX - 50) + sq(mouseY - 250)) < 20){
        fill(189, 113, 0);
        ellipse(50,250,30,30);
    }
    if(sqrt(sq(mouseX - 100) + sq(mouseY - 250)) < 20){
        fill(189, 113, 0);
        ellipse(100,250,30,30);
    }
};
var draw = function() {
    draw = run_game;
};
keyPressed = function(){
    if(keyCode === ENTER && draw !== upgrades){
        draw = upgrades;
    }
    else{
        draw = run_game;
    }
};
mouseClicked = function(){
    if(draw === upgrades){
        if(sqrt(sq(mouseX - 50) + sq(mouseY - 50)) < 20){
            tx.push(mouseX);
            ty.push(mouseY);
            tt.push(1);
            td.push(20);
            te.push(true);
            tr.push(150);
            tc.push(1);
            draw = run_game;
        }
        if(sqrt(sq(mouseX - 50) + sq(mouseY - 100)) < 20){
            tx.push(mouseX);
            ty.push(mouseY);
            tt.push(2);
            td.push(20);
            te.push(true);
            tr.push(100);
            tc.push(1);
            draw = run_game;
        }
        if(sqrt(sq(mouseX - 50) + sq(mouseY - 150)) < 20){
            tx.push(mouseX);
            ty.push(mouseY);
            tt.push(3);
            td.push(20);
            te.push(true);
            tc.push(1);
            tr.push(75);
            draw = run_game;
        }
        if(sqrt(sq(mouseX - 50) + sq(mouseY - 200)) < 20){
            tx.push(mouseX);
            ty.push(mouseY);
            tt.push(4);
            td.push(20);
            te.push(true);
            tc.push(1);
            tr.push(300);
            draw = run_game;
        }
        if(sqrt(sq(mouseX - 50) + sq(mouseY - 250)) < 20){
            tx.push(mouseX);
            ty.push(mouseY);
            tt.push(5);
            tr.push(100);
            td.push(20);
            te.push(true);
            tc.push(-5);
            draw = run_game;
        }

    }
    else{
        for(var i = 0; i < te.length; i ++){
            te[i] = false;
        }
    }
};
