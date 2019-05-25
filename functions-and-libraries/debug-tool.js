var input1 = [4,5,6];
var input2 = ['!','g','h'];
var debug1 = function(data1,data2){
    fill(0, 0, 0,100);
    rect(-10,mouseY - (input1.length * 20 ),420,input1.length * 20,4);
    fill(255, 255, 255,100);
    for(var i = 0; i < data1.length; i ++){
        text(input2[i],mouseX - 45,15 + mouseY - input2.length * 20 + i * 20);
    }
    for(var i = 0; i < data2.length; i ++){
        text(input1[i],mouseX + input1.length/10 * 30,15 + mouseY - input1.length * 20 + i * 20);
    }
};

var draw = function() {
    background(225, 255, 0);
    debug1(input1,input2);
};
