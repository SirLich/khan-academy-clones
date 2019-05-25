var co1 = 'earth';
var co2 = 'air';
var des = [];
for(var i = 0; i < 64; i ++){
    des.push(0);
}
var leftstate = 0;
var rightstate = 0;
textFont(createFont("monospace"));
var draw = function() {
    println(leftstate);
    {
    background(115, 137, 148);
    line(200,0,200,200);
    fill(255, 255, 255);
    ellipse(100,100,50,50);
    ellipse(50,100,30,30);
    ellipse(150,100,30,30);
    ellipse(100,150,30,30);
    ellipse(100,50,30,30);
    ellipse(133,133,30,30);
    ellipse(67,133,30,30);
    ellipse(133,67,30,30);
    ellipse(67,67,30,30);
    ellipse(300,100,50,50);
    ellipse(250,100,30,30);
    ellipse(350,100,30,30);
    ellipse(300,150,30,30);
    ellipse(300,50,30,30);
    ellipse(333,133,30,30);
    ellipse(267,133,30,30);
    ellipse(333,67,30,30);
    ellipse(267,67,30,30);
    fill(55, 117, 28);
    rect(0,200,400,50);
    fill(255, 255, 255);
    textSize(50);
    text('+',186,240);
    textSize(20);
    text('"' + co1 + '"',50,232);
    text('"' + co2 + '"',280,232);
    } /**Just stuff**/
    if (sqrt(sq(mouseX - 100) + sq(mouseY - 100)) < 25){
        fill(115, 137, 148);
        rect(0,250,400,400);
        fill(0, 0, 0);
        if(leftstate === 0){
            text("Pick an element type.",30,300);
        }
        else{
            text("Go back.",30,300);
        }
    } //center
    if (sqrt(sq(mouseX - 100) + sq(mouseY - 50)) < 15){
        fill(115, 137, 148);
        rect(0,250,400,400);
        fill(0, 0, 0);
        if(leftstate === 0){
            text("Earth elements",30,300);
        }
        if(leftstate === 1){
            if(des[0] === 1){
                text("Dirt",30,300);
            }
            else{
                text("Unknown",30,300);
            }
        }
        if(leftstate === 2){
            if(des[1] === 1){
                text("Sand",30,300);
            }
            else{
                text("Unknown",30,300);
            }
        }
        if(leftstate === 3){
            if(des[2] === 1){
                text("Mud",30,300);
            }
            else{
                text("Unknown",30,300);
            }
        }
        if(leftstate === 4){
            if(des[3] === 1){
                text("Dust",30,300);
            }
            else{
                text("Unknown",30,300);
            }
        }
        if(leftstate === 5){
            if(des[4] === 1){
                text("Clay",30,300);
            }
            else{
                text("Unknown",30,300);
            }
        }
        if(leftstate === 6){
            if(des[5] === 1){
                text("Rock",30,300);
            }
            else{
                text("Unknown",30,300);
            }
        }
        if(leftstate === 7){
            if(des[6] === 1){
                text("Soil",30,300);
            }
            else{
                text("Unknown",30,300);
            }
        }
        if(leftstate === 8){
            if(des[7] === 1){
                text("Gravel",30,300);
            }
            else{
                text("Unknown",30,300);
            }
        }

    }
    if (sqrt(sq(mouseX - 150) + sq(mouseY - 100)) < 15){
        fill(115, 137, 148);
        rect(0,250,400,400);
        fill(0, 0, 0);
        text("Air elements",30,300);
    }
    if (sqrt(sq(mouseX - 133) + sq(mouseY - 67)) < 15){
        fill(115, 137, 148);
        rect(0,250,400,400);
        fill(0, 0, 0);
        text("Fire elements",30,300);
    }
    if (sqrt(sq(mouseX - 133) + sq(mouseY - 133)) < 15){
        fill(115, 137, 148);
        rect(0,250,400,400);
        fill(0, 0, 0);
        text("Plant elements",30,300);
    }
    if (sqrt(sq(mouseX - 100) + sq(mouseY - 150)) < 15){
        fill(115, 137, 148);
        rect(0,250,400,400);
        fill(0, 0, 0);
        text("Water elements",30,300);
    }
    if (sqrt(sq(mouseX - 67) + sq(mouseY - 133)) < 15){
        fill(115, 137, 148);
        rect(0,250,400,400);
        fill(0, 0, 0);
        text("Explosive elements",30,300);
    }
    if (sqrt(sq(mouseX - 50) + sq(mouseY - 100)) < 15){
        fill(115, 137, 148);
        rect(0,250,400,400);
        fill(0, 0, 0);
        text("Animal elements",30,300);
    }
    if (sqrt(sq(mouseX - 67) + sq(mouseY - 67)) < 15){
        fill(115, 137, 148);
        rect(0,250,400,400);
        fill(0, 0, 0);
        text("Space elements",30,300);
    }
    //================================================================================
    if (sqrt(sq(mouseX - 300) + sq(mouseY - 100)) < 25){
        fill(115, 137, 148);
        rect(0,250,400,400);
        fill(0, 0, 0);
        text("Click an element type!",30,300);
    }
    if (sqrt(sq(mouseX - 300) + sq(mouseY - 50)) < 15){
        fill(115, 137, 148);
        rect(0,250,400,400);
        fill(0, 0, 0);
        text("Earth elements",30,300);
    }
    if (sqrt(sq(mouseX - 350) + sq(mouseY - 100)) < 15){
        fill(115, 137, 148);
        rect(0,250,400,400);
        fill(0, 0, 0);
        text("Air elements",30,300);
    }
    if (sqrt(sq(mouseX - 333) + sq(mouseY - 67)) < 15){
        fill(115, 137, 148);
        rect(0,250,400,400);
        fill(0, 0, 0);
        text("Fire elements",30,300);
    }
    if (sqrt(sq(mouseX - 333) + sq(mouseY - 133)) < 15){
        fill(115, 137, 148);
        rect(0,250,400,400);
        fill(0, 0, 0);
        text("Plant elements",30,300);
    }
    if (sqrt(sq(mouseX - 300) + sq(mouseY - 150)) < 15){
        fill(115, 137, 148);
        rect(0,250,400,400);
        fill(0, 0, 0);
        text("Water elements",30,300);
    }
    if (sqrt(sq(mouseX - 267) + sq(mouseY - 133)) < 15){
        fill(115, 137, 148);
        rect(0,250,400,400);
        fill(0, 0, 0);
        text("Explosive elements",30,300);
    }
    if (sqrt(sq(mouseX - 250) + sq(mouseY - 100)) < 15){
        fill(115, 137, 148);
        rect(0,250,400,400);
        fill(0, 0, 0);
        text("Animal elements",30,300);
    }
    if (sqrt(sq(mouseX - 267) + sq(mouseY - 67)) < 15){
        fill(115, 137, 148);
        rect(0,250,400,400);
        fill(0, 0, 0);
        text("Space elements",30,300);
    }
};
mouseClicked = function(){

};
