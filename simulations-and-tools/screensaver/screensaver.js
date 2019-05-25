var den = 100;
var r = 1;
var xpoint = [];
var ypoint = [];
var xmove = [];
var ymove = [];
for(var i = 0; i < den; i ++){
    xpoint.push(random(0 + r, 400 - r));
    ypoint.push(random(0 + r, 400 - r));
    xmove.push(random(-3,3));
    ymove.push(random(-3,3));



}
var draw = function() {
    background(0, 0, 0);
    fill(0, 0, 0);
    for(var i = 0; i < xpoint.length - 1; i ++){
            stroke(random(0,255),random(0,255),random(0,255),100);
            ellipse(xpoint[i],ypoint[i],r,r);
            strokeWeight(r);
            line(xpoint[i],ypoint[i],xpoint[i + 1],ypoint[i + 1]);
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
