var clicks = 0;
var money = 0;
var money_i = 1;
var f = createFont("cursive");
textFont(f);
var x2 = false;
var c_h = false;
var ch_percent = 0;
var ch_calc = 0;
var ch_price = 100;
var x2_price = 50;
var plus5 = false;
var plus5_cost = 500;
var crith = false;
var crith_cost = 1500;
var score = 0;
var u1 = 3285;
var u2 = 3285 * 2;
var u3 = 3285 * 3;
var u4 = 3285 * 4;
var u5 = 3285 * 5;
var u6 = 3285 * 6;
var u7 = 3285 * 7;
var u8 = 3285 * 8;
var x22 = false;
var x22_cost = 2000;
var npc1 = false;
var npc1_price = 10;
var npc1cs = 30;
var r = 0;
var npc1m = 1;
var npcf = false;
var npcf_price = 200;
var npci = false;
var npci_price = 500;
var npc2 = false;
var npc2_price = 0;
var npc_5 = false;
var npc_5_price = 1000;
var item = false;
var wood = 0;
var stone = 0;
var w1 = 1550;
var w2 = 0;
var w3 = 0;
var w4 = 0;
var w5 = 0;
var w6 = 0;
var w7 = 0;
var w8 = 0;
var s1 = 0;
var s2 = 0;
var s3 = 0;
var s4 = 0;
var s5 = 0;
var s6 = 0;
var s7 = 0;
var s8 = 0;
var item_num = floor(random(0,100));
var item_price = floor(random(0,100));
var cave = getImage("avatars/mr-pink");
var tree = getImage("avatars/leafers-tree");
var castle = getImage("cute/CharacterPrincessGirl");
var cabin = getImage("avatars/old-spice-man");
var house = getImage("avatars/robot_female_1");
var apartment = getImage("creatures/Hopper-Cool");
var moon = getImage("avatars/aqualine-tree");
var mars = getImage("avatars/piceratops-ultimate");






