var Message = 0; //change this to where u want message scroll to start
var msges = ["UPDATE: 1.0 = Notebook-Game idea. completed: True\nTASK 1) ???\nTASK 2) Philip Othelo\nTASK 3) ????\nTASK 4) KingKhan"];
var count = Message;
var draw = function() {
    background(133, 129, 109);
    fill(64, 128, 255);
    rect(10,10,380,380);
    textSize(30);
    fill(255, 255, 255);
    text("Game Dev",52,70);
    fill(0, 0, 0);
    text("Game Dev",50,70);
    textSize(10);
    text(msges[count],15,100);
};
