/**
 * x coord
 * y coord
 * prefered angle
 * actual angle
 * resistance
 * dependent on... ?
 *
*/
var show_joints = true;
var j = [];
var joint = function(xc,yc,pa,aa,re,dj){
    var j = new Object(1);
    j.xc = xc; //x coord
    j.yc = yc; //x coord
    j.pa = pa; //pref angle
    j.aa = aa; //actual angle
    j.re = re;//resistance
    j.dj = dj; //dependent joint
};
j.push(joint(200,200,0,0,0,-10));
var draw = function() {
    background(0, 217, 255);
    for(var i = 0; i < j.length; i ++){
        if(show_joints === true){
            noFill();
            strokeWeight(3);
            stroke(255, 0, 0);
            ellipse(200,200,20,20);
        }
    }
};
