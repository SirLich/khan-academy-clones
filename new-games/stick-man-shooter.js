var manX = [];
var manY = [];
var manS = [];
var alive = [];
var gore = [];
var count = 30;
var original = 10;

var splat1 = [10,20,30,40,50];
var splotchX = [];
var splotchY = [];
var offsetX = [];
var offsetY = [];
var Size = [];
var draw_splatter = function(){
    noStroke();
    for(var drwSplt = 0; drwSplt < splotchX.length; drwSplt ++){
    for(var splat = Size; splat > 0; splat --){
        fill(255, 0, 0);
    ellipse((abs(splat-Size[drwSplt])*offsetX[abs(splat-Size[drwSplt])+drwSplt*Size[drwSplt]])+splotchX[drwSplt],(abs(splat-Size[drwSplt])*offsetY[abs(splat-Size[drwSplt])+drwSplt*Size[drwSplt]])+splotchY[drwSplt], splat,splat);
    }
    }
};
var draw_man = function(x,y,s){
    fill(0, 0, 0);
    stroke(0, 0, 0);
    strokeWeight(s/10);
    ellipse(x,y,s,s);
    line(x,y-s/2,x,y+ s*2.5);
    line(x - s,y + s,x + s, y + s);
    line(x,y + s*2.5,x-s/1.5,y+s*3.5);
    line(x,y + s*2.5,x+s/1.5,y+s*3.5);
};
var make_man = function(x,y,s){
    manX.push(x);
    manY.push(y);
    manS.push(s);
    alive.push(true);
    gore.push(0);

};
var make_splatter = function(x,y,Sizey){
    splotchX.push(x);
    splotchY.push(y);
    for(var defineVar = 0; defineVar < Sizey; defineVar ++){
        offsetX.push(random(-2,2));
        offsetY.push(random(-2,2));
    }
    Size.push(Sizey);
};
draw = function(){
    if(count < 0){
        count = original;
        make_man(random(50,350),random(50,350),random(5,50));
    }
    background(255, 255, 255);
    for(var i = 0; i < manX.length; i ++){
        if(alive[i] === false){
                draw_splatter();
        }
        if(alive[i] === true){
            draw_man(manX[i],manY[i],manS[i]);
        }
    }
    count -= 1;
};
mouseClicked = function(){
    for(var i = 0; i < manX.length; i ++){
        if (sqrt(sq(mouseX - manX[i]) + sq(mouseY - manY[i])) < manS[i]/2 && alive[i] === true){
            alive[i] = false;
            make_splatter(mouseX,mouseY,manS[i]);
        }
    }
};
