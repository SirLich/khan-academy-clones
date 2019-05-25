//click on the colors at the top to change the color, and click on the botom numbers to change the paint size. have fun!




//-----------vars-----------------

var red_channel = [255, 247, 12, 250, 70, 255, 0, 224];
var green_channel = [0, 13, 12, 338, 242, 255, 0, 103];
var blue_channel = [0, 216, 240, 5, 12, 255, 0, 38];
var current_color = 0;

var paint_sizes = [1, 3, 5, 8, 10, 15, 30, 50];
var current_paint_size = 20;
//------------------------the paintColor finder ( 1, 2 and 3)------------------

var mouseClicked = function(){
    if(mouseX < 400 && mouseX > 0 && mouseY > 0 && mouseY <50){
        current_color = floor(mouseX/50);
    }

    if(mouseX > 0 && mouseX <400 && mouseY < 400 && mouseY > 350){
        current_paint_size = floor(mouseX/50);
    }
};


//---------------------------colors----------------------------------

for (var i=0; i<8; i+=1) {
    fill(red_channel[i], green_channel[i], blue_channel[i]);
    rect(i*50,0,50,50);
}

//--------------------------paint brush size--------------------------------
stroke(0, 0, 0);
fill(8, 8, 8);
rect(0,350,400,50);//bottom rec
var ts = 35;
textSize(ts);

for (var i=0; i<8; i+=1) {
    fill(89, 213, 217);
    rect(i*50, 350, 50, 50);
    fill(0, 0, 0);
    text(i+1, i*50+(50-ts*0.5)/2, 385);
}

//-------------------------------painting drawloop-------------------------
frameRate(10000);
noStroke();
draw = function() {
    var ps = paint_sizes[current_paint_size];
    if(mouseY <350-ps/2 && mouseY > 50 + ps/2 && mouseIsPressed){
        fill(red_channel[current_color],
             green_channel[current_color],
             blue_channel[current_color]);
        ellipse(mouseX,mouseY,ps,ps);
    }
};

//---------------------------paint color 'if statment' changer--------------------
