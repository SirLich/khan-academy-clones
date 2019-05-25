var blu_x = [];
var blu_y = [];
var blu_d = [];
var blu_s = [];
var blu_h = [];
var blu_mh = [];
var blu_tx = [];
var blu_ty = [];
var blu_l = [];

var blu_sx = [];
var blu_sy = [];
var blu_r = [];
var blu_tid = [];
var blu_a = [];
var blu_mode = [];
var blu_mc = [];
var blu_mm = [];
var blu_angle = [];

var red_x = [];
var red_y = [];
var red_d = [];
var red_s = [];
var red_h = [];
var red_mh = [];
var red_tx = [];
var red_ty = [];
var red_l = [];

draw = function() {
    println(red_x.length * blu_x.length);
    background(119, 184, 186);
    for(var i = 0; i < blu_x.length; i ++){
        var target_dis = 100000;
        var target_x = 200;
        var target_y = 200;
        fill(0, 0, 255);
        ellipse(blu_x[i],blu_y[i],blu_d[i],blu_d[i]);
        for(var j = 0; j < red_x.length; j ++){
            if (sqrt(sq(blu_x[i] - red_x[j]) + sq(blu_y[i] - red_y[j])) < target_dis){
                target_dis = sqrt(sq(blu_x[i] - red_x[j]) + sq(blu_y[i] - red_y[j]));
                target_x = red_x[j];
                target_y = red_y[j];
                blu_tid[i] = j;
            }
        }
        blu_tx[i] = target_x;
        blu_ty[i] = target_y;
        var f = blu_s[i]/sqrt(sq(blu_x[i] - blu_tx[i]) + sq(blu_y[i] - blu_ty[i]));
        blu_sx[i] = -f*(blu_x[i]-blu_tx[i]);
        blu_sy[i] = -f*(blu_y[i]-blu_ty[i]);
        if(sqrt(sq(blu_x[i] - blu_tx[i]) + sq(blu_y[i] - blu_ty[i])) < blu_r[i]){
            red_h[blu_tid[i]] -= blu_a[i];
        }
        else{
            blu_x[i] += blu_sx[i];
            blu_y[i] += blu_sy[i];
        }

    }
    for(var i = 0; i < red_x.length; i ++){
        fill(255, 0, 0);
        ellipse(red_x[i],red_y[i],red_d[i],red_d[i]);
        if(red_h[i] < 0){
            delete red_x[i];
            delete red_y[i];
            delete red_d[i];
            delete red_s[i];
            delete red_h[i];
            delete red_mh[i];
            delete red_tx[i];
            delete red_ty[i];
            delete red_l[i];
        }
    }
};
mouseClicked = function(){
    if(mouseButton === LEFT){
        blu_x.push(mouseX);
        blu_y.push(mouseY);
        blu_d.push(10);
        blu_s.push(0.5);
        blu_h.push(100);
        blu_mh.push(100);
        blu_tx.push(mouseX);
        blu_ty.push(mouseY);
        blu_l.push(true);
        blu_r.push(15);
        blu_tid.push(-100);
        blu_a.push(0.5);
        blu_mode.push(1);
        blu_mc.push(0);
        blu_angle.push(100);
        blu_mm.push(100);
    }
    if(mouseButton === RIGHT){
        red_x.push(mouseX);
        red_y.push(mouseY);
        red_d.push(10);
        red_s.push(1);
        red_h.push(100);
        red_mh.push(100);
        red_tx.push(mouseX);
        red_ty.push(mouseY);
        red_l.push(true);
    }
};
