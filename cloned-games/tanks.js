var temp_type = 2;

//fix no-winner glitch       /
//add colors                 / DONE
//add color picker?          / DONE
//add sound                  / DONE
//fix buttons glitch         / DONE
//add diferant ammo          / DONE
//fix radius explosions      / DONE
//add wind                   / DONE
//add/fix just-fired         / DONE
//add ammo picker            /
//add shop                   /
//Fix heallth bar            / DONE
//Fix caps                   /
//Fix backspace              /
var f = createFont("symbol");
textFont(f);
var f = createFont("Courier new");
textFont(f);

var color1 = [255,0,0,255,255,0,0,255];
var color2 = [0,0,255,0,255,255,0,255];
var color3 = [0,255,0,255,0,255,0,255];
var color_index = [];
var temp_color_index = 1;
fill(255, 255, 255);
var loading_counter = 0;
var blink_counter = 0;
var blink = false;
var player_name_x = 125;
var player_name_counter = 1;
var player_count = 2;
var temp_name = '';
var livecount = 0;
var player_energy = [];
var player_turn = 0;
var player_x = [];
var player_money = [];
var player_health = [];
var player_alive = [];
var player_name = [];

var bullet_x = [];
var bullet_y = [];
var bullet_x_speed = [];
var bullet_y_speed = [];
var bullet_type = [];
var bullet_radius = [];
var bullet_live = [];
var healthtemp = 0;
var temp_speed = 5;
var temp_angle = 90;
var temp_radius = 0;
var just_fired = [];

var wind = round(random(-50,50));
var explosions = [];
var explosionx = [];
var explosiony = [];
var fade = [];

