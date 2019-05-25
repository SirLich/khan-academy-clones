background(25, 94, 0);
stroke(0, 0, 0);
var sz = 7;
var xmin = 0;
var xmax = floor(400/sz);
var ymin = 0;
var ymax = floor(400/sz);
var rh = 4;
var rw = 4;
var x1 = xmin;
var y1 = ymin;
var v1 = 0;
var h1 = 1;
var x2 = xmax-1;
var y2 = ymax-1;
var h2 = -1;
var v2 = 0;
var d2 = -1;

var wall = new Array(xmax*ymax);

for(var i = 0; i < xmax; i += 1){
    line(0,i*sz,400,i*sz);
}
for(var j = 0; j < ymax; j += 1){
    line(j*sz,0,j*sz,400);
}
for(var i=0; i<wall.length; i++){
    wall[i] = 0;
}
frameRate(10);

var you_lose = function(){
    background(255, 191, 0);
};

var he_loses = function(){
    background(255, 0, 225);
};

draw = function() {
    /* my move */
    noStroke();
    fill(199, 130, 199);
    if (1 === wall[y1*xmax+x1] || x1 < xmin || x1 >= xmax || y1 < ymin || y1 > ymax) {
        draw = you_lose;
    }
    rect(x1*sz,y1*sz,sz-1,sz-1);
    wall[y1*xmax+x1] = 1;
    y1 += v1;
    x1 += h1;

    /* his move */
    noStroke();
    fill(255, 183, 0);
    if (1 === wall[y2*xmax+x2] || x2 < xmin || x2 >= xmax || y2 < ymin || y2 > ymax) {
        draw = he_loses;
    }
    rect(x2*sz,y2*sz,sz-1,sz-1);
    wall[y2*xmax+x2] = 1;
    y2 += v2;
    x2 += h2;


};
keyReleased = function(){
    if(keyCode === 83 && v1 === 0){
        h1 = 0;
        v1 = 1;
    }
    if(keyCode === 87 && v1 === 0){
        h1 = 0;
        v1 = -1;
    }
    if(keyCode === 68 && h1 === 0){
        h1 = 1;
        v1 = 0;
    }
    if(keyCode === 65 && h1 === 0){
        h1 = -1;
        v1 = 0;
    }

    if(keyCode === UP && v2 === 0){
        h2 = 0;
        v2 = -1;
    }
    if(keyCode === DOWN && v2 === 0){
        h2 = 0;
        v2 = 1;
    }
    if(keyCode === LEFT && h2 === 0){
        h2 = -1;
        v2 = 0;
    }
    if(keyCode === RIGHT && h2 === 0){
        h2 = 1;
        v2 = 0;
    }

};
