var road_width = 200;
var line_width = 2;
var line_length = 50;
var stripes = [];

var grass_color = color(0, 107, 25);
var road_color = color(107, 107, 107);
var line_color = color(247, 255, 0);

for(var i = 0; i < 10; i ++){
    stripes.push(i * 30);
}
var Car = function(x, y, a, s, ms, acc){
    this.xpos = x;
    this.ypos = y;
    this.speed = s;
    this.maxspeed = ms;
    this.acc = acc;
};
var mycar = new Car(0,200,90,1,10,0.3);


var draw = function() {
    noStroke();
    background(grass_color);
    fill(road_color);
    rect(width / 2 - road_width/2 - mycar.xpos,  0, road_width, height);
    fill(line_color);
    rect(width/2 - line_width/2 - line_width * 2,0,line_width,height);
    rect(width/2 - line_width+ line_width,0,line_width,height);
    for(var i = 0; i < stripes.length; i ++){
        fill(255, 255, 255);
        rect(width/2 - line_width/2 + road_width/4,i * line_length * 2,line_width,line_length);
        rect(width/2 - line_width/2 - road_width/4,i * line_length * 2,line_width,line_length);
    }

};
