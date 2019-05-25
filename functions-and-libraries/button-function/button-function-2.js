var button = function(x,y,w,h,msg,action){
  var b = new Object(1);
  b.x = x;
  b.y = y;
  b.w = w;
  b.h = h;
  b.msg = msg;
  b.action = action;
  b.draw = function(){
      fill(255, 0, 0);
       rect(this.x,this.y,this.w,this.h);
       fill(15, 10, 10);
       text(msg,this.x,this.y);
  };
  b.in_button = function(x,y){
      return x > this.x && x < this.x + this.w && y > this.y && y < this.y + h;
  };
  return b;
};

var draw2;
var draw1;

var action1 = function(){
    background(0, 21, 255);
};

var action2 = function(){
    background(0, 255, 9);
};

var action3 = function(){
    background(255, 255, 255);
    draw = draw1;
};

var action4 = function(){
    background(255, 255, 255);
    draw = draw2;
};


var buttons = [];
buttons.push(button(200,100,30,40,"hello", action1));
buttons.push(button(100,150,30,40,"bye", action2));
buttons.push(button(300,200,30,40,"what?", action4));
buttons.push(button(150,200,30,80,"hsss?", action2));

var buttons2 = [];
buttons2.push(button(200,100,30,40,"sdfdsf", action1));
buttons2.push(button(100,150,30,40,"sfds", action2));
buttons2.push(button(150,200,30,80,"hsss?", action3));

var my_buttons;

var mouseClicked = function(){
    for (var i=0; i < my_buttons.length; i++) {
        if (my_buttons[i].in_button(mouseX, mouseY)){
            my_buttons[i].action();
        }
    }
};

var draw1 = function() {
    my_buttons = buttons;
    for (var i=0; i < my_buttons.length; i++) {
        my_buttons[i].draw();
    }
};
var draw2 = function() {
    my_buttons = buttons2;
    for (var i=0; i < my_buttons.length; i++) {
        my_buttons[i].draw();
    }
};

draw = draw1;
