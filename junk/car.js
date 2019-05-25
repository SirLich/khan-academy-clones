var keys = [];
var map_tiles = [];
var tile_size = width * 4;
var line_size = 114;
for(var i = 0; i < 32 ;i ++){
    map_tiles.push(round(random(1,2)));
}
/*
var car_x = 200;
var car_y = 200;
var car_angle = 90;
var car_width = 30;
var car_height = 50;
var car_speed = 0;
var car_handling = 2;
var car_max_speed = 10;
var car_acceleration = 0.1;
*/

var Car = function(x,y,a,w,h,s,ha,ms,ac,d){
    this.x = x;
    this.y = y;
    this.angle = a;
    this.width = w;
    this.height = h;
    this.speed = s;
    this.handling = ha;
    this.maxspeed = ms;
    this.acceleration = ac;
    this.drift = d;
};

Car.prototype.display = function(){
    fill(0, 0, 0);
    rect(0 - this.height/2.5,0 - this.width/1.6,this.height/5,this.width,2);
    rect(0 - this.height/2.5,0 - this.width/2.5,this.height/5,this.width,2);
    rect(0 + this.height/5,0 - this.width/1.6,this.height/5,this.width,2);
    rect(0 + this.height/5,0 - this.width/2.5,this.height/5,this.width,2);
    fill(0, 34, 255);
    rect(0 - this.height/2,0 - this.width/2,this.height,this.width,5);
};

var tile1 = function(x,y){
    fill(24, 97, 0);
    rect(x,y,tile_size,tile_size);
    fill(92, 92, 92);
    rect(x + tile_size/11 * 5,y,tile_size/11,tile_size);
    rect(x,y + tile_size/11 * 5,tile_size,tile_size/11);
    fill(255, 221, 0);
    rect(x + tile_size/2 - tile_size/800,y,tile_size/800,tile_size);
    rect(x + tile_size/2 + tile_size/800,y,tile_size/800,tile_size);
    rect(x, y + tile_size/2 - tile_size/800,tile_size,tile_size/800);
    rect(x, y + tile_size/2 + tile_size/800,tile_size,tile_size/800);
    for(var i = 0; i < tile_size/(line_size*2); i ++){
        fill(255, 255, 255);
        rect(x + tile_size/2 - tile_size/44, y + i * line_size * 2,2,line_size);
        rect(x + tile_size/2 + tile_size/44, y + i * line_size * 2,2,line_size);
        rect(x + i * line_size * 2, y + tile_size/2 - tile_size/44,line_size,2);
        rect(x + i * line_size * 2, y + tile_size/2 + tile_size/44,line_size,2);
    }
    fill(92, 92, 92);
    rect(x + tile_size/2 - tile_size/22, y + tile_size/2 - tile_size/22, tile_size/11, tile_size/11);
};
var tile2 = function(x, y){
    fill(24, 97, 0);
    rect(x,y,tile_size,tile_size);
    fill(92, 92, 92);
    rect(x + tile_size/11 * 5,y,tile_size/11,tile_size/2);
    rect(x, y + tile_size/11 * 5,tile_size,tile_size/11);
    fill(255, 221, 0);
    rect(x + tile_size/2 - tile_size/800,y,tile_size/800,tile_size/2);
    rect(x + tile_size/2 + tile_size/800,y,tile_size/800,tile_size/2);
    rect(x, y + tile_size/2 - tile_size/800,tile_size,tile_size/800);
    rect(x, y + tile_size/2 + tile_size/800,tile_size,tile_size/800);
    for(var i = 0; i < tile_size/(line_size*2)/2; i ++){
        fill(255, 255, 255);
        rect(x + tile_size/2 - tile_size/44, y + i * line_size * 2,2,line_size);
        rect(x + tile_size/2 + tile_size/44, y + i * line_size * 2,2,line_size);
    }
    for(var i = 0; i < tile_size/(line_size*2); i ++){
        fill(255, 255, 255);
        rect(x + i * line_size * 2, y + tile_size/2 - tile_size/44,line_size,2);
        rect(x + i * line_size * 2, y + tile_size/2 + tile_size/44,line_size,2);
    }
    fill(92, 92, 92);
    rect(x + tile_size/2 - tile_size/22, y + tile_size/2 - tile_size/22, tile_size/11, tile_size/11);
    rect(x + tile_size/2 - tile_size/22, y + tile_size - 400,600,400);
    for(var i = 0; i < 11; i ++){
        fill(255, 255, 255);
        rect(x + tile_size/2 - tile_size/44 + i * 50, y + tile_size - 400,2,60);
    }
    for(var i = 0; i < 7; i ++){
        fill(255, 255, 255);
        rect(x + 200 + tile_size/2 - tile_size/44 + i * 50, y + tile_size - 60,2,60);
    }
    for(var i = 0; i < 9; i ++){
        fill(255, 255, 255);
        rect(x + 50+ tile_size/2 - tile_size/44 + i * 50, y + tile_size - 250,2,120);
    }
    rect(x - 400+ tile_size/2 - tile_size/44 + i * 50, y + tile_size - 190,400,2);

};

var my_car = new Car(0,0,90,30,50,0,0.1,12,0.02,0);

var draw_map = function(x,y){
    noStroke();
    for(var i = 0; i < round(sqrt(map_tiles.length)); i ++){
        for(var j = 0; j < round(sqrt(map_tiles.length)); j ++){
            if(map_tiles[i * j] === 1){
                tile1(x + i * tile_size, y + j * tile_size, 1);
            }
            else if(map_tiles[i * j] === 2){
                tile2(x + i * tile_size, y + j * tile_size, 2);
            }
        }
    }
};
draw = function() {
    my_car.x += my_car.speed * cos(my_car.angle);
    my_car.y += my_car.speed * sin(my_car.angle);
    my_car.x += my_car.momentum * cos(my_car.mangle);
    my_car.y += my_car.momentum * sin(my_car.mangle);
    background(0, 204, 255);
    draw_map(my_car.x,my_car.y);
    pushMatrix();
        translate(width/2,height/2);
        rotate(my_car.angle);
        my_car.display();
        fill(255, 255, 255);
    popMatrix();
    if(my_car.angle < 0){
        my_car.angle += 360;
    }
    if(my_car.angle > 360){
        my_car.angle -= 360;
    }
    println(my_car.angle);
    if(keys[RIGHT]){
        my_car.angle += my_car.handling;
    }
    if(keys[LEFT]){
        my_car.angle -= my_car.handling;
    }
    if(keys[UP] && my_car.speed < my_car.maxspeed){
        my_car.speed += my_car.acceleration;
    }
    if(keys[DOWN] && my_car.speed > -my_car.maxspeed){
        my_car.speed -= my_car.acceleration;
    }
    if(my_car.speed > 0){
        my_car.speed -= 0.01;
        my_car.momentum -= 0.05;
    }
};
keyPressed = function(){
    keys[keyCode] = true;
};
keyReleased = function(){
    delete keys[keyCode];
};
