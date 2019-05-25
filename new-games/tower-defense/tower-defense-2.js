
var b = [];
var bullet = function(t, a, d, s, x, y, tx, ty){
    var b = new Object(1);
    b.t = t;
    b.l = true;
    b.a = a;
    b.d = d;
    b.x = x;
    b.y = y;
    var f = s/sqrt(sq(x - tx) + sq(y - ty));
    b.sx = -f*(x-tx);
    b.sy = -f*(y-ty);
    //println(b.length + ":" + b.x + " " +  b.y + " " + b.sx + " " + b.sy);
    return b;
};
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
var zmh = [];

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
var n = 999;
var spawn = 1000;
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
        zmh.push(h);
    }
};
var run_game = function(){
    bullets_alive = 0;
    for(var i = 0; i < b.length;i ++){
        if(b[i].l === true){
            bullets_alive += 1;
        }
    }
    if(b.length >= 2){
        println(b.length + ":" + b[1].x + " " +  b[1].y + " " + b[1].l + " " + b[1].t);
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
        wave(10,0.5,3);
    }                                        //Making Zombies
    for(var i = 0; i < zx.length; i ++){
        var space = 10/zmh[i];
        if(zl[i] === true){
            fill(255, 191, 135);
            ellipse(zx[i],zy[i],zd[i],zd[i]);
            fill(0, 255, 34);
            if(zh[i] < zmh[i]){
                fill(255, 153, 0);
            }
            if(zh[i] < zmh[i]/2){
                fill(255, 0, 0);
            }
            rect(zx[i] - zd[i]/2,zy[i] - zd[i],zh[i] * space,zd[i]/3);

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
    for(var i = 0; i < b.length; i ++){
        if(b[i].l === true){
            for(var j = 0; j < zx.length; j ++){
                if(sqrt(sq(zx[j] - b[i].x) + sq(zy[j] - b[i].y)) < (b[i].d + zd[j]) && zl[j] === true && b[i].l === true){
                    zh[j] -= b[i].a;
                    if(b[i].t === 1){
                        b[i].l = false;
                        playSound(getSound("rpg/hit-splat"));
                    }
                    else{
                        playSound(getSound("retro/laser1"));
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
                bestnum = -1;
                for(var j = 0; j < zx.length; j ++){
                    if(sqrt(sq(zx[j] - tx[i]) + sq(zy[j] - ty[i])) < tr[i] && zl[j] === true){
                        if(sqrt(sq(zx[j] - tx[i]) + sq(zy[j] - ty[i])) < bestdis){
                            bestdis = sqrt(sq(zx[j] - tx[i]) + sq(zy[j] - ty[i]));
                            bestnum = j;
                        }
                    }
                    tc[i] = 0;
                }
                if (bestnum !== -1){
                    b.push(bullet(1, 1, 5, 3, tx[i], ty[i], zx[bestnum], zy[bestnum]));
                    bestdis = 10000;
                    bestnum = 10000;
                }
            }
        }
        if(tt[i] === 2&& te[i] === false){
            if(tc[i] > 5){
                bestnum = -1;
                for(var j = 0; j < zx.length; j ++){
                    if(sqrt(sq(zx[j] - tx[i]) + sq(zy[j] - ty[i])) < tr[i] && zl[j] === true){
                        if(sqrt(sq(zx[j] - tx[i]) + sq(zy[j] - ty[i])) < bestdis){
                            bestdis = sqrt(sq(zx[j] - tx[i]) + sq(zy[j] - ty[i]));
                            bestnum = j;
                        }
                    }
                    tc[i] = 0;
                }
                if (bestnum !== -1){
                    b.push(bullet(1, 0.2, 1, 5, tx[i], ty[i], zx[bestnum], zy[bestnum]));
                    bestdis = 10000;
                    bestnum = 10000;
                }
            }
        }
        if(tt[i] === 3&& te[i] === false){
            if(tc[i] > 50){
                bestnum = -1;
                for(var j = 0; j < zx.length; j ++){
                    if(sqrt(sq(zx[j] - tx[i]) + sq(zy[j] - ty[i])) < tr[i] && zl[j] === true){
                        if(sqrt(sq(zx[j] - tx[i]) + sq(zy[j] - ty[i])) < bestdis){
                            bestdis = sqrt(sq(zx[j] - tx[i]) + sq(zy[j] - ty[i]));
                            bestnum = j;
                        }
                    }
                    tc[i] = 0;
                }
                if (bestnum !== -1){
                    for(var j = 0; j < 5; j ++){
                        b.push(bullet(1, 0.7, random(1,2), 3.5, tx[i], random(ty[i],ty[i] + 5), random(zx[bestnum] - 10,zx[bestnum] + 10), random(zy[bestnum] - 10,zy[bestnum] + 10)));
                    }
                    bestdis = 10000;
                    bestnum = 10000;
                }

            }
        }
        if(tt[i] === 4&& te[i] === false){
            if(tc[i] > 200){
                bestnum = -1;
                for(var j = 0; j < zx.length; j ++){
                    if(sqrt(sq(zx[j] - tx[i]) + sq(zy[j] - ty[i])) < tr[i] && zl[j] === true){
                        if(sqrt(sq(zx[j] - tx[i]) + sq(zy[j] - ty[i])) < bestdis){
                            bestdis = sqrt(sq(zx[j] - tx[i]) + sq(zy[j] - ty[i]));
                            bestnum = j;
                        }
                    }
                    tc[i] = 0;
                }
                if (bestnum !== -1){
                    b.push(bullet(1, 10, 2, 10, tx[i], ty[i], zx[bestnum], zy[bestnum]));
                    bestdis = 10000;
                    bestnum = 10000;
                    playSound(getSound("retro/boom2"));
                }
            }
        }
        if(tt[i] === 5 && te[i] === false){
            if(tc[i] < -3){
                b.push(bullet(2, 0.005, 50, 5, tx[i], ty[i], 0, 0, tx[i], ty[i]));
                bestdis = 10000;
                bestnum = 10000;
            }

        }
    }                  //makes the bullets
    for(var i = 0; i < b.length; i ++){
        if(b[i].t === 1){
            b[i].x += b[i].sx;
            b[i].y += b[i].sy;
        }

    }                  //Moves the Bullets
    for(var i = 0; i < b.length; i ++){
        fill(0, 0, 0);
        if(b[i].l === true && b[i].t === 1){
            fill(0, 0, 0);
            ellipse(b[i].x,b[i].y,b[i].d,b[i].d);
        }
        else if(b[i].l === true && b[i].t === 2){
            fill(255, 0, 0,100);
            noStroke();
            ellipse(b[i].x,b[i].y,b[i].d*2,b[i].d*2);
            stroke(0, 0, 0);
        }


    }                  //draws bullets
    for(var i = 0; i < zx.length; i ++){
        if(zh[i] < 0){
            zl[i] = false;
        }
    }                  //kills zombies
    for(var i = b.length - 1; i >= 0; i --){
        if(b[i].x > 400 || b[i].x < 0 || b[i].y > 400 || b[i].y < 0){
            b[i].l = false;
        }
        if(b[i].l === false){
            b.splice(i,1);
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
