noStroke();
var start = true;
var c1 = color(0, 225, 255);
var c2 = color(21, 255, 0);
var n = 20;
var s = 0.9;
var m = 0;
var draw_start_screen = function(){
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
};

var draw = function() {
    if (start){
        draw_start_screen();
        start = false;
    }
};
