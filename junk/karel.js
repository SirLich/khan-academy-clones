var karelX = 200;
var karelY = 200;
var der = 1;
//north = 1
//east = 2
//south = 3
//west = 4
var turnleft = function(){
    der -= 1;
    if(der === 0){
        der = 4;
    }
};
var move = function(){
    if(der === 1){
        karelY += width/20;
    }
    if(der === 2){
        karelX += width/20;
    }
    if(der === 3){
        karelY -= width/20;
    }
    if(der === 4){
        karelX -= width/20;
    }
};
var com = function(){
    move();
    move();
    turnleft();
    move();
};
com();
var draw = function(){
    background(0, 94, 255);
  for(var i = 0; i < width/20; i ++){
      line(i * width/20,0,i * width/20,400);
      line(0,i * width/20, 400,i * width/20);
  }
  ellipse(karelX,karelY,20,20);
};
