strokeWeight(3);
var score = 50;


var draw = function() {
    background(255, 242, 0);
    fill(194, 194, 194); //lightish grey

    for (var j = 0; j < 3; j++) {
        for (var i = 0; i < 5; i++) {
            rect( i*80, j*80, 80, 80);
        }
    }

    rect(20,260,360,120);

    //first rect
    fill(67, 168, 27);
    rect(0,0,80,80);
    fill(0, 0, 0);

    textSize(20);

    if(mouseX > 0 &&
        mouseX < 80 &&
        mouseY > 0 &&
        mouseY < 80){
        text("Game: Keep the mouse on the button.\n\nHigh score:", 30,300);
        text(score,150,347);
   }

};
