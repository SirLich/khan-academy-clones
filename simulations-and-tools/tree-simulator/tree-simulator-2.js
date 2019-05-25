var TellMeWhenDone = true;

















var noiseScale= 0.5;
var x = [159];
var y = [330];
var d = [10];
var stop = [false];
var type = 2;
var derection = ['up'];
var count = [0];
var live = 0;
var branch = [random(50,300)];
var c1 = color(184, 0, 0);
var c2 = color(255, 255, 0);
noStroke();
var click = 100;




var draw = function() {

    if(click > 0){
        stroke(184, 0, 0);
        strokeWeight(200);
        noFill();
        ellipse(200,200,600,600);
        noStroke();
        fill(lerpColor(c2,c1,1/70 * click));
        ellipse(200,200,50 + click * 5, 50 + click * 5);
        fill(0, 0, 0);
        rect(0,300,400,200);
        fill(255, 255, 255);
        ellipse(200,200,75,75);


    }
    click -= 1;

    for(var i = 0 ; i < stop.length; i ++){
        if(stop[i] === false){
            live += 1;
        }
    }
    if(TellMeWhenDone === true){
        println(live);
    }
    if(click < 0 && click > -200){
        for(var m = 0; m < 2; m ++){
            for(var i = 0; i < 300; i ++){
                var grass_move = random(-0.3,0.3);
                var grass_size = random(2.5,1.5);
                var grass_height = 300 + m * 5;
                var grass_next = random(1,2);
                var grass_large = random(10,20);
                for(var j = 0; j < grass_large ; j ++){
                    fill(0, 0, 0);
                    ellipse(i * grass_next + grass_move ,grass_height,grass_size,grass_size);
                    grass_height -= 1;
                    grass_size -= 0.1;
                    if(grass_move > 0){
                        grass_move += 0.1;
                    }
                    else{
                        grass_move -= 0.1;
                    }
                }
            }
        }
        click = -2000;
    }
    live = 0;
    noStroke();
    for(var i  = 0; i < x.length; i ++){
        fill(110, (2 + 11-d[i])*10, 0);
        fill(0, 0, 0);
        if(d[i] < 0){
            stop[i] = true;
            var chance = random(0,5);
            if(chance < 5){
                //fill(0, 0, 0);
                //ellipse(x[i],y[i],2,2);
            }

        }
        if(stop[i] === false){
            ellipse(x[i],y[i],d[i],d[i]);
            if(derection[i] === 'right'){
                x[i] += random(-0.2,0.3);
            }
            if(derection[i] === 'left'){
                x[i] += random(-0.3,0.2);
            }
            if(derection[i] === 'up'){
                x[i] += random(-0.3,0.3);
            }
            d[i] -= random(0.0005,0.002);
            if(type === 1){
                y[i] -= 0.1;
            }
            else{
                y[i] -= random(d[i]/50,d[i]/40);
            }
            count[i] += 1;
            if(count[i] > branch[i]){
                count.push(0);
                stop.push(false);
                branch.push(random(100,500));
                count[i] = 0;
                branch[i] = random(300,500);
                var next = round(random(1,2));
                x.push(x[i]);
                y.push(y[i]);
                d[i] = ((d[i]/3)*2.5);
                d.push((d[i]/3)*2.5);
                if(next === 1){
                    derection[i] = 'right';
                    derection.push('left');
                }
                else{
                    derection[i] = 'left';
                    derection.push('right');
                }
            }
        }

    }
};
