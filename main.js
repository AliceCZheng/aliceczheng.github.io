var randomCodeArray = [[1,2,3],[1,2,4],[1,3,2],[1,3,4],[1,4,2],[1,4,3],[2,1,3],[2,1,4],[2,3,1],[2,3,4],[2,4,1],[2,4,3],[3,1,2],[3,1,4],[3,2,1],[3,2,4],[3,4,1],[3,4,2],[4,1,2],[4,1,3],[4,2,1],[4,2,3],[4,3,1],[4,3,2]];

var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var randomCodeIndex = [[22, 10, 14, 3, 5 ,0, 6, 1], [13, 16, 12, 21, 23, 8, 7, 17], [ 1,23,17, 5,22, 6, 2, 7],[ 3,14,13,8,15,18, 4,20],[16,2,18,19, 1,11,12, 6],[ 9,4,22, 3,15,10, 5,17],[14,0,23, 8,21, 7,20,13],[18,6, 4, 8,23,10,13,0],[5, 9,21,22,14, 1, 3,11],[17,16,2,20,12,15,19,7],[ 11,8, 5, 6,10,21,12,17],[3, 7,22, 5, 6, 9,11,19]];

var randomWordArray = ["HONEY","VETERINARIAN", "BLIZZARD", "OPERA", "SOCK", "FOREST", "REVOLUTION", "SHAKESPEARE", "PIANO", "MARIJUANA", "POGGERS", "MAPLE", "PIRATE", "DRAGON", "PLANE", "PHOENIX", "BRAIN", "MUFFIN", "PINECONE", "JUPITER", "DOMINOES", "HOURGLASS", "69420", "YEET", "SANDPAPER", "QUIDDITCH", "DUST BUNNY", "SCRAMBLE", "PIKACHU", "PUZZLE"];


var yourWordSet=[];
var theirWordSet=[];


var yourCodeIndex=[];
var theirCodeIndex=[];


var letter;

var numCodes = 24;

var round = 1;
var oldround;

var teamBoolean =0;
var roomBoolean = 0;

var combo;

var x1 = false;
var x3 = false;
var x4 = false;
var x2 = false;

var check1 = false;
var check3 = false;
var check4 = false;
var check2 = false;



//HANDLE TEAM NAME ENTERING FUNCTIONS
function teamName() {  
    //SHOW ENTERED TEAM NAME
    var teamNameInput = document.getElementById("team-name-input");
    var teamName = document.getElementById("team-name");
    teamName.innerHTML = teamNameInput.value;
    //CHECK TEAM HAS CORRECT VALUE
    if (teamNameInput.value != "") {
        teamBoolean += 1;
    } else { 
        teamBoolean = 0;
    }
    //CHECK BOTH INPUTS FULFILLED
    if ((teamBoolean>0)&& (roomBoolean>0)) {
        document.getElementById("continue-button").disabled = false;
    } else {
        document.getElementById("continue-button").disabled = true;
    }
}

//HANDLE CODE ENTERING FUNCTIONS
function roomCombo() {
    //SHOW ENTERED COMBO NAME
    var roomComboInput = document.getElementById("room-combo-input");
    var roomCombo = document.getElementById("room-combo");
    roomCombo.innerHTML = roomComboInput.value;
    roomComboInput.value = roomComboInput.value.replace(/\s+/g, '');
    combo = roomComboInput.value;
    
    //CHECK COMBO HAS CORRECT VALUE
    if (roomComboInput.value != "") {
        roomBoolean = 1;
    }  else {
        roomBoolean = 0;
    }
    //CHECK BOTH INPUTS FULFILLED
    if ((teamBoolean>0)&& (roomBoolean>0)) {
        document.getElementById("continue-button").disabled = false;
    } else {
        document.getElementById("continue-button").disabled = true;
    }  
}

