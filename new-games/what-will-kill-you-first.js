/**
 * click or press any key to continue.
 *
 * the point of the game is to survive as long as posible.
 * every single day efects your health, your mental stability
 * financials and your hunger.
 *
 * the big question is: what will kill you first?
 * malnutrition?       (hunger)
 * banckruptcy?        (money)
 * suicide?            (happiness)
 * natural death?      (health)
 *
 * once you die, your score is created by adding together all
 * remaining points (health, hunger Etc.) and multiplying
 * it by the number of days you survived * 3.
 *
 * top three high-scores;
 *
 * 1. 489 = longley colden
 * 2. 421 = philip othelo
 * 3. 309 = KingKhan
 * 4. 257 = elniko-334
 *
 * have a great weekend!
 *
**/

var score = 0;
var death = true;
var ha = 5;
var he = 5;
var hu = 5;
var mo = 5;
var grow = 0;
var it = 0;
var leaf1 = getImage("avatars/leafers-seed");
var leaf2 = getImage("avatars/leafers-seedling");
var leaf3 = getImage("avatars/leafers-sapling");
var leaf4 = getImage("avatars/leafers-tree");
var leaf5 = getImage("avatars/leafers-ultimate");
var heart = getImage("cute/Heart");


//#1 health +1
var things = ['One day you decide to go horseback\n ridding. unfortunately the horse\n decides it doesn’t like you. First\n it throws you off its back, then\n tramples you under foot. Then to add\n insult to injury, it runs all the way back\n to the ranch leaving you to hike the ten\n miles back on foot!\n\nhealth: -1',

//#2 health -1
'One day you are out shopping for \nChristmas. unfortunately you are so \nfocused on what to get your friend, \nthat you miss the sign, walk right \nthrough the caution tape, and fall \ninto a open man hole, spraining your \nankle!\n\nhealth: -1',


//#3 health -1
'You are out in the city at night looking \nat the stars, when you notice a sign \nadvertising a beta test for a new \nmiracle drug. You decide to sign up at \ngreat risk of personal injury. \nFortunately the drug really is a \nmiracle, you have never felt healthier!\n\nhealth: +1',

//#4 health -1
'You have always wanted to climb a tall \nmountain, and now that you are a\ncouple days old, you decide to try. \nYou pack everything you will need \nvery carefully and start climb. It is a tall \nmountain and you are planning \non staying one night. \nUnfortunately a big storm comes \nup and you get struck by lightning!\n\nHealth: -1',

//#5 money -1
'You are driving peacefully down the \nstreet when a car pulls out and nearly \nhits you. Unfortunately to make things \nworse, the guy then gets out and \nsmashes In your windshield with a \nbaseball bat. Do you \nwant to know how expensive \nthose things are?\n\nmoney: -1',

//#6 money -1
'You live in vermont, the state with the \nfewest tornedos in the United states. \nUnfortunately, luck has never been \none of your strong suits and \nyour three story mansion \nis 100% demolished!\n\nmoney: -1',

//#7 money -1
'Your friend gives you some very \ngood intel, telling you that he has a \nsuper good hedge fund going. \nStupidly you trust him and \nadvance $10,000 dollars to the \ncompany. \nThe next day your friend moves to \nMexico and the hedge fund \ndisappears. So much for friends.\n\nmoney: -1',

//#8 money +1
'You are walking down the street, \nwhen you see somebody getting \nmugged. On a whim, you \ndecide to make siren sounds. \nEven though it sounds fake, \nit still scares off the attacker. \nYou go up to see if hes OK but\nhe is out cold. You check \nin his wallet and see \nhe has LOTS of cash. \nYou decide you take it, \nafter all, you DID save him.\n\nmoney: +1',

//#9 hunger +1
'it is Halloween, so \nyou decide to dress up and go \nto Chipotle for a free burrito. \nYou dress as a pirate, \nand eat the best burrito of your life!\n\nhunger: +1',

//#10 hunger -1
'You decide to eat out at a \nfancy new Brazilian restaurant. \nUnfortunately, all the menus \nare in a Spanish -you have \nno idea what you are ordering. \nBy sheer chance you end up with \na mushroom stew. You hate mushrooms. \nYou cant even eat a bite.\n\nhunger: -1',

//#11 hunger -1
'It has been a long a time \nsense you have gone grocery \nshopping, so you go to Cub \nand buy a whole bunch \nof food. But by some freak \naccident, the truck opens up \non the freeway and \nyou lose everything!\n\nhunger: -1',

//#12 hunger -1
'You buy a whole bunch \nof perishables, but then \nyou go to Guatemala, \nand when you get back, it is \nall spoiled and crawling with ants!\n\nhungry: -1',

//#13 happiness -1
'your father is diagnosed \nwith skin cancer. They say \nhe has a year or so, \nbut they were wrong, he \ndies within the week.\n\nhappiness: -1',

//#14 happiness +1
'It is your birthday, and \nall of your family is there \nand they are all happy \nto see you and the food \nis great and all of your \npresents are awesome!\n\nhappiness: +1',

//#15 happiness -1
'Today at the park you \nlose your wedding ring. \nIt has little money value, \nbut it hurts your heart to lose it.\n\nhappiness: -1',

//#16 happiness -1
'The deer population \nexploded this year, and \nwhen you go out to the \ngarden this morning, you \nsee that the deer have eaten \nEVERYTHING.\n\nhappiness: -1',

//#17 happiness -1
'It is your sisters birthday, \nso you go and buy her a \nsuper expensive present, \nbut unfortunately she hates it. \nNot only are you depressed now, \nbut you also wasted tons of money.\n\nhappiness: -1',

//#18 happiness -1
'You left your car on the street \nwell you dropped of some letters \nat the post office. \nWhen you come out, your \ncar crushed by a cement truck!\n\nhappiness: -1',

//#19 happiness - 1
'The woods by your house \ncatches fire. Luckily your \nhouse is not damaged, \nbut the land is pretty \nbadly burnt.\n\nhappiness: -1',

//#20 happiness +1
'You decide to buy some \nscratch off lottery tickets \n-and you win!\n\nhappiness: +1',


//#21
'You are on your way to \nget your car fixed \nwhen you trip and break your \nleg! Luckily insurance \ncovers all the costs, but \nit still sucks!\n\nhealth: -1',

//#22
'You go to the doctor \nfor a routine check up. And  \nthey discover a malignant tumor \nunder the third left rib.\n\nhealth: -1',

//#23
'You decide to go skydiving, \nbut as you get into the \nplane, you slam your hand \nin the plane door.\n\nhealth: -1',

//#24
'You go to the doctor for a routine \ncheck up. Everything appears OK, \nbut doctors are dumb, and \nhe charged you way too \nmuch!\n\nhealth: +1'];




