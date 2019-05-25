var c1 = color(46, 189, 255);
var c2 = color(0, 19, 140);
var n = 40;
var s = 0.9;

//LERP color/draw start screen function
frameRate(30);
strokeWeight(3);
var draw_start_screen = function(){
    var m = 0;
    noStroke();
    background(255, 255, 255);
    for(var i = 0; i < 400 ; i += 400/n){
        for(var j = 0; j < 400 ; j += 400/n){
            fill(13, 0, 255);
            fill (lerpColor(c1, c2, m));
            m += 1/(n*n);
            var sz = 400/n * s;
            rect(i,j,sz,sz);

        }
    }
    stroke(0, 0, 0);
};
strokeWeight(1);
var r = 10;
var sped = 10;
var x = [200,200,200,200,200,200,200,200,210,220,230,210,220,200, 190, 210,220,230,240,230,250,260,270,270,270,270,270,220,230,210,200,190,180,170,160,150,150,150,150,150];
var y = [200,210,220,230,240,250,260,270,200,200,200,230,230,160,160,160,160,160,160,160,170,180,190,200,210,220,230,300,300,300,300,300,300,300,290,280,270,260,250,240,230];
var xpos = [];
for (var i = 0; i < x.length; i ++){
    xpos.push(floor(random(-200,-1000)));
}
var draw = function() {
    draw_start_screen();
    textSize(50);
    text("Phantom",100,150);
    text("Flame",100,350);
    fill(0, 0, random(50,255));
    for (var i = 0; i < x.length; i ++){
        if(xpos[i] < x[i]){
            xpos[i] += sped;
            rect(xpos[i],y[i],r,r);
        }
        else{
            rect(x[i],y[i],r,r);
        }

    }
};
