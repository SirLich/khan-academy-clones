var a = 1;
var b = 2;
var c = 0;
var num = [];
var total = 0;
for(var i = 0; i < 1000; i ++){
    if(a < 4000000){
        c = b;
        b = a + b;
        a = c;
        num.push(a);
    }
}



for(var i = 0; i < num.length; i ++){
        if(num[i] % 2 === 0){
            total += num[i];
        }
}
println(total);
var draw = function() {

};
