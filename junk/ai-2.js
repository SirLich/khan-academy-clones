var man_health = [100,100];
var man_x = [200,100];
var man_y = [200,100];
var man_max_health = [100,100];
var man_speed = [1,1];
var man_type = [1,2];
var man_team = [1,2];
var man_size = [12,10];
var man_range = [10,40];
var man_being_fired_on = [true,true];
var man_damage = [1,1];

var show_range = true;


var draw = function() {
    var closest_man_x = 20000;
    var closest_man_y = 20000;
    var id = 0;
    var closest_man_dis = 20000;
    background(173, 173, 173);
    for(var i = 0; i < man_x.length; i ++){
        if(man_team[i] === 1){
            fill(255, 0, 0);
        }
        else{
            fill(0, 0, 255);
        }
        if(man_type[i] === 1){
            ellipse(man_x[i],man_y[i],man_size[i],man_size[i]);
        }
        if(man_type[i] === 2){
            rect(man_x[i],man_y[i],man_size[i],man_size[i]);
        }
        noFill();
        stroke(255, 0, 0);
        ellipse(man_x[i],man_y[i],man_range[i],man_range[i]);
        stroke(0, 0, 0);
    }
    for(var i = 0 ; i < man_x.length; i ++){
        if(man_type[i] === 1){
            if(man_being_fired_on[i] === true){

            }
            else{
                for(var j = 0; j < man_x.length; j ++){
                    if(sqrt((sq(man_x[i] - man_x[j])+sq(man_y[i] - man_y[j]))) < closest_man_dis){
                        closest_man_x = man_x[j];
                        closest_man_y = man_y[j];
                        id = j;
                        closest_man_dis = sqrt((sq(man_x[i] - man_x[j])+sq(man_y[i] - man_y[j])));
                    }
                }
                if(sqrt((sq(man_x[i] - closest_man_x)+sq(man_y[i] - closest_man_y))) < man_range[i]/2){
                    man_health[id] -= man_damage[i];
                    playSound(getSound("rpg/metal-clink"));
                }
                else{
                    var f = man_speed[i]/sqrt(sq(man_x[i] - man_x[id]) + sq(man_y[i] - man_y[id]));
                    man_x[i] -= (man_x[i] - man_x[id] ) * f;
                    man_y[i] -= (man_y[i] - man_y[id] ) * f;
                }
            }
        }
    }
};
/**
 * Sniper:
 *  1) If being fired upon:
 *      -> Run away untill not being fired upon
 *  2) If Target in range and NOT being fired upon
 *      -> Fire upon closest target
 *  3) If no target in range
 *      -> Move untill there is a target in range
 *
 * Machine gunner:
 *  1) If being fired upon:
 *      -> Dodge and menuver and attak whoevers hurting him
 *  2) If target in range and NOT being fired upon
 *      -> Run at the target (To increase accuracy) and shoot at the target
 *  3) If not range of a target
 *      -> Find a target
 *
 * if (sqrt(sq(mouseX - xpos) + sq(mouseY - ypos)) < r){
*/
