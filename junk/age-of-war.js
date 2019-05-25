{
fill(0, 51, 255);
rect(0,0,400,300);
fill(94, 94, 94);
rect(0,300,400,100);
fill(153, 153, 153);
rect(0,300,50,50);
rect(0,350,50,50);
rect(50,300,50,50);
rect(50,350,50,50);
rect(100,300,50,50);
rect(100,350,50,50);
rect(150,300,50,50);
rect(150,350,50,50);
}
var p1 = [];
var p2 = [];
var money = 100;
var cost1 = 10;
var pause = false;

var monster = function(x,w,h,s,a,health){
    var m = new Object(1);
    m.w = w;
    m.h = h;
    m.health = health;
    m.a = a;
    m.s = s;
    m.x = x;
    m.p = false;


    m.unpause = function(){
        this.p = false;
    };
    m.death = function(){
        for(var i = 1; i < p1.length; i++){
            if(p1[i].health < 0){
                background(255, 0, 0);
            }
        }
        for(var i = 1; i < p2.length; i++){

        }
    };
    m.action = function(){
        if(p1.length > 0 && p1[0].x > p2[0].x - 20){
            p1[0].pause();
            p2[0].pause();
        }
        for(var i = 1; i < p1.length; i++){
            if(p1[i].x > p1[i - 1].x - 20){
                p1[i].pause();
            }
        }
        for(var i = 1; i < p2.length; i++){
            if(p2[i].x < p2[i - 1].x + 20){
                p2[i].pause();
            }
        }
    };

  return m;
};

    monster.prototype.pause = function(){
        this.p = true;
    };
    monster.prototype.draw = function(){
       fill(238, 255, 0);
       rect(this.x,300,this.w,-this.h);
       fill(15, 10, 10);
       fill(51, 255, 0);
       rect(this.x,300 - (this.h + 10),this.health/10,5);
    };

var d = 0;


var draw = function() {
    fill(0, 51, 255);
    rect(0,0,400,300);
    fill(255, 255, 255);
    textSize(30);
    text(money,50,50);
    for (var i=0; i < p1.length; i++) {
        p1[i].draw();
        if(!p1[i].p){
            p1[i].x += p1[i].s;
        }
        p1[i].action();
    }
    for (var i=0; i < p2.length; i++) {
        p2[i].draw();
        if(!p2[i].p){
            p2[i].x -= p2[i].s;
        }
        p2[i].action();
    }



};
mouseClicked = function(){
    if(mouseX > 0 && mouseX < 50 && mouseY > 300 && mouseY < 350 && money >= cost1){
        money -= cost1;
        p1.push(monster(-10,10,10,1,5,100));
        p2.push(monster(410,10,10,1,5,100));
    }
};
