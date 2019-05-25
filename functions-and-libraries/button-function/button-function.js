// x = x position
// y = y position
// r = radius of the circle
// words = text on button

var new_mouse_press = false;
var old_mouse_setting = false;

var draw_button = function(){
    fill(this.color[0], this.color[1], this.color[2]);
    ellipse(this.x,this.y,this.r,this.r);
    fill(0, 0, 0);
    text(this.words,this.x,this.y);
};

var is_in_button = function() {
    if (sqrt(sq(mouseX - this.x)+sq(mouseY - this.y)) < this.r/2 && new_mouse_press){
        switch (this.action_type) {
            case 1:
                this.color = [random(0, 255), random(0, 255), random(0, 255)];
                this.x = random (50, 350);
                this.y = random (50, 350);
                this.action_type = 1;
                break;
            case 2:
                this.x ++;
                this.y ++;
                break;
            default:
                break;
        }
    }
};

var button = function(x,y,r,words, action_type){
    var object = new Object("button");
    object.x = x;
    object.y = y;
    object.r = r;
    object.action_type = action_type;
    object.color = [255, 0, 0];
    object.words = words;
    object.draw_button = draw_button;
    object.is_in_button = is_in_button;
    object.action_type = action_type;
    return object;
};

var blist = [];
blist.push (button(150,50,50,"one?", 1));
blist.push (button(50,50,50,"one?", 1));

var draw = function() {
    if (old_mouse_setting && mouseIsPressed){
        new_mouse_press = true;
    }
    old_mouse_setting = mouseIsPressed;

    background(160, 222, 124);
    for (var i=0; i < blist.length; i++) {
        blist[i].draw_button();
    }

    for (var i=0; i < blist.length; i++) {
        blist[i].is_in_button();
    }

    new_mouse_press = false;
    if (this.action_type === 1){
        background(255, 0, 0);
    }
};
/*
//***************************middle circle
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

*/
