background(158, 142, 142);
var x = [];
var y = [];
var count = 0;
var frst = true;
var place = function(){
    stroke(random(0,255), random(0,255), random(0,255),100);
    fill(0, 0, 0);
    ellipse(x[count],y[count],20,20);
    ellipse(x[count + 1],y[count + 1],20,20);
    strokeWeight(10);
    line(x[count],y[count],x[count + 1],y[count + 1]);
    strokeWeight(1);
    count ++;
    frst = true;
};
mouseClicked = function(){
    x.push(mouseX);
    y.push(mouseY);
    if(frst === false){
        place();
    }
    frst = false;
};