/**
 * TO DO LIST:
 * add NPC stats to the run_game function      >>> DONE
 * add image's to the house scenes             >>> DONE
 * add comments to the housing                 >>> DONE
 * add two more upgrades                       >>>
 * redo the house...                           >>>
 * add pluses to the buyable squares           >>> XXX
 * add a settings                              >>> XXX
 * add a program header                        >>> XXX
 * made the second npc clicker work            >>>
 * change stock market                         >>> DONE
 * take away the 'true' from stock market      >>> DONE
 * add information                             >>>
 * add wood store                              >>>
 * add stone store                             >>>
 * add stone and wood to all lands             >>> DONE

*/
var chat = function(){
    background(255, 0, 0);
    textSize(40);
    fill(0, 0, 0);
    text("Changing the\nmoney variable\nis cheating!\nplease set money\nback to zero and\nplease try again!",50,50);
};
var start_screen = function(){
    background(63, 120, 30);
    textSize(75);
    fill(102, 63, 5);
    text("click\ntwice to\nstart!!!",50,100);
};
var upgrades = function(){
    background(255, 242, 0);
    fill(194, 194, 194); //lightish grey
    for (var j = 0; j < 3; j++) {
        for (var i = 0; i < 5; i++) {
            rect( i*80, j*80, 80, 80);
        }
    }
    rect(20,260,360,120);

    //first rect
    if(x2 === true){
        fill(255, 0, 0);
    }
    else{
        fill(67, 168, 27);
    }
    rect(0,0,80,80);
    fill(0, 0, 0);
    textSize(20);

    //second  rect
    if(c_h === true){
        fill(255, 0, 0);
    }
    else{
        fill(67, 168, 27);
    }
    rect(80,0,80,80);
    fill(0, 0, 0);
    textSize(20);

    //third  rect
    if(plus5 === true){
        fill(255, 0, 0);
    }
    else{
        fill(67, 168, 27);
    }
    rect(160,0,80,80);
    fill(0, 0, 0);
    textSize(20);

    //fourth  rect
    if(crith === true){
        fill(255, 0, 0);
    }
    else{
        fill(67, 168, 27);
    }
    rect(240,0,80,80);
    fill(0, 0, 0);
    textSize(20);

    //fifth  rect
    if(x22 === true){
        fill(255, 0, 0);
    }
    else{
        fill(67, 168, 27);
    }
    rect(320,0,80,80);
    fill(0, 0, 0);
    textSize(20);

    //sixth  rect
    if(npc1 === true){
        fill(255, 0, 0);
    }
    else{
        fill(67, 168, 27);
    }
    rect(0,80,80,80);
    fill(0, 0, 0);
    textSize(20);

    //7  rect
    if(npcf === true){
        fill(255, 0, 0);
    }
    else{
        fill(67, 168, 27);
    }
    rect(80,80,80,80);
    fill(0, 0, 0);
    textSize(20);


//eigth rect
    if(npci === true){
        fill(255, 0, 0);
    }
    else{
        fill(67, 168, 27);
    }
    rect(160,80,80,80);
    fill(0, 0, 0);
    textSize(20);

    //nin rect
    if(npc2 === true){
        fill(255, 0, 0);
    }
    else{
        fill(67, 168, 27);
    }
    rect(240,80,80,80);
    fill(0, 0, 0);
    textSize(20);

    //tenth rect
    if(npc_5 === true){
        fill(255, 0, 0);
    }
    else{
        fill(67, 168, 27);
    }
    rect(320,80,80,80);

    //elevnth rect

    fill(0, 153, 255);
    rect(0,160,80,80);

    //back button
    fill(0, 0, 0);
    rect(320,160,80,80);
    textSize(30);
    fill(255, 255, 255);
    text("Back",325,210);
    fill(0, 0, 0);
    textSize(20);

    //x2 multi
    if(mouseX > 0 &&
        mouseX < 80 &&
        mouseY > 0 &&
        mouseY < 80){

        text("Upgrade: X2 multiplier\nStatus: " + x2 + "\nCost: " + x2_price, 30,300);

   }

   //critical hit 10%
   if(mouseX > 160 &&
        mouseX < 240 &&
        mouseY > 0 &&
        mouseY < 80){

        text("Upgrade: +5 Money per click\nStatus: " + plus5 + "\nCost: " + plus5_cost, 30,300);

   }

   //plus5
   if(mouseX > 80 &&
        mouseX < 160 &&
        mouseY > 0 &&
        mouseY < 80){

        text("Upgrade: Critical hit %10\nStatus: " + c_h + "\nCost: " + ch_price, 30,300);

   }
   //crit 20%
   if(mouseX > 240 &&
        mouseX < 320 &&
        mouseY > 0 &&
        mouseY < 80){

        text("Upgrade: Critical hit %20\nStatus: " + crith + "\nCost: " + crith_cost, 30,300);

   }

   //x2 2nd
   if(mouseX > 320 &&
        mouseX < 400 &&
        mouseY > 0 &&
        mouseY < 80){

        text("Upgrade: X2 multiplier (#2)\nStatus: " + x22 + "\nCost: " + x22_cost, 30,300);

   }

   //npc1
    if(mouseX > 0 &&
        mouseX < 80 &&
        mouseY > 80 &&
        mouseY < 160){

        text("Upgrade: NPC Clicker\nStatus: " + npc1 + "\nCost: " + npc1_price, 30,300);

   }

   //npc1 FFFFFFFFfffff
    if(mouseX > 80 &&
        mouseX < 160 &&
        mouseY > 80 &&
        mouseY < 160){

        text("Upgrade: NPC Clicker X2 speed\nStatus: " + npcf + "\nCost: " + npcf_price, 30,300);

   }


   //npc IIIIIIIIIIIIIiiiiii
    if(mouseX > 160 &&
        mouseX < 240 &&
        mouseY > 80 &&
        mouseY < 160){

        text("Upgrade: NPC Clicker X2 revenue\nStatus: " + npci + "\nCost: " + npci_price, 30,300);

   }

   //npc 22222222222
    if(mouseX > 240 &&
        mouseX < 320 &&
        mouseY > 80 &&
        mouseY < 160){

        text("Upgrade: NPC Clicker (#2)\nStatus: " + npc2 + "\nCost: " + npc2_price, 30,300);

   }

   //npc 5555555555
    if(mouseX > 320 &&
        mouseX < 400 &&
        mouseY > 80 &&
        mouseY < 160){

        text("Upgrade: NPC Clicker +5 per click\nStatus: " + npc_5 + "\nCost: " + npc_5_price, 30,300);

   }

   //npc item
    if(mouseX > 0 &&
        mouseX < 80 &&
        mouseY > 160 &&
        mouseY < 240){

        text("Item: Score Exchange\n\n" + item_num + " score " + " for " + item_price + " $ ", 30,300);

        }

   if(mouseY > 260){
       text("Money: " + money + "\nMoney per click: " + money_i, 30,300);
   }

   if(mouseX > 320 &&
        mouseX < 400 &&
        mouseY > 160 &&
        mouseY < 240 && draw === upgrades){
            text("Back", 30,300);
    }

};
var run_game = function(){
    if(r === 1 && npc1 === true && draw === run_game){
        money += npc1m;
    }
    if(score > 0 && score < u1){
        background(0, 51, 255); //blue
        fill(21, 255, 0);       //green
        rect(0,300,400,100);    //green grass
        fill(171, 88, 0);       //brown
        rect(20,325,100,45);    //upgrades button
        textSize(20);           //textsize

        fill(0, 0, 0);
        rect(190,300,20,-30);
        ellipse(200.5,270,20,20);
        fill(87, 87, 87);
        ellipse(180,285,30,30);
        ellipse(180,260,30,30);
        ellipse(220,260,30,30);
        ellipse(220,285,30,30);
        ellipse(200,250,30,30);
        ellipse(170,285,30,30);
        ellipse(230,285,30,30);
        fill(0, 0, 0);
        textSize(20);
        text("Mr. Pink's Cave",200,350);
        image(cave,100,260,50,50);

        text("Wood: " + wood + "        Need: " + w1,20,120);
        text("Stone: " + stone + "        Need: " + w1 ,20,150);

    }
    stroke(0, 0, 0);
    if(score >= u1 && score < u2){
        background(0, 51, 255); //blue
        fill(21, 255, 0);       //green
        rect(0,300,400,100);    //green grass
        fill(171, 88, 0);       //brown
        rect(20,325,100,45);    //upgrades button
        textSize(20);           //textsize

        fill(171, 88, 0);       //brown
        rect(180,300,30,-50);
        rect(50,300,10,-40);
        rect(75,300,15,-60);
        rect(320,300,5,-20);
        fill(47, 117, 0);       //green
        ellipse(195,205,100,100);
        ellipse(55,260,30,30);
        ellipse(83,220,45,45);
        ellipse(323,285,10,10);
        fill(94, 49, 0);      //light brown
        noStroke();
        ellipse(195,280,10,-10);
        rect(190,300,10,-20);
        stroke(0, 0, 0);
        image(tree,250,255,50,50);
        fill(0, 0, 0);
        textSize(20);
        text("Leafer's Forest",200,350);
        text("Wood: " + wood + "        Need: " + w2,20,120);
        text("Stone: " + stone + "        Need: " + w2 ,20,150);
    }
    stroke(0, 0, 0);
    if(score >= u2 && score < u3){
        background(0, 51, 255); //blue
        fill(21, 255, 0);       //green
        rect(0,300,400,100);    //green grass
        fill(171, 88, 0);       //brown
        rect(20,325,100,45);    //upgrades button
        textSize(20);           //textsize

        fill(84, 84, 84);                  //dark grey
        noStroke();
        rect(150,300,100,-100);
        rect(150,200,20,-50);
        rect(250,300,50,-50);
        rect(230,200,20,-30);
        fill(168, 87, 0);                    //light brown
        triangle(145,150,160,120,175,150);
        triangle(255,170,225,170,240,140);
        triangle(275,220,300,250,250,250);
        fill(0, 0, 0);                            //black
        rect(170,220,10,20);
        rect(220,220,10,20);
        ellipse(225,220,10,10);
        ellipse(175,220,10,10);

        rect(170,260,10,20);
        rect(220,260,10,20);
        ellipse(225,260,10,10);
        ellipse(175,260,10,10);
        rect(155,160,8,20);
        rect(235,175,8,20);
        fill(84, 29, 0);
        rect(260,300,20,-20);
        ellipse(270,280,20,20);
        image(castle,100,250,40,65);
        fill(0, 0, 0);
        textSize(20);
        text("Princess's castle",200,350);
        text("Wood: " + wood + "        Need: " + w3,20,120);
        text("Stone: " + stone + "        Need: " + w3 ,20,150);
    }
    stroke(0, 0, 0);
    if(score >= u3 && score < u4){
        background(0, 51, 255); //blue
        fill(21, 255, 0);       //green
        rect(0,300,400,100);    //green grass
        fill(171, 88, 0);       //brown
        rect(20,325,100,45);    //upgrades button
        textSize(20);           //textsize

        fill(255, 170, 0);
        ellipse(150,295,10,10);
        ellipse(150,285,10,10);
        ellipse(150,275,10,10);
        ellipse(150,265,10,10);
        ellipse(150,255,10,10);
        ellipse(250,295,10,10);
        ellipse(250,285,10,10);
        ellipse(250,275,10,10);
        ellipse(250,265,10,10);
        ellipse(250,255,10,10);
        fill(0, 0, 0);
        rect(155,300,90,-50);
        fill(105, 54, 0);
        rect(155,250,90,8);
        rect(155,260,90,8);
        rect(155,270,90,8);
        rect(155,280,90,8);
        rect(155,290,90,8);
        noStroke();
        triangle(140,250,260,250,200,200);
        rect(150,210,10,40);
        fill(0, 0, 0);
        rect(200,300,20,-30);
        stroke(0, 0, 0);
        image(cabin,75,250,50,50);
        fill(0, 0, 0);
        textSize(20);
        text("Old-spice man's cabin",160,350);
        text("Wood: " + wood + "        Need: " + w4,20,120);
        text("Stone: " + stone + "        Need: " + w4 ,20,150);

    }
    stroke(0, 0, 0);
    if(score >= u4 && score < u5){
        background(0, 51, 255); //blue
        fill(21, 255, 0);       //green
        rect(0,300,400,100);    //green grass
        fill(171, 88, 0);       //brown
        rect(20,325,100,45);    //upgrades button


        fill(128, 55, 0);
        rect(175,300,50,-50);
        fill(255, 0, 0);
        rect(175,230,10,-30);
        fill(74, 74, 74);
        triangle(160,250,240,250,200,200);
        fill(158, 112, 33);
        rect(205,300,12,-20);
        fill(0, 247, 255);
        rect(180,260,12,12);
        rect(205,260,12,12);
        fill(133, 133, 133);
        ellipse(180,180,20,20);
        ellipse(185,150,25,25);
        ellipse(200,110,30,30);
        image(house,75,250,50,50);
        fill(0, 0, 0);
        textSize(20);
        text("Robot's house",160,350);
        text("Wood: " + wood + "        Need: " + w5,20,120);
        text("Stone: " + stone + "        Need: " + w5 ,20,150);

    }
    stroke(0, 0, 0);
    if(score >= u5 && score < u6){
        background(0, 51, 255); //blue
        fill(21, 255, 0);       //green
        rect(0,300,400,100);    //green grass
        fill(171, 88, 0);       //brown
        rect(20,325,100,45);    //upgrades button

        fill(122, 122, 122);
        rect(100,50,200,250);
        for(var i = 60; i < 300; i += 30){
            fill(124, 187, 235);
            rect(120,i,10,20);
        }
        for(var i = 60; i < 300; i += 30){
            fill(124, 187, 235);
            rect(140,i,10,20);
        }
        for(var i = 60; i < 300; i += 30){
            fill(124, 187, 235);
            rect(160,i,10,20);
        }
        for(var i = 60; i < 300; i += 30){
            fill(124, 187, 235);
            rect(180,i,10,20);
        }
        for(var i = 60; i < 300; i += 30){
            fill(124, 187, 235);
            rect(200,i,10,20);
        }
        for(var i = 60; i < 300; i += 30){
            fill(124, 187, 235);
            rect(220,i,10,20);
        }
        for(var i = 60; i < 300; i += 30){
            fill(124, 187, 235);
            rect(240,i,10,20);
        }
        for(var i = 60; i < 300; i += 30){
            fill(124, 187, 235);
            rect(260,i,10,20);
        }
        image(apartment,40,250,50,50);
        fill(0, 0, 0);
        textSize(20);
        text("Hoppers apartment",160,350);
        text("Wood: " + wood + "        Need: " + w6,20,120);
        text("Stone: " + stone + "        Need: " + w6 ,20,150);
    }
    stroke(0, 0, 0);
    if(score >= u6 && score < u7){
        background(0, 0, 0); //blue
        fill(219, 219, 219);
        ellipse(200,450,1000,400);
        fill(171, 88, 0);       //brown
        rect(20,325,100,45);    //upgrades button
        noStroke();
        fill(255, 255, 255);
        rect(150,210,100,40);
        triangle(150,210,190,210,170,50);
        ellipse(170,75,50,20);
        fill(0, 145, 255);
        rect(160,220,80,25);
        ellipse(170,200,20,10);
        ellipse(170,180,18,9);
        ellipse(170,160,16,8);
        ellipse(170,140,14,7);
        ellipse(170,120,12,6);
        ellipse(170,100,10,5);

        ellipse(170,75,20,10);
        fill(138, 138, 138);
        image(moon,40,210,50,50);
        fill(0, 0, 0);
        textSize(20);
        text("Aqualine's moon base",160,350);
        text("Wood: " + wood + "        Need: " + w7,20,120);
        text("Stone: " + stone + "        Need: " + w7 ,20,150);
    }
    stroke(0, 0, 0);
    if(score >= u7){
        background(255, 170, 23); //blue
        fill(204, 54, 0);
        ellipse(200,450,1000,400);
        fill(171, 88, 0);       //brown
        rect(20,325,100,45);    //upgrades button
        noStroke();
        fill(0, 0, 0);
        rect(150,210,100,40);
        triangle(150,210,190,210,170,50);
        ellipse(170,75,50,20);
        fill(255, 234, 0);
        rect(160,220,80,25);
        ellipse(170,200,20,10);
        ellipse(170,180,18,9);
        ellipse(170,160,16,8);
        ellipse(170,140,14,7);
        ellipse(170,120,12,6);
        ellipse(170,100,10,5);
        ellipse(170,75,20,10);
        image(mars,40,210,50,50);
        fill(0, 0, 0);
        textSize(20);
        text("Piceritops's mars base",160,350);
        text("Wood: " + wood + "        Need: " + w8,20,120);
        text("Stone: " + stone + "        Need: " + w8 ,20,150);

    }
    stroke(0, 0, 0);
    if(score > 0){
        textSize(20);           //textsize

        fill(0, 0, 0);          //black
        text("upgrades",30,355);
        text("Cash: " + money,20,60);
        text("Income per click: " + money_i,20,30);
        text("Score: " + score, 20,90);




        fill(255, 255, 255);    //white
        text("upgrades",32,357);
        text("Cash: " + money,22,62);
        text("Income per click: " + money_i,22,32);
        text("Score: " + score, 22,92);
        text("Wood: " + wood,22,122);
        text("Stone: " + stone,22,152);

    }

    if(npc1 === true){
            noStroke();
            if(r < 3){
                fill(0, 0, 0);
            }
            else{
                fill(255, 255, 255);

            }
            triangle(240,253,240,270,253,266);
            rotate(55);
            rect(360,-50,6,2);
            stroke(0, 0, 0);
            rotate(0);
    }

    r ++;
    if(r > npc1cs){
        r = 0;
    }

};
var draw = function() {
    draw = start_screen;

};
mouseReleased = function(){
    playSound(getSound("rpg/coin-jingle"));
    if(draw === run_game && mouseY < 300){
        item_num = floor(random(0,100));
        item_price = floor(random(0,100));
        clicks ++;
        money += money_i;
        score += 11;
        if(c_h === true){
            ch_calc = floor(random(0,ch_percent));
        }
        if(ch_calc === 3){
            money += money_i * 10;
        }
    }
    if(draw === start_screen){
        if(money > 0){
            draw = chat;
        }
        else{
            draw = run_game;
        }
    }
    if(mouseX > 20 && mouseX < 120 && mouseY > 325 && mouseY < 325 + 45){
        draw = upgrades;
    }
    if(mouseX > 280 && mouseX < 380 && mouseY > 325 && mouseY < 325 + 45 ){
        draw = run_game;
    }

    if (draw === upgrades){


    //x2
    if(mouseX > 0 &&
        mouseX < 80 &&
        mouseY > 0 &&
        mouseY < 80 &&
        x2 === false){
            if(money >= x2_price){
                money_i = money_i * 2;
                money -= x2_price;
                x2 = true;
                score += 1000;
            }
    }
    //c_h
    if(mouseX > 80 &&
        mouseX < 160 &&
        mouseY > 0 &&
        mouseY < 80 &&
        c_h === false){
            if(money >= ch_price){
                money -= ch_price;
                c_h = true;
                ch_percent = 20;
                score += 1000;

            }
    }
    //plus 5
    if(mouseX > 160 &&
        mouseX < 240 &&
        mouseY > 0 &&
        mouseY < 80 &&
        plus5 === false){
            if(money >= plus5_cost){
                money -= plus5_cost;
                plus5 = true;
                money_i += 5;
                score += 1000;

            }
    }
    //crith 20%
    if(mouseX > 240 &&
        mouseX < 320 &&
        mouseY > 0 &&
        mouseY < 80 &&
        crith === false){
            if(money >= crith_cost){
                money -= crith_cost;
                crith = true;
                c_h = true;
                ch_percent = 10;
                score += 1000;

            }
    }

    //x22
    if(mouseX > 320 &&
        mouseX < 400 &&
        mouseY > 0 &&
        mouseY < 80 &&
        x22 === false){
            if(money >= x22_cost){
                money -=x22_cost;
                x22 = true;
                money_i = money_i * 2;
                score += 1000;

            }
    }

    //npc1
    if(mouseX > 0 &&
        mouseX < 80 &&
        mouseY > 80 &&
        mouseY < 160 &&
        npc1 === false){
            if(money >= npc1_price){
                money -= npc1_price;
                npc1 = true;
                score += 1000;
            }
    }

    //npcF
    if(mouseX > 80 &&
        mouseX < 160 &&
        mouseY > 80 &&
        mouseY < 160 &&
        npcf === false){
            if(money >= npcf_price){
                money -= npcf_price;
                npcf = true;
                score += 1000;
                npc1cs = npc1cs /2;
            }
    }

    //npciiiiii
    if(mouseX > 160 &&
        mouseX < 240 &&
        mouseY > 80 &&
        mouseY < 160 &&
        npci === false){
            if(money >= npci_price){
                money -= npci_price;
                npci = true;
                score += 1000;
                npc1m = npc1m * 2;
            }
    }

    //npc222222222
    if(mouseX > 240 &&
        mouseX < 320 &&
        mouseY > 80 &&
        mouseY < 160 &&
        npc2 === false){
            if(money >= npc2_price){
                money -= npc2_price;
                npc2 = true;
                score += 1000;
            }
    }

    //npc5555555555555
    if(mouseX > 320 &&
        mouseX < 400 &&
        mouseY > 80 &&
        mouseY < 160 &&
        npc_5 === false){
            if(money >= npc_5_price){
                money -= npc_5_price;
                npc_5 = true;
                score += 1000;
                npc1m += 5;
            }
    }

    //item
    if(mouseX > 0 &&
        mouseX < 80 &&
        mouseY > 160 &&
        mouseY < 240 &&
        item === false){
            if(money >= item_price){
                score += item_num;
                money -= item_price;
                item_num = floor(random(0,100));
                item_price = floor(random(0,100));
            }
    }



    //back
    if(mouseX > 320 &&
        mouseX < 400 &&
        mouseY > 160 &&
        mouseY < 240 && draw === upgrades){
            draw = run_game;
    }
    }
};
