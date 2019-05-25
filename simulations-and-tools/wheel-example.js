var rotation = 0;         //just the variable I use to keep the wheel turning!
var speed = 1;            //How fast the wheel turns

var draw = function() {

    pushMatrix();       //this allowes me to start changing rotation and canvas translation.

    rotation += speed; //this just increments the rotation. in other words it keeps the wheel turning!

    translate(200,200); //This translates middpoint to the CENTER of motion. in this case I draw the center of the wheel at 200x and 200y so i use: translate 200 200

    rotate(rotation);  //this is what it looks like. simply rotating the wheel by "rotation" degrees.

    //NOTE when drawing things in here, I dont say: ellipse(200,200,100,100)  to draw an ellipse in the center of the canvas. sense I have allready translated the canvas by 200x, 200y I instead draw my wheel at ellipse(0,0,100,100).

    {
    background(255, 255, 255);
    fill(255, 0, 0);
    ellipse(0,0,100,100);
    fill(225, 255, 0);
    ellipse(-30,30,10,10);
    ellipse(-30,-30,10,10);
    ellipse(30,-30,10,10);
    ellipse(30,30,10,10);
    } //ignore everything in here. this just draws the wheel.

    popMatrix(); //this ends me being able to change the rotation and translation.
};
