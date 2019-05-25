var mobs = [];//this is the mob speed
var mobx = [];//this is the mobx
var moby = [];//this is the moby
var mobh = [];//this is the mob health
for(var i = 0; i < 20; i ++){
    mobs.push(random(1,2));
    mobx.push(random(10,390));
    moby.push(random(-10,-400));

}
var speed = 1;//this is the 'man' (globes) speed
var xman1 = 200;
var yman1 = 200;
var xman2 = 200;
var yman2 = 100;
var up1 = false;
var right1 = false;
var down1 = false;
var left1 = false;
var up2 = false;
var right2 = false;
var down2 = false;
var left2 = false;
var draw = function() {
    println(mobx.length);
    background(255, 255, 255);
    stroke(74, 116, 224);
    for(var i = 0 ; i < 15; i ++){
        line(20,50 + 30 * i,370,50 + 30*i);
    }
    stroke(255, 0, 0);
    line(40,-30,40,500);
    line(45,-30,45,500);
    stroke(183, 0, 255);
    //rokeWeight(400 -sqrt(sq(xman1 - xman2) + sq(yman1 - yman2))*10);
    line(xman1,yman1,xman2,yman2);
    strokeWeight(1);
    stroke(0, 0, 0);
    fill(194, 194, 194);

    //make your visuals here
    ellipse(xman1,yman1,20,20);
    fill(0, 0, 0);
    ellipse(xman2,yman2,20,20);
    //end visuals
    if(up1 === true){
        yman1 -= speed;
    }
    if(right1 === true){
        xman1 += speed;
    }
    if(down1 === true){
        yman1 += speed;
    }
    if(left1 === true){
        xman1 -= speed;
    }
    if(up2 === true){
        yman2 -= speed;
    }
    if(right2 === true){
        xman2 += speed;
    }
    if(down2 === true){
        yman2 += speed;
    }
    if(left2 === true){
        xman2 -= speed;
    }
    for(var i = 0; i < mobx.length; i ++){
        fill(255, 112, 210);
        rect(mobx[i],moby[i] - 8,10,10,3);
        fill(255, 216, 20);
        rect(mobx[i],moby[i],10,30);
        fill(250, 204, 147);
        triangle(mobx[i],moby[i] + 30,mobx[i]+ 10,moby[i] + 30,mobx[i]+5,moby[i]+45);
        moby[i] += mobs[i];
        if(moby[i] > 450){
            moby[i] = random(-50,-100);
        }
    }
};
keyPressed = function(){
    if(keyCode === UP){
        up1 = true;
    }
    if(keyCode === RIGHT){
        right1 = true;
    }
    if(keyCode === DOWN){
        down1 = true;
    }
    if(keyCode === LEFT){
        left1 = true;
    }

    if(key.code === 119){
        up2 = true;
    }
    if(key.code === 100){
        right2 = true;
    }
    if(key.code === 115){
        down2 = true;
    }
    if(key.code === 97){
        left2 = true;
    }
};
keyReleased = function(){
    if(keyCode === UP){
        up1 = false;
    }
    if(keyCode === RIGHT){
        right1 = false;
    }
    if(keyCode === DOWN){
        down1 = false;
    }
    if(keyCode === LEFT){
        left1 = false;
    }

    if(key.code === 119){
        up2 = false;
    }
    if(key.code === 100){
        right2 = false;
    }
    if(key.code === 115){
        down2 = false;
    }
    if(key.code === 97){
        left2 = false;
    }
};
