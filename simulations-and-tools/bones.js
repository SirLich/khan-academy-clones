var joint_x = [];
var joint_y = [];
var swing_x = [];
var swing_y = [];
var angle = [];
var bone = [];
var swing = [];
var joint = [];
var weight = [];

draw = function() {
    background(0, 72, 120);
    noFill();
    stroke(255, 255, 255);
    for(var i = 0; i < joint_x.length; i ++){
        if(swing_x[i] > 400){
            if(angle[i] >=90){
                angle[i] -= 5;
            }
            else{
                angle[i] += 5;
            }
        }
        if(swing_x[i] < 0){
            if(angle[i] >= 180){
                angle[i] += 5;
            }
            else{
                angle[i] -= 5;
            }
        }
        if(swing_y[i] > 400){
            if(angle[i] >=90){
                angle[i] += 5;
            }
            else{
                angle[i] -= 5;
            }
        }
        if(swing_y[i] < 0){
            if(angle[i] >= 180){
                angle[i] -= 5;
            }
            else{
                angle[i] += 5;
            }
        }
        if(angle[i] > 360){
            angle[i] = 0;
        }
        if(angle[i] !== 90){
            if(angle[i] >= 90){
                angle[i] -= 1 * (weight[i]/30);
            }
            else{
                angle[i] += 1 * (weight[i]/30);
            }
        }
        joint_x[0] = mouseX;
        joint_y[0] = mouseY;
        line(joint_x[i],joint_y[i], swing_x[i],swing_y[i]);
        swing_x[i] = bone[i]*cos(angle[i]) + joint_x[i];
        swing_y[i] = bone[i]*sin(angle[i]) + joint_y[i];
        if(joint[i] >= 0){
            joint_x[i] = swing_x[joint[i]];
            joint_y[i] = swing_y[joint[i]];
        }
    }
};



mouseClicked = function(){
    if(mouseButton === LEFT){
        joint_x.push(mouseX);
        joint_y.push(mouseY);
        swing_x.push(0);
        swing_y.push(0);
        angle.push(floor(random(0,360)));
        bone.push(floor(random(30,70)));
        swing.push(random(1,5));
        joint.push(-10);
        weight.push(bone[bone.length - 1]);
    }
    else{
        joint_x.push(mouseX);
        joint_y.push(mouseY);
        swing_x.push(0);
        swing_y.push(0);
        angle.push(floor(random(0,360)));
        bone.push(floor(random(30,70)));
        swing.push(random(1,5));
        joint.push(joint.length - 1);
        weight.push(bone[bone.length - 1]);

    }
};
