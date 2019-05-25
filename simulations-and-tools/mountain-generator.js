var num = 20;

// Liam var points = [0,60,45,0,30,0,0,60,35,30,30,45,60,40,60,100,90,0,45,0,0,0,0,0,30,30,90,0,0];
//var points = [60,30,20,70,30,0,20,30,30,0,40,0,0,0,0,0,45,30,75,0,0,20,0,0,0,0,0,0,15,15,30,0,0,0,0];


//ar points = [];
//for(var j = 0; j < num; j ++){
//    var t = round(random(0,120));
//    points.push(t);
//}
var d = 45;
var points = [60, 60];

for (var j=0; j<9; j++){
    var newp = [];
    for (var i=0; i<points.length-1; i++){
        newp.push(points[i]);
        var k = (points[i]+points[i+1])/2;
        k += random(-d, d);
        newp.push(k);
    }
    newp.push(points[points.length-1]);
    points = newp;
    d *= 0.5;
}

var space = 350/points.length;
var total = 0;
var bad_day = 0;
for (var i = 0; i < points.length; i ++){
    total += points[i];
    if(points[i] === 0){
        bad_day += 1;
    }
}
var weekday_average = round(total/points.length * (7/5));
var week_average = round(total/points.length);
var days = points.length;


strokeWeight(1);
fill(0, 0, 0);
background(194, 194, 194);
text("1 Hour",10,275);
line(0,280,400,280);
text("2 Hours" ,10,155);
line(0,160,400,160);
text("Daily average on weekdays = " + weekday_average,10,40);
text("Daily average = " + week_average,10,20);
text("Skipped days = "+bad_day,10,60);
text("weekends = " + round(((points.length)/7)*2),10,80);
text("Days = " + points.length,10,100);

for (var i = 0; i < points.length; i ++){
    stroke(0, 0, 0);
    if(i < points.length - 1){
            line(space*i+ 50,400 - points[i] * 2,space*(i + 1)+50,400 - points[i + 1] * 2);
    }
    noStroke();
    fill(255, 0, 0);
    //ellipse(space * i + 50,400 - points[i] * 2,5,5);
}
var draw = function() {
};
