var guess = [1,6,6,6];
var colors = [6,6,5,5];
var saved = [0,0,0,0];
var peg_info = [];
var draw = function() {
    background(0, 255, 255);
    for(var i = 0; i < 4; i ++){
        textSize(20);
        fill(0, 0, 0);
        text(peg_info[i],150 + i * 20,200);
        text(colors[i],150 + i * 20,230);
        text(guess[i],150 + i * 20,260);
        text(saved[i],150 + i * 20,290);
    }
    textSize(20);
    text("Peg info",20,200);
    text("Colors",20,230);
    text("Guess",20,260);
    text("saved",20,290);
};
mouseClicked = function(){

    for(var i = 0; i < 4; i ++){
        var temp_save = false;
        var black = false;
        var skip = false;
        for(var j = 0; j < 4; j ++){
            if(guess[i] === colors[j] && saved[j] === 0 && skip === false){
                temp_save = true;
                saved[j] = 1;
                skip = true;
                if(j === i){
                    black = true;

                }
            }
        }
        if(temp_save === true){
            if(black === false){
                peg_info.push(1);
                temp_save = false;
                black = false;
            }
            else{
                peg_info.push(2);
                temp_save = false;
                black = false;
            }
        }
        else{
            peg_info.push(0);
            temp_save = false;
            black = false;
        }
    }
};