var ha2 = [0,0,0,0,0,0,0,0,0,0,0,0,-1,+1,-1,-1,-1,-1,-1,+1,0,
0,0,0,0];
var he2 = [-1,-1,+1,-1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1,-1,-1,+1];
var hu2 = [0,0,0,0,0,0,0,0,+1,-1,-1,-1,0,0,0,0,0,0,0,0,0,0,0,0,0];
var mo2 = [0,0,0,0,-1,-1,-1,+1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var i = floor(random(0 , things.length));



var draw_paging = 0;
var state_one = function(){
    background(92, 195, 250);
    if(grow > -1 && grow < 5){
        image(leaf1,200,200);
    }
    if(grow > 4 && grow < 10){
        image(leaf2,200,200);
    }
    if(grow > 9 && grow < 15){
        image(leaf3,200,200);
    }
    if(grow > 14 && grow < 20){
        image(leaf4,200,200);
    }
    if(grow > 19){
        image(leaf5,200,200);
    }

    fill(0, 0, 0);
    textSize(20);
    text("happiness:",20,30);
    text(ha, 125,30);
    text("health:",20,60);
    text(he,100,60);
    text("hunger:",20,90);
    text(hu,100,90);
    text("money:",20,120);
    text(mo,100,120);
    text("Day:",20,150);
    text(grow,70,150);
};

var state_two = function(){
    background(117, 79, 68);
    fill(194, 194, 194);
    text(things[i],50,50);

    if(hu < 1){
        background(127, 246, 250);
        image(heart,250,150);
        fill(255, 0, 0);
        death = false;
        score = ha + mo + hu + he * grow * 3;
        textSize(30);
        text('You died of malnutrition:',20,50);
        text("Score:",20,100);
        text(score,200,100);
        text("Days:",20,150);
        text(grow,200,150);
        text("happiness:",20,200);
        text(ha, 200,200);
        text("health:",20,250);
        text(he,200,250);
        text("hunger:",20,300);
        text(hu,200,300);
        text("money:",20,350);
        text(mo,200,350);
    }
    if(he < 1){
        background(166, 0, 0);
        image(heart,250,150);
        fill(255, 0, 0);
        death = false;
        score = ha + mo + he + hu * grow * 3;
        textSize(30);
        text('You died of natural causes:',20,50);
        text("Score:",20,100);
        text(score,200,100);
        text("Days:",20,150);
        text(grow,200,150);
        text("happiness:",20,200);
        text(ha, 200,200);
        text("health:",20,250);
        text(he,200,250);
        text("hunger:",20,300);
        text(hu,200,300);
        text("money:",20,350);
        text(mo,200,350);
    }
    if(ha < 1){
        background(166, 0, 0);
        image(heart,250,150);
        fill(255, 0, 0);
        death = false;
        score = ha + mo + he + hu * grow * 3;
        textSize(30);
        text('You committed suicide:',20,50);
        text("Score:",20,100);
        text(score,200,100);
        text("Days:",20,150);
        text(grow,200,150);
        text("happiness:",20,200);
        text(ha, 200,200);
        text("health:",20,250);
        text(he,200,250);
        text("hunger:",20,300);
        text(hu,200,300);
        text("money:",20,350);
        text(mo,200,350);
    }
    if(mo < 1){
        image(heart,250,150);
        background(166, 0, 0);
        fill(255, 0, 0);
        death = false;
        score = ha + mo + he + hu * grow * 3;
        textSize(30);
        text('You died homeless:',20,50);
        text("Score:",20,100);
        text(score,200,100);
        text("Days:",20,150);
        text(grow,200,150);
        text("happiness:",20,200);
        text(ha, 200,200);
        text("health:",20,250);
        text(he,200,250);
        text("hunger:",20,300);
        text(hu,200,300);
        text("money:",20,350);
        text(mo,200,350);
    }
};



var draw = function() {
    if(draw_paging===0){
     state_one();
    }if(draw_paging===1){
     state_two();
    }
};

var keyReleased = function(){
    if (death === true){
    playSound(getSound("rpg/giant-yah"));
    switch(draw_paging){
        case 1:
            grow++;
            draw_paging = 0;
            ha = ha + ha2[i];
            he = he + he2[i];
            hu = hu + hu2[i];
            mo = mo + mo2[i];

            i = floor(random(0 , things.length));
            break;

        case 0:
            draw_paging = 1;
            break;

    }
    }
};
