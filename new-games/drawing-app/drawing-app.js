//click on the colors at the top to change the color, and click on the botom numbers to change the paint size. have fun!




//-----------vars-----------------
var paintSize = 20;
var color1 = 0;
var color2 = 0;
var color3 = 0;

//------------------------the paintColor finder ( 1, 2 and 3)------------------

var mouseClicked = function(){
    if(mouseX < 50 && mouseX > 0 && mouseY > 0 && mouseY <50){
        color1 = 255;
        color2 = 0;
        color3 = 0;

    }
    if(mouseX < 100 && mouseX >50 && mouseY > 0 && mouseY <50){
        color1 = 247;
        color2 = 13;
        color3 = 216;
    }
    if(mouseX < 150 && mouseX >100 && mouseY > 0 && mouseY <50){
        color1 = 12;
        color2 = 12;
        color3 = 240;
    }

    if(mouseX < 200 && mouseX >150 && mouseY > 0 && mouseY <50){
        color1 = 250;
        color2 = 338;
        color3 = 5;
    }
    if(mouseX < 250 && mouseX >200 && mouseY > 0 && mouseY <50){
        color1 = 70;
        color2 = 242;
        color3 = 12;
    }
    if(mouseX < 300 && mouseX >250 && mouseY > 0 && mouseY <50){
        color1 = 255;
        color2 = 255;
        color3 = 255;
    }
    if(mouseX < 350 && mouseX >300 && mouseY > 0 && mouseY <50){
        color1 = 0;
        color2 = 0;
        color3 = 0;
    }
    if(mouseX < 400 && mouseX >350 && mouseY > 0 && mouseY <50){
        color1 = 224;
        color2 = 103;
        color3 = 38;
    }
    if(mouseX > 0 && mouseX <50 && mouseY < 400 && mouseY > 350){
        paintSize = 1;
    }
    if(mouseX > 50 && mouseX <100 && mouseY < 400 && mouseY > 350){
        paintSize = 3;

    }
    if(mouseX > 100 && mouseX <150 && mouseY < 400 && mouseY > 350){
        paintSize = 5;
    }
    if(mouseX > 150 && mouseX <200 && mouseY < 400 && mouseY > 350){
        paintSize = 8;
    }
     if(mouseX > 200 && mouseX <250 && mouseY < 400 && mouseY > 350){
        paintSize = 10;
    }
     if(mouseX > 250 && mouseX <300 && mouseY < 400 && mouseY > 350){
        paintSize = 15;
    }
     if(mouseX > 300 && mouseX <350 && mouseY < 400 && mouseY > 350){
        paintSize = 30;
    }
     if(mouseX > 350 && mouseX <400 && mouseY < 400 && mouseY > 350){
        paintSize = 50;
    }

};


//---------------------------colors----------------------------------

fill(255, 0, 0);// red fill
rect(0,0,50,50);//red rec

fill(247, 13, 216);//pink fill
rect(50,0,50,50);//pink rec

fill(12, 12, 240);//blue fill
rect(100,0,50,50);//blue rec

fill(250, 238, 5);//yellow fill
rect(150,0,50,50);//yellow rec

fill(70, 242, 12);//green fill
rect(200,0,50,50);//green rec

fill(255, 255, 255);//white fill
rect(250,0,50,50);//white rec

fill(0, 0, 0);//black fill
rect(300,0,50,50);//black rec

fill(224, 103, 38);//brown fill
rect(350,0,50,50);//brown rec

//--------------------------paint brush size--------------------------------
stroke(0, 0, 0);
fill(8, 8, 8);
rect(0,350,400,50);//bottom rec
fill(89, 213, 217);
textSize(30);

rect(0,350,50,50);//1
rect(50,350,50,50);//2
rect(100,350,50,50);//3
rect(150,350,50,50);//4
rect(200,350,50,50);//5
rect(250,350,50,50);//6
rect(300,350,50,50);//7
rect(350,350,50,50);//8

textSize(35);
fill(10, 9, 9);
text("1",8,385);
text("2",58,385);
text("3",116,385);
text("4",170,385);
text("5",220,385);
text("6",270,385);
text("7",320,385);
text("8",370,385);

//-------------------------------painting drawloop-------------------------
frameRate(10000);
noStroke();
draw = function() {
    if(mouseY <350-paintSize/2 && mouseY > 50 + paintSize/2 && mouseIsPressed){
        fill(color1, color2, color3);
        ellipse(mouseX,mouseY,paintSize, paintSize);
    }
};

//---------------------------paint color 'if statment' changer--------------------