//HANDLE DATA INPUT AND GENERATION OF FIRST SCREEN
function onDisplay() {
    
    //CHANGE DISPLAY ON SCREEN - testing
    document.getElementById("mainbox").style.display = "none";
    document.getElementById("mainbox2").style.display = "flex";
    
    document.getElementById("mainbox3").style.display = "flex";
    
    //GENERATE SET RANDOM STUFF
    var current_date = new Date();
    var cday = current_date.getDate();
    var chour = current_date.getHours();
    
    //WORD SET ASSIGNMENT
    var j;
    var codeIndex
    for (j = 0; j < 2; j++) {
        var wordIndex;
        if (isNaN(combo[j])) {
          wordIndex =alphabet.indexOf((combo[j].toLowerCase()));
        } else {
            wordIndex = combo[j];
        }
        
        codeIndex = (wordIndex*17 +cday)%randomCodeIndex.length;
        wordIndex = wordIndex % randomWordArray.length;
        

        if (document.getElementById("warmGradientRadio").checked) {
            yourWordSet.push(randomWordArray[wordIndex]);

        } else {
            theirWordSet.push(randomWordArray[wordIndex]);

        }
        randomWordArray.splice(wordIndex,1);
        wordIndex = (wordIndex + cday) % randomWordArray.length;
        if ((document.getElementById("warmGradientRadio").checked)) {
            yourWordSet.push(randomWordArray[wordIndex]);
        } else {
            theirWordSet.push(randomWordArray[wordIndex]);
        }
        
        randomWordArray.splice(wordIndex,1);   
    }
    
    if (document.getElementById("warmGradientRadio").checked) {
            yourCodeIndex = randomCodeIndex[codeIndex];
            randomCodeIndex.splice(codeIndex,1);
        } else {
            theirCodeIndex = randomCodeIndex[codeIndex];
            randomCodeIndex.splice(codeIndex,1);
        }
    for (j = 2; j < 4; j++) {
        
        if (isNaN(combo[j])) {
          wordIndex =alphabet.indexOf((combo[j].toLowerCase()));
        } else {
            wordIndex = combo[j];
        }
        codeIndex = (wordIndex*17 +cday)%randomCodeIndex.length;
        wordIndex = wordIndex % randomWordArray.length;

        if (document.getElementById("coldGradientRadio").checked) {
            yourWordSet.push(randomWordArray[wordIndex]);
        } else {
            theirWordSet.push(randomWordArray[wordIndex]);
        }
        randomWordArray.splice(wordIndex,1);
        wordIndex = (wordIndex + cday) % randomWordArray.length;
        if ((document.getElementById("coldGradientRadio").checked)) {
            yourWordSet.push(randomWordArray[wordIndex]);
            yourCodeIndex = codeIndex
        } else {
            theirWordSet.push(randomWordArray[wordIndex]);
            theirCodeIndex = codeIndex;
        }
        
        randomWordArray.splice(wordIndex,1);   
    }
    
    if (document.getElementById("coldGradientRadio").checked) {
            yourCodeIndex = randomCodeIndex[codeIndex];
            randomCodeIndex.splice(codeIndex,1);
        } else {
            theirCodeIndex = randomCodeIndex[codeIndex];
            randomCodeIndex.splice(codeIndex,1);
        }
    
    //COLOR CHANGE
    if (document.getElementById("warmGradientRadio").checked) {
        document.getElementById("mainbox2").style.background = "url('images/Warm-Gradient.png') no-repeat center center";
    } else {
        document.getElementById("mainbox2").style.background = "url('images/Cold-Gradient.jpg') no-repeat center center";
    }
    
    //SHOW WORD SET ON SCREEN
    var k;
    for (k = 0; k < 4; k++) {
        document.getElementById("word" + (k+1)).innerHTML = yourWordSet[k];
    }
    document.getElementById("code").innerHTML = randomCodeArray[yourCodeIndex[round-1]];
   
 
}





function roundclick(roundnum) {
    oldround = round;
    round = roundnum;
    
    document.getElementById("roundnum" + round).style.textDecoration= "overline underline";
    
    document.getElementById("code").innerHTML = randomCodeArray[yourCodeIndex[round-1]];

    
    document.getElementById("roundnum" + oldround).style.textDecoration= "none";
    
    console.log("meow");
    console.log(yourCodeIndex.toString());
    console.log(theirCodeIndex.toString());
    
    
    
//    document.getElementsByClassName("round3").style.background = "rgba(255,255,255,0.7)";
////    
////    document.getElementsByClassName("round" + roundnum).style.backgroundColor = "white";
//
//    document.getElementsByClassName("round1").style.background = "rgba(255,255,255,0)";
}


function roundMO(roundnum) {   
    document.getElementById("roundnum" + roundnum).style.textDecoration= "overline underline";
    

    
}
function roundMOut(roundnum) {
    

    if (roundnum != round) {
    document.getElementById("roundnum" + roundnum).style.textDecoration= "none";
    }

    document.getElementById("roundnum" + oldround).style.textDecoration= "none";

    
    document.getElementById("roundnum" + round).style.textDecoration= "overline underline";
}







