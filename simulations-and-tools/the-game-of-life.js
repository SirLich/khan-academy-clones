
frameRate(50);

var n = 40;
var cur  = [];
var next = [];
for(var i = 0; i < n * n ; i += 1){
    cur[i] = 0;
}


var mod = function (n, m) {
    var x = n % m;
    if (x >= 0) {
        return x;
    }
    else {
        return x+m;
    }
};

var idx = function(r,c){
    return (mod (r,n)) * n + (mod(c,n));
};

var a = floor(n/3);

cur[idx(a, a)] = 1;
cur[idx(a, a+1)] = 1;
cur[idx(a, a+2)] = 1;
cur[idx(a+1, a+2)] = 1;
cur[idx(a+2, a+1)] = 1;

var a = floor(n/0.5);

cur[idx(a, a)] = 1;
cur[idx(a, a+1)] = 1;
cur[idx(a, a+2)] = 1;
cur[idx(a+1, a+2)] = 1;
cur[idx(a+2, a+1)] = 1;




var gen = function(){

    for (var i = 0; i < n ; i ++){
        for (var j = 0 ; j < n ; j ++){
           var mine = cur[idx(i, j)];
           var count = cur[idx(i-1, j)] + cur[idx(i+1, j)] +
                       cur[idx(i, j-1)] + cur[idx(i, j+1)] +
                       cur[idx(i-1, j-1)] + cur[idx(i-1, j+1)] +
                       cur[idx(i+1, j-1)] + cur[idx(i+1, j+1)];

            if ((mine === 0 && count === 3) || (mine === 1 && (count === 2 || count === 3))) {
                next[idx(i, j)] = 1;
            }
            else {
                next[idx(i, j)] = 0;
            }
        }
    }

    //calc
    cur = next;
    next = [];
};


var draw = function() {
    background(255,255,255);
    for (var i = 0; i < n ; i ++){
        for (var j = 0 ; j < n ; j ++){
           if (cur[idx(i,j)] === 1){
               fill(0, 51, 255);
               rect(j * 400/n , i * 400/n , 400/n,400/n);
           }
        }
    }
    gen();

};