var end_game = function(){
    background(255, 0, 0);
    fill(0, 0, 0);
    textSize(20);
    text(player_name[player_turn] + " Won the game",50,200);
};
var run_round = function(){
    if(player_turn >= player_x.length){
        player_turn = 0;
    }
    for(var i = 0 ; i < player_x.length; i ++){
        if(player_alive[i] === true){
            livecount += 1;
        }
    }
    if(livecount === 1){
        draw = end_game;
    }
    livecount = 0;
    if(player_alive[player_turn] === false){
        player_turn += 1;
    }
    textSize(20);
    background(0, 136, 255);
    for(var i =0 ; i < explosions[i];i++){
        noStroke();
        fill(255, 0, 0,fade[i]);
        ellipse(explosionx[i],explosiony[i],explosions[i],explosions[i]);
        stroke(0, 0, 0);
        fade[i] -= 5;
    }
    fill(59, 135, 8);
    rect(0,300,400,100);
    for(var i = 0 ; i < player_x.length; i ++){
        if(player_alive[i] === true){
            pushMatrix();
            translate(player_x[i] + 4, 293);
            rotate(-(temp_angle - 90));
            fill(0, 0, 0);
            rect(0,0,1,-8);
            popMatrix();
            fill(0, 0, 0);
            noStroke();
            rect(player_x[i],280,10/1000 * player_health[i],2,1);
            stroke(0, 0, 0);
            fill(color1[color_index[i]],color2[color_index[i]],color3[color_index[i]]);
            rect(player_x[i],290,10,7,3);
            fill(0, 0, 0);
            ellipse(player_x[i],298,3,3);
            ellipse(player_x[i]+5,298,3,3);
            ellipse(player_x[i]+10,298,3,3);
            fill(59, 112, 10);
        }
        if(player_health[i] < 0 && player_alive[i] === true){
            playSound(getSound("retro/whistle1"));
            player_alive[i] = false;
        }
    }
    fill(145, 145, 145);
    rect(30,30,30,100,10);

    rect(230,30,30,100,10);
    rect(270,30,30,40,10);
    rect(270,90,30,40,10);

    fill(255, 0, 0);
    rect(30,129-(player_energy[player_turn]/2),30,(player_energy[player_turn]/2),10);
    rect(230,129-(temp_speed)*10,30,temp_speed*10,10);
    fill(255, 213, 0);
    triangle(player_x[player_turn]-3 + 5,265,player_x[player_turn]+3 + 5,265,player_x[player_turn] + 5,275);
    fill(0, 0, 0);
    text("It is "+player_name[player_turn]+"'s Turn.",50,350);
    textSize(15);
    text("Wind: "+ wind,30,150);
    fill(255, 0, 0);
    ellipse(350,350,50,50);
    fill(0, 0, 0);
    textSize(15);
    text("FIRE",333,355);

    fill(145, 145, 145);
    arc(150, 80, 100, 100, 180, 360);
    arc(150, 80, 10, 10, 180, 360);
    line(100,80,200,80);
    fill(0, 0, 0);
    pushMatrix();
    translate(148, 80);
    rotate(-(temp_angle - 90));
    fill(0, 0, 0);
    rect(0,0,3,-30);
    popMatrix();
    fill(145, 145, 145);
    rect(100,90,40,30,10);
    rect(160,90,40,30,10);
    fill(0, 0, 0);
    textSize(15);
    text("<<<",105,110);
    text(">>>",165,110);
    textSize(17);
    if(draw === run_round){
        if(mouseX > 100 && mouseX < 140 && mouseY > 90&&mouseY<120){
            fill(255, 162, 0);
            rect(100,90,40,30,10);
            fill(0, 0, 0);
            text("<<<",105,110);
        }
    }
    if(draw === run_round){
        if(mouseX > 160 && mouseX < 200 && mouseY > 90&&mouseY<120){
            fill(255, 162, 0);
            rect(160,90,40,30,10);
            fill(0, 0, 0);
            text(">>>",165,110);

        }
    }
    if (sqrt(sq(mouseX - 350) + sq(mouseY - 350)) < 25){
        fill(0, 0, 0);
        ellipse(350,350,50,50);
        fill(255, 0, 0);
        textSize(15);
        text("FIRE",333,355);
    }

    //rect(270,90,30,40);
    if(mouseX > 270 && mouseX < 300 && mouseY > 30 && mouseY < 70){
        fill(255, 162, 0);
        rect(270,30,30,40,10);
    }
    if(mouseX > 270 && mouseX < 300 && mouseY > 90 && mouseY < 130){
        fill(255, 162, 0);
        rect(270,90,30,40,10);
    }

};
var explosion = function(x,y,t){
    if(random(0,10) < 5){
        var rand = random(0,5);
        if(rand < 2){
            wind -= round(random(wind - wind/3,wind - wind/2));
        }
        else{
            wind += round(random(wind - wind/3,wind - wind/2));
        }
    }
    noStroke();
    if(random(0,10) < 5){
        playSound(getSound("retro/boom1"));
    }
    else{
        playSound(getSound("retro/boom2"));
    }
    fill(255, 0, 0);
    stroke(0, 0, 0);
    for(var i = 0; i < player_x.length; i ++){
        if(bullet_type[i] === 1){
                temp_radius = 25;
                healthtemp = 30;
        }
        if(bullet_type[i] === 2){
                temp_radius = 50;
                healthtemp = 50;
        }
        if(bullet_type[i] === 3){
                temp_radius = 100;
                healthtemp = 100;
        }
        if(bullet_type[i] === 4){
                temp_radius = 25;
                healthtemp = 30;
        }
        if(sqrt(sq(player_x[i] - x) + sq(290 - y)) < temp_radius/2){
            player_health[i] -= healthtemp;
        }
        if(sqrt(sq(player_x[i] - x + 10) + sq(290 - y)) < temp_radius/2){
            player_health[i] -= healthtemp;
        }
        if(sqrt(sq(player_x[i] - x) + sq(290 + 7 - y)) < temp_radius/2){
            player_health[i] -= healthtemp;
        }
        if(sqrt(sq(player_x[i] - x + 10) + sq(290 + 7 - y)) < temp_radius/2){
            player_health[i] -= healthtemp;
        }
    }
    temp_speed = 5;
    temp_angle = 90;
};
var bullet_attak = function(){
    background(0, 136, 255);
    for(var i =0 ; i < explosions[i];i++){
        noStroke();
        fill(255, 0, 0,fade[i]);
        ellipse(explosionx[i],explosiony[i],explosions[i],explosions[i]);
        stroke(0, 0, 0);
        fade[i] -= 5;
    }
    fill(59, 135, 8);
    rect(0,300,400,100);
    for(var i = 0; i < bullet_x.length; i ++){
        ellipse(bullet_x[i],bullet_y[i],bullet_radius[i], bullet_radius[i]);
        bullet_x[i] += bullet_x_speed[i];
        bullet_x[i] += wind/70;
        bullet_y[i] -= bullet_y_speed[i];
        just_fired[i] += 1;
        bullet_y_speed[i] -= (sq(9.8)*0.001);
        bullet_x_speed[i] -= bullet_x_speed[i]/1000;
        for(var j = 0; j  < player_x.length; j ++){
            if(bullet_y[i] > 293 && bullet_x[i] > player_x[j] && bullet_x[i] < player_x[j] + 10 && just_fired[i] > 20 && bullet_live[i] === true){
                bullet_x_speed[i] = 0;
                bullet_y_speed[i] = 0;
                bullet_live[i] = false;
                explosion(bullet_x[i],bullet_y[i],bullet_type[i]);
                explosionx.push(bullet_x[i]);
                explosiony.push(bullet_y[i]);
                if(bullet_type[i] === 1){
                    explosions.push(25);
                }
                if(bullet_type[i] === 2){
                    explosions.push(50);
                }
                if(bullet_type[i] === 3){
                    explosions.push(100);
                }
                if(bullet_type[i] === 4){
                    explosions.push(25);
                }
                fade.push(255);
                bullet_y[i] = 500;
                player_turn += 1;
                draw = run_round;
            }
        }
        if(bullet_y[i] > 300 - bullet_radius[i] && bullet_live[i] === true){
            bullet_x_speed[i] = 0;
            bullet_y_speed[i] = 0;
            bullet_live[i] = false;
            explosion(bullet_x[i],bullet_y[i],bullet_type[i]);
            explosionx.push(bullet_x[i]);

            explosiony.push(bullet_y[i]);
            if(bullet_type[i] === 1){
                explosions.push(25);
            }
            if(bullet_type[i] === 2){
                explosions.push(50);
            }
            if(bullet_type[i] === 3){
                explosions.push(100);
            }
            if(bullet_type[i] === 4){
                for(var k = 0; k < round(random(5,10)); k ++){
                    explosions.push(25);
                    bullet_x.push(bullet_x[i]);
                    bullet_y.push(bullet_y[i]);
                    bullet_radius.push(1);
                    bullet_type.push(1);
                    bullet_x_speed.push(random(-3,3));
                    bullet_y_speed.push(random(-5,5));
                    loading_counter = 0;
                    bullet_live.push(true);
                    draw = bullet_attak;
                    playSound(getSound("retro/hit1"));
                    just_fired.push(0);
                }
            }
                fade.push(255);
                bullet_y[i] = 500;
                player_turn += 1;
                var temp_count = 0;
                for(var o = 0; o < bullet_live.length; o ++){
                    if(bullet_live[o] === true){
                        temp_count += 1;
                    }
                }
                if(temp_count === 0){
                    draw = run_round;
                }
        }
    }
    for(var i = 0 ; i < player_x.length; i ++){
        if(player_alive[i] === true){
            pushMatrix();
            translate(player_x[i] + 4, 293);
            rotate(-(temp_angle - 90));
            fill(0, 0, 0);
            rect(0,0,1,-8);
            popMatrix();
            fill(0, 0, 0);
            noStroke();
            rect(player_x[i],280,10/1000 * player_health[i],2,1);
            stroke(0, 0, 0);
            fill(color1[color_index[i]],color2[color_index[i]],color3[color_index[i]]);
            rect(player_x[i],290,10,7,3);
            fill(0, 0, 0);
            ellipse(player_x[i],298,3,3);
            ellipse(player_x[i]+5,298,3,3);
            ellipse(player_x[i]+10,298,3,3);
            fill(59, 112, 10);
        }
    }
};
var pack_values = function(){
    for(var i = 0; i < player_count; i ++){
        player_x.push(random(10,390));
        player_money.push(0);
        player_health.push(1000);
        player_alive.push(true);
        player_energy.push(200);
        }
    draw = run_round;

};
var loading_screen = function(){
    background(59, 135, 8);
    fill(145, 145, 145);
    rect(100,200,200,50,10);
    fill(0, 0, 0);
    rect(100,200,loading_counter,50,10);
    if(loading_counter === 200){
        draw = pack_values;
    }
    loading_counter += 10;

};
var player_picker_1 = function(){
    background(59, 135, 8);
    fill(145, 145, 145);
    rect(150,200,100,50,10);
    rect(150,130,100,50,10);
    rect(300,140,50,100,10);
    fill(92, 92, 92);
    triangle(200,140,180,165,220,165);
    triangle(200,240,180,215,220,215);
    triangle(320,170,320,210,340,190);
    textSize(40);
    fill(255, 255, 255);
    text("Players: "+player_count,50,350);
    fill(0, 0, 0);
    text("Players: "+player_count,51,351);
    if(mouseX>150&&mouseX<150+100&&mouseY>130&&mouseY<130+50){
        fill(255, 140, 0);
        triangle(200,140,180,165,220,165);
    }
    if(mouseX>150&&mouseX<150+100&&mouseY>200&&mouseY<200+50){
        fill(255, 140, 0);
        triangle(200,240,180,215,220,215);
    }
    if(mouseX>300&&mouseX<300+50&&mouseY>140&&mouseY<140+100){
        fill(255, 140, 0);
        triangle(320,170,320,210,340,190);
    }
};
var player_picker_2 = function(){
    if(temp_color_index > color1.length){
        temp_color_index = 0;
    }
    if(temp_color_index < 0){
        temp_color_index = color1.length;
    }
    background(59, 135, 8);
    textSize(20);
    fill(0, 0, 0);
    text("Enter the name of player "+player_name_counter+".\nThen pick a color\nAnd press enter.",50,50);
    fill(145, 145, 145);
    rect(100,200,200,50,10);
    fill(color1[temp_color_index],color2[temp_color_index],color3[temp_color_index]);
    rect(100,300,200,50,10);
    fill(145, 145, 145);
    rect(40,300,50,50,10);
    rect(310,300,50,50,10);

    fill(0, 0, 0);
    text(temp_name,120,230);
    if(player_name_counter>player_count){
        draw = loading_screen;
    }
    if(blink === true){
        fill(0, 0, 0);
        rect(player_name_x,215,1,20);
    }
    if(blink_counter > 20){
        blink = !blink;
        blink_counter = 0;
    }
    blink_counter += 1;
    if(mouseX > 40 && mouseX < 40 + 50 && mouseY > 300 && mouseY < 350){
        fill(255, 162, 0);
        rect(40,300,50,50,10);
    }
    if(mouseX > 310 && mouseX < 350 + 50 && mouseY > 300 && mouseY < 350){
        fill(255, 162, 0);
        rect(310,300,50,50,10);
    }
};
var draw = function() {
    draw = player_picker_1;
};
mouseClicked = function(){
    if(draw === player_picker_1){
        if(mouseX>150&&mouseX<150+100&&mouseY>130&&mouseY<130+50 &&player_count <=9){
            player_count += 1;
            playSound(getSound("rpg/hit-thud"));
        }
        if(mouseX>150&&mouseX<150+100&&mouseY>200&&mouseY<200+50&&player_count >= 3){
            player_count -= 1;
            playSound(getSound("rpg/hit-thud"));

        }
        if(mouseX>300&&mouseX<300+50&&mouseY>140&&mouseY<140+100){
            draw = player_picker_2;
            playSound(getSound("rpg/hit-thud"));

        }
    }
    if(draw === player_picker_2){
        if(mouseX > 40 && mouseX < 40 + 50 && mouseY > 300 && mouseY < 350){
            temp_color_index += 1;
        }
        if(mouseX > 310 && mouseX < 350 + 50 && mouseY > 300 && mouseY < 350){
            temp_color_index -= 1;
        }
    }
    if(draw === run_round){
        if (sqrt(sq(mouseX - 350) + sq(mouseY - 350)) < 25){
            bullet_x.push(-8 * cos(temp_angle) + player_x[player_turn]+4);
            bullet_y.push(-8 * sin(temp_angle) + 298);
            bullet_radius.push(1);
            bullet_type.push(temp_type);
            bullet_x_speed.push(temp_speed * cos(temp_angle));
            bullet_y_speed.push(temp_speed * sin(temp_angle));
            loading_counter = 0;
            bullet_live.push(true);
            draw = bullet_attak;
            playSound(getSound("retro/hit1"));
            just_fired.push(0);
        }
    }
};
mousePressed = function(){
    if(draw === run_round){
        if(mouseX > 100 && mouseX < 140 && mouseY > 90&&mouseY<120){
            temp_angle += 1;
            playSound(getSound("rpg/hit-thud"));

        }
    }
    if(draw === run_round){
        if(mouseX > 160 && mouseX < 200 && mouseY > 90&&mouseY<120){
            temp_angle -= 1;
            playSound(getSound("rpg/hit-thud"));

        }
        if(mouseX > 270 && mouseX < 300 && mouseY > 30 && mouseY < 70){
            temp_speed += 0.05;
            playSound(getSound("rpg/hit-thud"));

        }
        if(mouseX > 270 && mouseX < 300 && mouseY > 90 && mouseY < 130){
            temp_speed -= 0.05;
            playSound(getSound("rpg/hit-thud"));

        }
    }
};
keyReleased = function(){
    if(draw === player_picker_2){
        if(keyCode === ENTER){
            player_name[player_name_counter - 1] = temp_name;
            temp_name = '';
            player_name_counter += 1;
            player_name_x = 125;
            playSound(getSound("rpg/hit-thud"));
            color_index.push(temp_color_index);
        }
        else if(keyCode === BACKSPACE){
            temp_name = temp_name.substring(0,temp_name.length - 1);
        }
        if(keyCode !== ENTER && temp_name.length < 10){
            playSound(getSound("rpg/step-heavy"));
            player_name_x += 12;
            temp_name = temp_name + key.toString();
        }
    }
};
keyPressed = function(){
    if(draw === run_round && player_energy[player_turn] > 0 && keyCode === RIGHT){
        player_x[player_turn] += 1;
        player_energy[player_turn] -= 1;
        playSound(getSound("retro/rumble"));
    }
    if(draw === run_round && player_energy[player_turn] > 0 && keyCode === LEFT){
        player_x[player_turn] -= 1;
        player_energy[player_turn] -= 1;
        playSound(getSound("retro/rumble"));
    }
};
