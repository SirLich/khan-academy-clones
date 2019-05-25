var laser_on = false;
var dead = false;
var base_y = 300;
var rect_hight = 40;
var rect_width = 20;
var barrier_speed = -2;

var trans_x = function (delta) {
    this.x += delta;
};

var trans_y = function (delta) {
    this.y += delta;
};

var draw_rect = function () {
    fill(this.c[0], this.c[1], this.c[2]);
    rect (this.x, this.y, this.w, this.h);
};

var in_rect = function (x, y) {
    return x >= this.x && x <= this.x+this.w && y <= this.y && y >= this.y+this.h;

};

var overlaps = function (s) {
    return s.in_rect (this.x, this.y) ||
        s.in_rect (this.x, this.y+this.h) ||
        s.in_rect (this.x+this.w, this.y) ||
        s.in_rect (this.x+this.w, this.y+this.h);
};

var new_rect = function(x, y, w, h, c) {
    var r = new Object(1);
    r.x = x;
    r.y = y;
    r.w = w;
    r.h = h;
    r.c = c;
    r.trans_x = trans_x;
    r.trans_y = trans_y;
    r.draw = draw_rect;
    r.overlaps = overlaps;
    r.in_rect = in_rect;
    return r;
};

var new_barrier = function (t, x) {
    var b = new Object (1);
    b.type = t;
    b.r = [];
    switch (t) {
        case 1:
            b.r.push(new_rect (x, base_y, rect_width, -rect_hight,[156, 121, 69]));
            b.r.push(new_rect (x, base_y -2.3*rect_hight, rect_width, -rect_hight,[156, 121, 69]));

            break;
        case 2:
            b.r.push(new_rect (x, base_y, rect_width, -rect_hight*2,[156, -43, 122]));
            break;
        case 3:
            b.r.push(new_rect (x, base_y-15, rect_width, -3*rect_hight,[156, 121, 69]));
            break;
        case 4:
            for (var i=0; i<25; i++) {

                b.r.push (new_rect (x, base_y-i*10, rect_width, -5,[i*10, i*10, 255]));

            }
            break;

    }
    return b;
};

var justjumped = 0;
var smallJump = 0;

var s1 = 1;
var s2 = 1;

var snowball = 100;
var barriers = [];

for (var i = 0 ; i < snowball ; i += 1){
    barriers.push (new_barrier (floor(random(1,4.99)), 400+150*i));
}

var guy = new_rect (175, base_y, rect_width, -rect_width,[0, 0, 0]);

var points = 0;

var life = 2000; //number of lives you have before you die





draw = function() {
    if (dead){
        //background(122, 12, 196);
        textSize(100);
        fill(0, 0, 0);
        text("you died",15,200);
        //text(score,15,300)
        return;
    }


    background(108, 153, 245);

    guy.draw();


    fill(66, 189, 38);
    rect(0,base_y,400,100);
    textSize(30);
    text(smallJump, 30,30);
    text(justjumped,30,60);


    for(var i = 0 ; i < barriers.length ;  i += 1){

        for (var j=0; j < barriers[i].r.length; j++) {
            barriers[i].r[j].draw();
            barriers[i].r[j].trans_x (barrier_speed);
            if (barriers[i].r[j].overlaps (guy)||guy.overlaps(barriers[i].r[j])) {
                if (! (laser_on && barriers[i].type === 4)) {
                    dead = true;
                }
            }
        }
    }

    guy.trans_y (-smallJump);

   if(justjumped===1){
         smallJump -= 0.20;
   }
   if(justjumped===2){
       smallJump -= 0.20;
   }
   if(justjumped===3){
       smallJump=0;
       //y[i] = y[i]/2;
   }

   if(guy.y>=base_y){
    smallJump = 0;
    justjumped=0;
    guy.y=base_y;
   }





};

var keyReleased = function(){
    if(keyCode===LEFT&&justjumped===0){
    smallJump = 5;
    justjumped = 1;
    }
    if(keyCode===UP&&justjumped===0){
        smallJump = 6.6;
        justjumped = 2;

    }
    if(keyCode===DOWN&&justjumped===0){
        guy.h = -20;
    }
    if(keyCode===RIGHT&&justjumped===0){
        laser_on = false;
        guy.c = [0,0,0];

    }

};
var keyPressed = function(){
        if(keyCode===DOWN&&justjumped===0){
        guy.h = -9;
    }
        if(keyCode===RIGHT&&justjumped===0){
        laser_on = true;
        guy.c = [255, 200, 0];
    }
};
