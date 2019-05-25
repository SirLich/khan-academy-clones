var question = ['',

'Are you good at math?',                               //1
'What is 2 + 2?',                                      //2
'Why did you lie?',                                //3
'Why are you so vane',                                 //4
'why do you denie you skill',                          //5
'wow, thats sad',                                      //6
'good i thought you wernt joking!',                    //7
'end'];//8

var yes = [0,2,6,4,8,8,8,8];
var no = [0,3,7,5,8,8,8,8];

var path = 1;
fill(255, 255, 255);
textSize(20);
var draw = function() {

};

background(29, 79, 133);
text(question[path],50,200);
//path = yes[path];
keyReleased = function(){
    if(keyCode === RIGHT){
        background(51, 81, 171);
        path = yes[path];
        text(question[path],50,200);


    }
    if(keyCode === LEFT){
        background(51, 81, 171);
        path = no[path];
        text(question[path],50,200);


    }
};

//if im on PATH 8 and i press NO i want to go to PATH 12...
