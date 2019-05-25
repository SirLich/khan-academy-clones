var water = 344;    //How much water is there in the shape?
var h = 193;        //How tall is the shape?
var r = 93;         //What us the radius of the shape?
var shapes = 2;     //what kind of shape is it?

var volume = 0;
var num = 100;
var tilt = 5; //the tilt of the glass
var water = water * 10000;
var d = r * 2;
var y = 300; //the y of the shape;
var x = 200; //the x of the shape;
if(shapes === 1){
    var volume = (3.14) * sq(r) * (h); //The volume of the shape.
}
if(shapes === 2){
    var volume = (3.14) * (r * r * r) * (h/3); //The volume of the shape.
}

var ratio = water/volume; //The ratio between the volume of the shape and the water given.
var new_height = h * ratio; //how far you need to draw the water.
var space = new_height/num; //the space between the ellipses.



var draw = function() {
    if(shapes === 1){
        background(120, 141, 194);
        noFill();
        ellipse(x,y,d,d/tilt); //the bottom of the glass.
        ellipse(x,y - h,d,d/tilt); //the top of the glass.
        line(x-r,y,x-r,y-h); //the left side
        line(x+r,y,x+r,y-h); //the right side
        fill(49, 0, 156);
        noStroke();
        for(var i = 0; i < num; i ++){
            ellipse(x,y - space*i,d,d/tilt);
        }
        stroke(0, 0, 0);
        noFill();
        ellipse(x,y - space*num +2,d,d/tilt); //the water line
    }
    if(shapes === 2){
        background(120, 141, 194);
        ellipse(x,y,d/num * i,d/tilt/num * i); //the bottom of the glass.
        line(x-r,y,x,y-h); //the left side
        line(x+r,y,x,y-h); //the right side
        for(var i = num; i > 0; i --){
            ellipse(x,y - space*i,d/num * i,(d/tilt)/num * i);
        }
    }
};
