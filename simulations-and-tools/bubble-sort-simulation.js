//vars
var a = new Array(1);
var i = 0;

for(i = 0; i < 20; i ++){
    a[i] = floor(random(1,40));
}

var sleep = function (seconds) {
    var end_time = millis() + seconds*1000;
    while (millis() < end_time) {
    }
};

var paint = function() {
    background(255, 255, 255);
    for(var i = 0; i < 100 ; i ++){
        fill(0, 0, 0);
        rect(5,5+20*i,a[i]*10,10);
    }
};

var j = 0;
frameRate (1000);
draw = function() {
    if (a[j] > a[j+1]) {
        var t = a[j];
        a[j] = a[j+1];
        a[j+1] = t;
        paint();
    }
    if (j > 19) {
        j = 0;
    }
    else {
        j++;
    }
};
