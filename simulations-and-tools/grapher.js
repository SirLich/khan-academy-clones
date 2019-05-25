var lastx;
var lasty;
var points = [0,60,45,0,30,0,0,60,35,30,30,45,60,40,60,100,90,0,45,0,0,0,0,0,30,30,90,0,0,30,80,45,105,90,0,60,60,0,60,0,0,75,0,0,0,45,0,90,200,105,30,0,0,0];
//var points = [30,80,45,105,90,0,60,60,0,60,0,0,75,0,0,0,45,0,90,200,105];
var maxi = points[0];
var mini = points[0];
var w = 3;
var side = 400/points.length;
var skip = 0;
var weekend = floor((points.length/7)*2);
var weekday = floor((points.length/7)*5);
var days = points.length;
var f = createFont("fantasy");
textFont(f);
var total = 0;

for(var i = 0; i < points.length; i ++){
    if(points[i] > maxi){
        maxi = points[i];
    }
    if(points[i] < mini){
        mini = points[i];
    }
    if(points[i] === 0){
        skip += 1;
    }
    total += points[i];
}
var dayA = total/points.length;
var weekA = (dayA/5)*7;

var graph = function(){
    background(111, 113, 148);
    fill(179, 179, 179);
    rect(-5,-5,50,50,10);
    fill(0, 0, 0);
    image(getImage("avatars/questionmark"),10,10,20,20);
    for(var i = 0; i < points.length; i ++){
        var x = (i * side);
        var y = 400 - (points[i] - mini)*400/(maxi - mini);
        ellipse(x,y,w,w);
        if(i > 0){
            line(lastx,lasty,x,y);
        }
        lastx = x;
        lasty = y;

    }
    line(0,200,400,200);
    textSize(10);
    text((maxi/2) + " Min",175,195);
};
var info = function(){
    background(111, 113, 148);
    textSize(20);
    fill(0, 0, 0);
    text("Days: "+ days,50,50);
    text("Weekends: " + weekend,50,75);
    text("Weekdays: " + weekday,50,100);
    text("Skipped Days: " + skip,50,125);
    text("Daily Average: " + round(dayA), 50, 150);
    text("Weekday Average: " + round(weekA),50,175);
    text(">>>Click To Return<<<",100,300);
    fill(68, 209, 219);
    text("Days: "+ days,52,52);
    text("Weekends: " + weekend,52,77);
    text("Weekdays: " + weekday,52,102);
    text("Skipped Days: " + skip,52,127);
    text("Daily Average: " + round(dayA), 52, 152);
    text("Weekday Average: " + round(weekA),52,177);
    text(">>>Click To Return<<<",102,302);
};
graph();
var mouseClicked = function(){
    if(mouseX > 0 && mouseX < 50 && mouseY > 0 && mouseY < 50){
        info();
    }
    if(mouseX > 50 && mouseY > 50){
        graph();
    }
};
