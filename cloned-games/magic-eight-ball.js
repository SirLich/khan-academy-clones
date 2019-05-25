


background(47, 255, 0);
fill(26, 0, 255);
ellipse(200,200,300,300);
fill(0, 255, 4);
ellipse(200,200,290,300);
fill(0, 13, 255);
ellipse(200,200,280,300);
fill(17, 255, 0);
ellipse(200,200,270,300);
fill(26, 0, 255);
ellipse(200,200,260,300);
fill(60, 255, 0);
ellipse(200,200,250,300);
fill(43, 0, 255);
ellipse(200,200,240,300);
fill(55, 255, 0);
ellipse(200,200,230,300);
fill(13, 0, 255);
ellipse(200,200,220,300);

fill(13, 0, 255);
ellipse(50,50,85,85);
fill(89, 255, 0);
ellipse(50,50,75,75);

fill(13, 0, 255);
ellipse(350,50,85,85);
fill(89, 255, 0);
ellipse(350,50,75,75);

fill(13, 0, 255);
ellipse(50,350,85,85);
fill(89, 255, 0);
ellipse(50,350,75,75);

fill(13, 0, 255);
ellipse(350,350,85,85);
fill(89, 255, 0);
ellipse(350,350,75,75);

textSize(17);
fill(0, 26, 255);
text("magic",25,44);
text("8 ball",25,60);

textSize(17);
text("random",322,44);
text("number",322,60);

textSize(17);
text("random",322,344);
text("color",322,360);

textSize(17);
text("random",25,344);
text("animal",25,360);

var top_left = ["the answer is foggy","the answer is no","the answer is yes","who can know the answer","ask again later","even i cannot tell","i am not positive","it seams like a yes","it seams like a no","it is hard to tell","i wish i knew","this is an imposible question","you should not know the answer"];

var bottom_left = ["dog","cat","bat","bird","ostrich","flamingo","black lab","rhino","cow","chicken","tiger","elephant","lion","cheeta"];

var nmp = false;
//nmp = new mouse pressed

var oms = false;
//oms = old mouse setting
draw = function() {

    if (! oms && mouseIsPressed){
        nmp = true;
    }

    oms = mouseIsPressed;


    //magic eight ball if statement.
    if (sqrt(sq(mouseX - 50)+sq(mouseY - 50)) < 75/2 && nmp){
        fill(13, 0, 255);
        ellipse(200,200,220,300);
        textSize(15);
        var a = floor(random(0,top_left.length));
        fill(255, 255, 255);
        text(top_left[a],100,200);
        text("my friend...",100,225);

    }


    //random animal.
    if (sqrt(sq(mouseX - 50)+sq(mouseY - 350)) < 75/2 && nmp){
        fill(13, 0, 255);
        ellipse(200,200,220,300);
        textSize(30);
        var a = floor(random(0,bottom_left.length));
        fill(255, 255, 255);
        text(bottom_left[a],100,200);


    }

        //random color
    if (sqrt(sq(mouseX - 350)+sq(mouseY - 350)) < 75/2 && nmp){
        fill(13, 0, 255);
        ellipse(200,200,220,300);
        textSize(30);
        var a = floor(random(0,255));
        var b = floor(random(0,255));
        var c = floor(random(0,255));
        fill(a,b,c);
        ellipse(200,200,100,100);



    }



            //random color
    if (sqrt(sq(mouseX - 350)+sq(mouseY - 50)) < 75/2 && nmp){
        fill(13, 0, 255);
        ellipse(200,200,220,300);
        textSize(30);
        var a = random(0,100000);
        fill(255, 255, 255);
        text(a,110,200);



    }

    if (sqrt(sq(mouseX - 350)+sq(mouseY-50)) < 75/2){
        fill(0, 255, 242);
        ellipse(350,50,85,85);
        fill(255, 0, 217);
        ellipse(350,50,75,75);
    }

    if (sqrt(sq(mouseX - 50)+sq(mouseY-50)) < 75/2){
        fill(0, 255, 242);
        ellipse(50,50,85,85);
        fill(255, 0, 217);
        ellipse(50,50,75,75);
    }

    if (sqrt(sq(mouseX - 350)+sq(mouseY-350)) < 75/2){
        fill(0, 255, 242);
        ellipse(350,350,85,85);
        fill(255, 0, 217);
        ellipse(350,350,75,75);
    }

    if (sqrt(sq(mouseX - 50)+sq(mouseY-350)) < 75/2){
        fill(0, 255, 242);
        ellipse(50,350,85,85);
        fill(255, 0, 217);
        ellipse(50,350,75,75);

    }




    nmp = false;












};
