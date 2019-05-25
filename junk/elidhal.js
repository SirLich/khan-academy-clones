var selectx = 0;
var selecty = 0;
var selected = false;
var speed_multi = 1;
var fight = false;

var t = []; //type
var x = []; //xpos
var y = []; //ypos
var s = []; //speed
var d = []; //derection

var draw = function() {
    background(33, 166, 0);
    fill(26, 130, 0);
    rect(20,20,360,200);
    for(var i = 0 ; i < 11; i ++){
        line(20, 20 + i * 20,380,20 + i * 20);
    }
    for(var i = 0 ; i < 20; i ++){
        line(20 + i * 20,20,20 + i * 20,220);
    }
    if(selected === true){
        fill(0, 0, 0,100);
        rect(selectx * 20,selecty * 20,20,20);
    }
    stroke(77, 31, 0);
    strokeWeight(3);
    fill(181, 181, 181);
    fill(173, 173, 173);

    rect(20,240,40,40,10);
    rect(20,290,40,40,10);
    rect(20,340,40,40,10);

    rect(80,240,40,40,10);
    rect(80,290,40,40,10);
    rect(80,340,40,40,10);

    rect(140,240,40,40,10);
    rect(140,290,40,40,10);
    rect(140,340,40,40,10);
    rect(200,240,120,40,10);
    textSize(25);
    fill(0, 0, 0);
    text("Start!",225,270);
    strokeWeight(1);
    stroke(0, 0, 0);
    for(var i = 0; i < x.length; i ++){
        if(t[i] === 1){
            fill(0, 0, 0);
            ellipse(x[i],y[i],10,10);
        }
        if(t[i] === 2){
            fill(217, 255, 0);
            ellipse(x[i],y[i],10,10);
        }

    }
    if(fight === true){
        for(var i = 0; i < x.length; i ++){

        }
    }
};

mouseClicked = function(){
    if(mouseX > 20 && mouseX < 380 && mouseY > 20 && mouseY < 220){
        selected = true;
        selectx = round((mouseX - 10)/20);
        selecty = round((mouseY - 10)/20);

    }
    if(selected === true){
        if(mouseX > 20 && mouseX < 60 && mouseY > 240 && mouseY < 280){
            x.push(10 + selectx * 20);
            y.push(10 + selecty * 20);
            t.push(1);
            s.push(0.2);
            d.push(1);
        }
        if(mouseX > 80 && mouseX < 120 && mouseY > 240 && mouseY < 280){
            x.push(10 + selectx * 20);
            y.push(10 + selecty * 20);
            t.push(2);
            s.push(0.4);
            d.push(1);
        }
    }
    if(mouseX > 200 && mouseX < 300 && mouseY > 240 && mouseY < 280){
        background(255, 0, 0);
    }
};
