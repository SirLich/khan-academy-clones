
var justjumped = 0;
var smallJump = 0;
var guy_x = 175;
var guy_y = 280;
var s1 = 1;
var s2 = 1;
var rect_hight = 40;
var rect_width = 20;
var speed = [];
var snowball = 100;
var y = [];
var x = [];
var type = [];
for (var i = 0 ; i < snowball ; i += 1){
    y.push (300);
    x.push (150*i);
    type.push (floor(random(0,1.99)));
    speed.push(random(s1,s2));
}


var points = 0;

var life = 2000; //number of lives you have before you die





draw = function() {



    background(108, 153, 245);
    fill(120, 28, 28);

    rect(guy_x,guy_y,20,20);


    fill(43, 255, 0);
    rect(0,300,400,100);
    textSize(30);
    text(smallJump, 30,30);
    text(justjumped,30,60);



    for(var i = 0 ; i < y.length ;  i += 1){
        fill(179, 91, 32);
        var rh = rect_hight + 40*type[i];
        rect(x[i],y[i]-rh,rect_width,rh);
        if (type[i] === 0){
            rect(x[i], y[i]-90 -rh,rect_width,rh);
        }
        x[i] -= speed[i]+1;


    }

guy_y -= smallJump;





   if(justjumped===1){
         smallJump -= 0.20;
   }
   if(justjumped===2){
       smallJump -= 0.20;
   }
   if(justjumped===3){
       smallJump=0;
       y[i] = y[i]/2;
   }

   if(guy_y>=280){
    smallJump = 0;
    justjumped=0;
    guy_y=280;
   }

   if (guy_x > x[i] && guy_x < x[i] + rect_width && guy_y > y[i] && guy_y < y[i] -rect_hight){
       background(255, 0, 0);
   }



};

var keyReleased = function(){
    if(keyCode===UP&&justjumped===0){
    smallJump = 5;
    justjumped = 1;
    }
    if(keyCode===DOWN&&justjumped===0){
        smallJump = 6.6;
        justjumped = 2;

    }
    if(keyCode===RIGHT&&justjumped===0){
        smallJump = 0;
        justjumped = 0;
    }
};
