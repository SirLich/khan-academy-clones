var map_tiles = [];
draw = function() {
    background(255, 0, 0);
    for(var i = 0; i < sqrt(map_tiles.length); i ++){
        for(var j = 0; j < sqrt(map_tiles.length); i ++){
            ellipse(i * width/sqrt(map_tiles.length),j * height/sqrt(map_tiles.length);
        }
    }
};
mouseReleased = function()
{

};
