var start_screen = function(){
    background(84, 108, 143);
};

var play_game = function(){

};

var plant_tree = function(){
    
};

var draw = function() {
    draw = start_screen;
};

var mouseClicked = function(){
    if(draw === start_screen){
        draw = play_game;
    }
    if(draw === play_game){

    }
};
