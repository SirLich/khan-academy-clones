var points = [];
var num = 20;
for(var j = 0; j < num; j ++){
    var t = round(random(0,120));
    points.push(t);
}
background(95, 80, 230);
var space = 400/points.length;
fill(255, 0, 0);
for (var i = 0; i < points.length; i ++){
    fill(0, 0, points[i]*2);
    rect(space * i,400,space,-points[i] * 2);
}
var draw = function() {
};
