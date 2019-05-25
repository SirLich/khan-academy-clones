/** the movement variables **/
var right = false;
var left = false;
var up = false;
var down = false;

/** The hostile variables **/
var hx = [200];   //hostile x pos
var hy = [200];   //hostile y pos
var hd = [8];     //hostile size
var hdx = [2000]; //hostile destination x pos
var hdy = [2000]; //hostile destination y pos
var hm = [1];     //the hostiles mood]
var hr = [50];    //hostile range
var hh = [100];   //hostile health
var hsp = [0.5];    //hsp = hostile speed
var hdmg = [0.5];

/**
 * TANKING:
 * * * The tank mode is mode #1
 * * * A tank will tun at you untill its in range. Then it will fire at you continuesly.
 * * * Tanking is the default mood.

**/

/** The variables about me **/
var myx = 100;    //my x pos
var myy = 100;    //my y pos
var myd = 8;      //my size
var myh = 100;
var mys = 0.6;

/** The obsticle variables **/
var obx = [];     //object x pos
var oby = [];     //object y pos
var obw = [];     //object width
var obh = [];     //object height


var you_lose = function(){
    background(255, 0, 0);
};
var fire = function(d,r,m){
    var rand = random(0 - r/4 - m,100);
    if(rand > 50){
        return d;
    }
    else{
        return 0;
    }
};
var draw = function() {
    background(60, 92, 0);
    if(myh < 0){
        draw = you_lose;
    }
    for(var i = 0 ; i < hx.length; i ++){
        fill(82, 82, 82);
        ellipse(hx[i],hy[i],hd[i],hd[i]);
        rect(hx[i] - hd/2,hy[i] - hd[i] - hd[i]/4,hh[i]/5,hd[i]/3);
        if(hm[i] === 1){
            if(sqrt((sq(hx[i] - myx)+sq(hy[i] - myy))) < hr[i]){
                myh -= fire(hdmg[i],(sqrt((sq(hx[i] - myx)+sq(hy[i] - myy))) < hr[i]),0);
                //playSound(getSound("retro/laser1"));
            }
            else{
                hdx[i] = myx;
                hdy[i] = myy;
                var f = hsp[i]/sqrt(sq(hx[i] - hdx[i]) + sq(hy[i] - hdy[i]));
                hx[i] -= (hx[i] - hdx[i] ) * f;
                hy[i] -= (hy[i] - hdy[i] ) * f;
            }
        }
    } //Here is where I do everything for the hostiles.
    fill(0, 21, 255);
    ellipse(myx,myy,myd,myd);
    rect(myx - myd/2,myy - myd - myd/3,myh /5,myd/3);
    if(up === true){
        myy -= mys;
    }
    if(down === true){
        myy += mys;
    }
    if(right === true){
        myx += mys;
    }
    if(left === true){
        myx -= mys;
    }
};
var keyPressed = function(){
    if(keyCode === 68){
        right = true;
    }
    if(keyCode === 65){
        left = true;
    }
    if(keyCode === 87){
        up = true;
    }
    if(keyCode === 83){
        down = true;
    }
};
var keyReleased  = function(){
    if(keyCode === 68){
        right = false;
    }
    if(keyCode === 65){
        left = false;
    }
    if(keyCode === 87){
        up = false;
    }
    if(keyCode === 83){
        down = false;
    }

};
