var car_width = 30;
var car_height = 50;

draw = function() {
    background(0, 110, 13);
    ellipse(width/2,width/2,40,40);
    pushMatrix();
        translate(300,300);
        rotate(0);
        fill(0, 255, 98);
        rect(0 - car_width/2, 0 - car_height/2, car_width, car_height);
    popMatrix();
};
