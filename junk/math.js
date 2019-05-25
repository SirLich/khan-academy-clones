var num = 1000;
var total = 0;
var int = function(n){
   return n % 1 === 0;
};
background(108, 215, 247);
for(var i = 0 ; i < num + 1; i ++){
    println(total);
    var temp1 = i/3;
    var temp2 = i/5;
    if(int(temp1) || int(temp2)){
       total += i;
    }
}

var draw = function() {

};
