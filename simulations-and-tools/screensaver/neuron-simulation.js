/**
 * This Program is designed to simulate a brain. all the dots represent nuerons, and the lines
 * conecting them represent thoughts, in the form of synopis.
 * to make this a more interactive simnulation, I have made the variables more exesible.
 * a brain with less thoughts per nueron may have dementia, or another cerebal deficancy.
 * brains with lots of thoughts per nueron shows a healthy brain.
 * and finaly brains showing TONS of nuerons will be simulating a babys brain in the first few months of learning: a time when the brain is most active.
 * note: if there are no thoughts, then the brain being simulated is dead.
 *
 * CHANGE THE VARIABLES \/ \/ \/
**/

var rand = true; //Setting this to true will allow you to click and get a random simulation.
var den = 75;  //This is the density of the nuerons in the brain (how many dots)
var r = 1;     //This is how thick the thoughts are displayed.   (how thick the lines are)
var big = 3;   //This changes time to show the brain at a slower or faster pace (moving speed)
var space = 75;//This is how close the nuerons have to be to connect and make a thought.
var xpoint = [];
var ypoint = [];
var xmove = [];
var ymove = [];
var small = - big;

for(var i = 0; i < den; i ++){
    xpoint.push(random(0 + r, 400 - r));
    ypoint.push(random(0 + r, 400 - r));
    xmove.push(random(small,big ));
    ymove.push(random(small,big ));
}
var draw = function() {
    //xpoint[xpoint.length] = mouseX;
    //ypoint[ypoint.length] = mouseY;
    background(0, 0, 0);
    fill(166, 103, 166);
    strokeWeight(r);
    for(var i = 0; i < xpoint.length; i ++){
            for(var j = i + 1; j < xpoint.length; j ++){
                 if(sqrt((sq(xpoint[i] - xpoint[j])+sq(ypoint[i] - ypoint[j]))) < space){
                    stroke(xpoint[i] - xpoint[j]/2, xpoint[i] - xpoint[j]/2,255);
                    line(xpoint[i],ypoint[i],xpoint[j],ypoint[j]);
                }
            }
    }

    for(var i = 0; i < xpoint.length; i ++){
            stroke(xpoint[i] - xpoint[i - 1], xpoint[i] - xpoint[i - 1],255);
            ellipse(xpoint[i],ypoint[i],r,r);
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
