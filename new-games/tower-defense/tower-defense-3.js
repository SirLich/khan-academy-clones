
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

    b.draw = function() {
        fill(0, 0, 0);
        if(this.l === true && this.t === 1){
            fill(0, 0, 0);
            ellipse(this.x,this.y,this.d,this.d);
        }
        else if(this.l === true && this.t === 2){
            fill(255, 0, 0,100);
            noStroke();
            ellipse(this.x,this.y,this.d*2,this.d*2);
            stroke(0, 0, 0);
        }
    };

    b.move = function() {
        if (this.t === 1){
            this.x += this.sx;
            this.y += this.sy;
        }

    };
    return b;
};

var z = [];
var zombie = function(t, h, d, s, c, x, y){
    var z = new Object(1);
    z.t = t;
    z.h = h;
    z.mh = h;
    z.d = d;
    z.s = s;
    z.x = x;
    z.y = y;
    z.der = "down";
    z.l = true;
    z.c = c;
    z.i = 0;
    return z;
};

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
        z.push(zombie (1, h, 10, s, 0-(i*20), 30, -30-(i*20)));
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
    for(var i = 0; i < z.length; i ++){
        var space = 10/z[i].mh;
        if(z[i].l === true){
            fill(255, 191, 135);
            ellipse(z[i].x,z[i].y,z[i].d,z[i].d);
            fill(0, 255, 34);
            if(z[i].h < z[i].mh){
                fill(255, 153, 0);
            }
            if(z[i].h < z[i].mh/2){
                fill(255, 0, 0);
            }
            rect(z[i].x - z[i].d/2,z[i].y - z[i].d,z[i].h * space,z[i].d/3);

        }

        if(z[i].der === "down"){
            z[i].y += z[i].s;
        }
        if(z[i].der === "up"){
            z[i].y -= z[i].s;
        }
        if(z[i].der === "left"){
            z[i].x -= z[i].s;
        }
        if(z[i].der === "right"){
            z[i].x += z[i].s;
        }
        if(z[i].c > count[z[i].i]){
            z[i].c = 0;
            z[i].der = next_der[z[i].i];
            z[i].i += 1;
        }
        if(z[i].y > 400){
            z[i].l = false;
        }
        z[i].c += z[i].s;
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
            for(var j = 0; j < z.length; j ++){
                if(sqrt(sq(z[j].x - b[i].x) + sq(z[j].y - b[i].y)) < (b[i].d + z[j].d) && z[j].l === true && b[i].l === true){
                    z[j].h -= b[i].a;
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
                for(var j = 0; j < z.length; j ++){
                    if(sqrt(sq(z[j].x - tx[i]) + sq(z[j].y - ty[i])) < tr[i] && z[j].l === true){
                        if(sqrt(sq(z[j].x - tx[i]) + sq(z[j].y - ty[i])) < bestdis){
                            bestdis = sqrt(sq(z[j].x - tx[i]) + sq(z[j].y - ty[i]));
                            bestnum = j;
                        }
                    }
                    tc[i] = 0;
                }
                if (bestnum !== -1){
                    b.push(bullet(1, 1, 5, 3, tx[i], ty[i], z[bestnum].x, z[bestnum].y));
                    bestdis = 10000;
                    bestnum = 10000;
                }
            }
        }
        if(tt[i] === 2&& te[i] === false){
            if(tc[i] > 5){
                bestnum = -1;
                for(var j = 0; j < z.length; j ++){
                    if(sqrt(sq(z[j].x - tx[i]) + sq(z[j].y - ty[i])) < tr[i] && z[j].l === true){
                        if(sqrt(sq(z[j].x - tx[i]) + sq(z[j].y - ty[i])) < bestdis){
                            bestdis = sqrt(sq(z[j].x - tx[i]) + sq(z[j].y - ty[i]));
                            bestnum = j;
                        }
                    }
                    tc[i] = 0;
                }
                if (bestnum !== -1){
                    b.push(bullet(1, 0.2, 1, 5, tx[i], ty[i], z[bestnum].x, z[bestnum].y));
                    bestdis = 10000;
                    bestnum = 10000;
                }
            }
        }
        if(tt[i] === 3&& te[i] === false){
            if(tc[i] > 50){
                bestnum = -1;
                for(var j = 0; j < z.length; j ++){
                    if(sqrt(sq(z[j].x - tx[i]) + sq(z[j].y - ty[i])) < tr[i] && z[j].l === true){
                        if(sqrt(sq(z[j].x - tx[i]) + sq(z[j].y - ty[i])) < bestdis){
                            bestdis = sqrt(sq(z[j].x - tx[i]) + sq(z[j].y - ty[i]));
                            bestnum = j;
                        }
                    }
                    tc[i] = 0;
                }
                if (bestnum !== -1){
                    for(var j = 0; j < 5; j ++){
                        b.push(bullet(1, 0.7, random(1,2), 3.5, tx[i], random(ty[i],ty[i] + 5), random(z[bestnum].x - 10,z[bestnum].x + 10), random(z[bestnum].y - 10,z[bestnum].y + 10)));
                    }
                    bestdis = 10000;
                    bestnum = 10000;
                }

            }
        }
        if(tt[i] === 4&& te[i] === false){
            if(tc[i] > 200){
                bestnum = -1;
                for(var j = 0; j < z.length; j ++){
                    if(sqrt(sq(z[j].x - tx[i]) + sq(z[j].y - ty[i])) < tr[i] && z[j].l === true){
                        if(sqrt(sq(z[j].x - tx[i]) + sq(z[j].y - ty[i])) < bestdis){
                            bestdis = sqrt(sq(z[j].x - tx[i]) + sq(z[j].y - ty[i]));
                            bestnum = j;
                        }
                    }
                    tc[i] = 0;
                }
                if (bestnum !== -1){
                    b.push(bullet(1, 10, 2, 10, tx[i], ty[i], z[bestnum].x, z[bestnum].y));
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
        b[i].move();
        b[i].draw();
    }                  //Bullets
    for(var i = 0; i < z.length; i ++){
        if(z[i].h < 0){
            z[i].l = false;
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
