//Fighting fish!
var rand = function(min,max){
    return floor(random(min,max));
};
var fish = [
    {
        scales: 5, //armour        1-10 for everything
        eyes: 5,   //def speed
        fins: 5,   //atk speed
        spines: 1, //atk damage
        poison: 5, //poison atk
        slime: 5,  //poison def
        health: 5, //total health
        size: 75,  //size
        x: 200,    //xpos
        y: 100,     //ypos
        facing: "left"
    },
    {
        scales: 2, //armour        1-10 for everything
        eyes: 7,   //def speed
        fins: 5,   //atk speed
        spines: 1, //atk damage
        poison: 5, //poison atk
        slime: 10,  //poison def
        health: 5, //total health
        size: 75,  //size
        x: 100,    //xpos
        y: 200,     //ypos
        facing: "right"
    },
];
var tank = function(){
    background(94, 191, 255);
    for(var i = 0; i < fish.length; i ++){
        if(fish[i].facing === "right"){
            fill(0, 0, 0);
            triangle(fish[i].x + fish[i].size/2,fish[i].y + 3,fish[i].x + fish[i].size/2,fish[i].y - 3,fish[i].x + fish[i].size/2+ fish[i].spines * 5,fish[i].y);
            fill(0 + fish[i].slime * 20, 50 + fish[i].poison * 20, 25 + fish[i].scales * 20); // r g b
            ellipse(fish[i].x, fish[i].y,fish[i].size,fish[i].size / 2);
            fill(0, 0, 0);
            ellipse(fish[i].x + fish[i].size/4, fish[i].y,fish[i].eyes * 3,fish[i].eyes * 3);
            fill(255, 255, 255);
            ellipse(fish[i].x + fish[i].size/4 + fish[i].eyes , fish[i].y,fish[i].eyes,fish[i].eyes);
            fill(0 + fish[i].slime * 20,0, 25 + fish[i].scales * 20); // r g b
            triangle(fish[i].x,fish[i].y,fish[i].x-5-fish[i].fins,fish[i].y+10+fish[i].fins,fish[i].x+5+fish[i].fins,fish[i].y+10+fish[i].fins);
            triangle(fish[i].x-fish[i].size/2,fish[i].y,fish[i].x-fish[i].size,fish[i].y+fish[i].size/4,fish[i].x-fish[i].size,fish[i].y-fish[i].size/2);
        }
        else{
            fill(0, 0, 0);
            triangle(fish[i].x - fish[i].size/2,fish[i].y - 3,fish[i].x - fish[i].size/2,fish[i].y + 3,fish[i].x - fish[i].size/2- fish[i].spines * 5,fish[i].y);
            fill(0 + fish[i].slime * 20, 50 + fish[i].poison * 20, 25 + fish[i].scales * 20); // r g b
            ellipse(fish[i].x, fish[i].y,fish[i].size,fish[i].size / 2);
            fill(0, 0, 0);
            ellipse(fish[i].x - fish[i].size/4, fish[i].y,fish[i].eyes * 3,fish[i].eyes * 3);
            fill(255, 255, 255);
            ellipse(fish[i].x - fish[i].size/4 - fish[i].eyes , fish[i].y,fish[i].eyes,fish[i].eyes);
            fill(0 + fish[i].slime * 20,0, 25 + fish[i].scales * 20); // r g b
            triangle(fish[i].x,fish[i].y,fish[i].x-5-fish[i].fins,fish[i].y+10+fish[i].fins,fish[i].x+5+fish[i].fins,fish[i].y+10+fish[i].fins);
            triangle(fish[i].x+fish[i].size/2,fish[i].y,fish[i].x+fish[i].size,fish[i].y+fish[i].size/4,fish[i].x+fish[i].size,fish[i].y-fish[i].size/2);
        }
        fish[i].x += random(-0.5,0.5);
        fish[i].y += random(-0.5,0.5);

    }

};

draw = function() {
    draw = tank;
};
/*mouseClicked = function(){
    fish.push({scales:rand(1,10), eyes:rand(1,10), fins:rand(1,10), spines:rand(1,10), poison:rand(1,10), slime:rand(1,10), health:10, size:75, x:rand(1,400), y:rand(1,400)});
};
*/
