/**
 * Click to change brains!
 * This Program is designed to simulate a brain. all the dots represent nuerons, and the
 * lines conecting them represent thoughts, in the form of synopis.
 * this program simulates a brain cancer.
 * all healthry nuerons are filled green.
 * while the cancerus one is filled red.
 * the brain is dead when all the nuerons died.
 * change health if you want more resistance to the cancer.
 * a number between 1 and 100 is suggested.
 *
 * CHANGE THE VARIABLES \/ \/ \/
**/

var health = 10;//change the health!

var rand = true; //Setting this to true will allow you to click and get a random simulation.
var den = 75;  //This is the density of the nuerons in the brain (how many dots)
var r = 1;     //This is how thick the thoughts are displayed.   (how thick the lines are)
var big = 3;   //This changes time to show the brain at a slower or faster pace (moving speed)
var space = 75;//This is how close the nuerons have to be to connect and make a thought.
var xpoint = [];
var ypoint = [];
var xmove = [];
var ymove = [];
var life = [];
var small = - big;
var infect = 1;

for(var i = 0; i < den; i ++){
    xpoint.push(random(0 + r, 400 - r));
    ypoint.push(random(0 + r, 400 - r));
    xmove.push(random(small,big ));
    ymove.push(random(small,big ));
    life.push(health);
}
var draw = function() {
    //xpoint[xpoint.length] = mouseX;
    //ypoint[ypoint.length] = mouseY;
    background(0, 0, 0);
    fill(111, 255, 0);
    strokeWeight(r);
    for(var i = 0; i < xpoint.length; i ++){
            for(var j = i + 1; j < xpoint.length; j ++){
                 stroke(81, 255, 0);
                 if(i === infect || j === infect){
                    stroke(255, 0, 0);

                 }
                 if(sqrt((sq(xpoint[i] - xpoint[j])+sq(ypoint[i] - ypoint[j]))) < space && life[i] > 0){

                    line(xpoint[i],ypoint[i],xpoint[j],ypoint[j]);
                    if(i === infect){
                        life[j] -= 1;
                    }
                    if(j === infect){
                        life[i] -= 1;
                    }
                }
            }
    }

    for(var i = 0; i < xpoint.length; i ++){
            stroke(xpoint[i] - xpoint[i - 1], xpoint[i] - xpoint[i - 1],255);
            if(life[i] > 0){
                ellipse(xpoint[i],ypoint[i],r,r);
            }
            xpoint[i] += xmove[i];
            ypoint[i] += ymove[i];
            if(xpoint[i] < 0 + r){
                xmove[i] = (- xmove[i]);
            }
            if(xpoint[i] > 400 - r){
                xmove[i] = (- xmove[i]);
            }
            if(ypoint[i] > 0 + r){
                ymove[i] = (- ymove[i]);
            }
            if(ypoint[i] < 400 - r){
                ymove[i] = (- ymove[i]);
            }
    }

};
mouseClicked = function(){
    if(rand === true){
        var xpoint = [];
        var ypoint = [];
        var xmove = [];
        var ymove = [];
        den = floor(random(5,100));
        r = random(0.01,5);
        big = random(0.01,20);
        space = floor(random(5,100));
        for(var i = 0; i < den; i ++){
            xpoint.push(random(0 + r, 400 - r));
            ypoint.push(random(0 + r, 400 - r));
            xmove.push(random(small,big ));
            ymove.push(random(small,big ));
        }
    }

};
