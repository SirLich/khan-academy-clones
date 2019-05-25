var line_scale = 10;
var pick_color = false;

for(var i = 0; i <= 400/line_scale; i ++){
    stroke(0, 0, 0);
    strokeWeight(0.5);
    line(0,i * line_scale,400,i * line_scale);
    line(i * line_scale, 0, i * line_scale,400);
}

var draw = function() {
    if(pick_color === true){

    }
};
mouseClicked = function(){
    if(mouseButton === 'RIGHT'){
        pick_color = true;
    }
    else{
        //more here
    }
};