//Win Tracker X's and Checks
function x1click() {
   if (x1) {
       document.getElementById("x1").style.background="url(node_modules/bootstrap-icons/icons/x.svg)";
       x1=false;
   } else { 
        document.getElementById("x1").style.background="url(node_modules/bootstrap-icons/icons/x-circle-fill.svg)";
       x1 = true;
    }
}
function x1MO() {   document.getElementById("x1").style.background="url(node_modules/bootstrap-icons/icons/x-circle-fill.svg)";
    
}
function x1MOut() {
    if (x1) {
        document.getElementById("x1").style.background="url(node_modules/bootstrap-icons/icons/x-circle-fill.svg)";
    } else {
         document.getElementById("x1").style.background="url(node_modules/bootstrap-icons/icons/x.svg)";
    }
}
function x2click() {
   if (x2) {
       document.getElementById("x2").style.background="url(node_modules/bootstrap-icons/icons/x.svg)";
       x2=false;
   } else { 
        document.getElementById("x2").style.background="url(node_modules/bootstrap-icons/icons/x-circle-fill.svg)";
       x2 = true;
    }
}
function x2MO() {   document.getElementById("x2").style.background="url(node_modules/bootstrap-icons/icons/x-circle-fill.svg)";
    
}
function x2MOut() {
    if (x2) {
        document.getElementById("x2").style.background="url(node_modules/bootstrap-icons/icons/x-circle-fill.svg)";
    } else {
         document.getElementById("x2").style.background="url(node_modules/bootstrap-icons/icons/x.svg)";
    }
}
function x3click() {
   if (x3) {
       document.getElementById("x3").style.background="url(node_modules/bootstrap-icons/icons/x.svg)";
       x3=false;
   } else { 
        document.getElementById("x3").style.background="url(node_modules/bootstrap-icons/icons/x-circle-fill.svg)";
       x3 = true;
    }
}
function x3MO() {   document.getElementById("x3").style.background="url(node_modules/bootstrap-icons/icons/x-circle-fill.svg)";
    
}
function x3MOut() {
    if (x3) {
        document.getElementById("x3").style.background="url(node_modules/bootstrap-icons/icons/x-circle-fill.svg)";
    } else {
         document.getElementById("x3").style.background="url(node_modules/bootstrap-icons/icons/x.svg)";
    }
}
function x4click() {
   if (x4) {
       document.getElementById("x4").style.background="url(node_modules/bootstrap-icons/icons/x.svg)";
       x4=false;
   } else { 
        document.getElementById("x4").style.background="url(node_modules/bootstrap-icons/icons/x-circle-fill.svg)";
       x4 = true;
    }
}
function x4MO() {   document.getElementById("x4").style.background="url(node_modules/bootstrap-icons/icons/x-circle-fill.svg)";
    
}
function x4MOut() {
    if (x4) {
        document.getElementById("x4").style.background="url(node_modules/bootstrap-icons/icons/x-circle-fill.svg)";
    } else {
         document.getElementById("x4").style.background="url(node_modules/bootstrap-icons/icons/x.svg)";
    }
}
function check1click() {
   if (check1) {
       document.getElementById("check1").style.background="url(node_modules/bootstrap-icons/icons/check.svg)";
       check1=false;
   } else { 
        document.getElementById("check1").style.background="url(node_modules/bootstrap-icons/icons/check-circle.svg)";
       check1 = true;
    }
}
function check1MO() {   document.getElementById("check1").style.background="url(node_modules/bootstrap-icons/icons/check-circle.svg)";
    
}
function check1MOut() {
    if (check1) {
        document.getElementById("check1").style.background="url(node_modules/bootstrap-icons/icons/check-circle.svg)";
    } else {
         document.getElementById("check1").style.background="url(node_modules/bootstrap-icons/icons/check.svg)";
    }
}
function check2click() {
   if (check2) {
       document.getElementById("check2").style.background="url(node_modules/bootstrap-icons/icons/check.svg)";
       check2=false;
   } else { 
        document.getElementById("check2").style.background="url(node_modules/bootstrap-icons/icons/check-circle.svg)";
       check2 = true;
    }
}
function check2MO() {   document.getElementById("check2").style.background="url(node_modules/bootstrap-icons/icons/check-circle.svg)";
    
}
function check2MOut() {
    if (check2) {
        document.getElementById("check2").style.background="url(node_modules/bootstrap-icons/icons/check-circle.svg)";
    } else {
         document.getElementById("check2").style.background="url(node_modules/bootstrap-icons/icons/check.svg)";
    }
}
function check3click() {
   if (check3) {
       document.getElementById("check3").style.background="url(node_modules/bootstrap-icons/icons/check.svg)";
       check3=false;
   } else { 
        document.getElementById("check3").style.background="url(node_modules/bootstrap-icons/icons/check-circle.svg)";
       check3 = true;
    }
}
function check3MO() {   document.getElementById("check3").style.background="url(node_modules/bootstrap-icons/icons/check-circle.svg)";
    
}
function check3MOut() {
    if (check3) {
        document.getElementById("check3").style.background="url(node_modules/bootstrap-icons/icons/check-circle.svg)";
    } else {
         document.getElementById("check3").style.background="url(node_modules/bootstrap-icons/icons/check.svg)";
    }
}
function check4click() {
   if (check4) {
       document.getElementById("check4").style.background="url(node_modules/bootstrap-icons/icons/check.svg)";
       check4=false;
   } else { 
        document.getElementById("check4").style.background="url(node_modules/bootstrap-icons/icons/check-circle.svg)";
       check4 = true;
    }
}
function check4MO() {   document.getElementById("check4").style.background="url(node_modules/bootstrap-icons/icons/check-circle.svg)";
    
}
function check4MOut() {
    if (check4) {
        document.getElementById("check4").style.background="url(node_modules/bootstrap-icons/icons/check-circle.svg)";
    } else {
         document.getElementById("check4").style.background="url(node_modules/bootstrap-icons/icons/check.svg)";
    }
}
