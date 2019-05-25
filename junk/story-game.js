var place = 0;
var if_yes = [1,3,5];
var if_no = [2,2,4];
var content = ["do you like clash of clans","join the clan: WraithSlayers! are you going to join?","I hate your guts. do you hate mine?","that makes me sad","why not? I hate you."];
textSize(15);
textFont(createFont("cursive"));
fill(0, 0, 0);
var draw = function() {
    background(135, 148, 199);
    text(content[place],10,20);
    text("Left = No , Right = Yes.",30,380);
};
keyReleased = function(){
    if(keyCode === LEFT){
        place = if_no[place];
    }
    if(keyCode === RIGHT){
        place = if_yes[place];
    }
};
