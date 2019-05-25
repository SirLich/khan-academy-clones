
//CLICK FOR GORE!

//change these to diasble some gore function (or press hotkeys q - y on the keyboard)
var splatter_v = true;
var splat_v = true;
var mist_v = true;
var hole_v = true;
var small_v = true;
var drip_v = true;
























var r = 10;
fill(255, 0, 0);
noStroke();
background(255, 199, 120);

var splatter = function(x,y){
    fill(255, 0, 0);
    for(var i = r*2; i > 0; i --){
        ellipse(x,y,i,i);
        ellipse(x + random(i,-i),y + random(i*2,-i*2),i/2,i/2);
        ellipse(x + random(i,-i),y + random(i*2,-i*2),i/2,i/2);
    }
};
var splat = function(x,y){
    fill(255, 0, 0);
    for(var i = 0; i < r; i ++){
        ellipse(x + random(-(x + (-i)+ r)/5,(x + (-i)+ r))/5,y + random(-(y + (-i)+ r)/5,(y + (-i)+ r))/5,i,i );
    }
};
var mist = function(x,y){
    fill(255, 0, 0);
    for(var i = 0; i < r; i ++){
        ellipse(x + random(-(i*10),(i*10)),y + random(-(i*10),(i*10)),2,2);
    }
};
var small = function(x,y){
    fill(255, 0, 0);
    ellipse(x,y,5,5);
};
var hole = function(x,y){
    fill(255, 0, 0);
    ellipse(x,y,20,20);
    fill(148, 10, 10);
    ellipse(x,y,15,15);
    fill(0, 0, 0);
    ellipse(x,y,10,10);
};
var drip = function(x,y){
    for(var i = 0; i < 40;i ++){
        ellipse(x,y+(i*4),15-i,15-i);
    }
    ellipse(x,y+45,10,14);
    ellipse(x-10,y+ 55,8,12);
};
mouseClicked = function(){
    if(splatter_v){
        splatter(mouseX,mouseY);
    }
    if(splat_v){
        splat(mouseX,mouseY);
    }
    if(mist_v){
        mist(mouseX,mouseY);
    }
    if(hole_v){
        hole(mouseX,mouseY);
    }
    if(small_v){
        small(mouseX,mouseY);
    }
    if(drip_v){
        drip(mouseX,mouseY);
    }
};
var keyReleased = function(){
    if(key.toString() === 'q'){
        splatter_v = !splatter_v;
    }
    if(key.toString() === 'w'){
        splat_v = !splat_v;
    }
    if(key.toString() === 'e'){
        mist_v = !mist_v;
    }
    if(key.toString() === 'r'){
        hole_v = !hole_v;
    }
    if(key.toString() === 't'){
        small_v = !small_v;
    }
    if(key.toString() === 'y'){
        drip_v = !drip_v;
    }
};
