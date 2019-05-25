// Pumpkin carving contest!
// Spin-off this program and carve something in the pumpkin.
// We'll show the coolest ones on our Facebook page.

background(0, 0, 0);
noStroke();

// header
textAlign(CENTER, TOP);
textFont(createFont("serif"));
textSize(30);
text("Pumpkin Lit With Candles!", width/2, 0);

// concrete
fill(33, 33, 33);
rect(0, 265, width, 200);

// pumpkin center
var pumpkinY = 232;
var pumpkinHeight = 250;

// pumpkin stem
fill(21, 69, 0);
stroke(3, 69, 0);
var stemHeight = pumpkinHeight/10;
var stemY = pumpkinY - pumpkinHeight/2 - stemHeight;
quad(width/2-stemHeight/2, stemY,
     width/2+stemHeight/2, stemY,
     width/2+stemHeight, stemY+stemHeight*2,
     width/2-stemHeight, stemY+stemHeight*2);

// pumpkin body
fill(31, 19, 0);
stroke(255, 119, 0);
ellipse(width/2-pumpkinHeight/3, pumpkinY+10, pumpkinHeight/3, pumpkinHeight*0.8);
ellipse(width/2+pumpkinHeight/3, pumpkinY+10, pumpkinHeight/3, pumpkinHeight*0.8);
ellipse(width/2+pumpkinHeight/5, pumpkinY+5, pumpkinHeight/3, pumpkinHeight*0.9);
ellipse(width/2-pumpkinHeight/5, pumpkinY+5, pumpkinHeight/3, pumpkinHeight*0.9);
ellipse(width/2, pumpkinY+7, pumpkinHeight/2, pumpkinHeight*0.95);


// your carving! what will you carve?
noStroke();

stroke(0, 0, 0);
fill(255, 0, 0);
ellipse(150,200,50,25);
ellipse(250,200,50,25);
noStroke();
triangle(100,250,200,290,200,310);
triangle(300,250,200,290,200,310);
ellipse(180,250,15,20);
ellipse(220,250,15,20);


noStroke();
fill(255, 132, 0);
ellipse(150,200,40,25);
ellipse(250,200,40,25);
triangle(120,260,200,290,200,310);
triangle(280,260,200,290,200,310);

triangle(110,160,170,175,175,170);
triangle(290,160,225,175,220,170);

fill(255, 213, 0);
ellipse(150,200,30,20);
ellipse(250,200,30,20);
triangle(140,270,200,290,200,310);
triangle(260,270,200,290,200,310);
rect(185,285,30,10);
ellipse(180,250,10,15);
ellipse(220,250,10,15);


fill(31, 19, 0);
rect(180,300,50,10);
