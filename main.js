var randomCodeArray = [[1,2,3],[1,2,4],[1,3,2],[1,3,4],[1,4,2],[1,4,3],[2,1,3],[2,1,4],[2,3,1],[2,3,4],[2,4,1],[2,4,3],[3,1,2],[3,1,4],[3,2,1],[3,2,4],[3,4,1],[3,4,2],[4,1,2],[4,1,3],[4,2,1],[4,2,3],[4,3,1],[4,3,2]];

var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var randomCodeIndex = [[22, 10, 14, 3, 5 ,0, 6, 1], [13, 16, 12, 21, 23, 8, 7, 17], [ 1,23,17, 5,22, 6, 2, 7],[ 3,14,13,8,15,18, 4,20],[16,2,18,19, 1,11,12, 6],[ 9,4,22, 3,15,10, 5,17],[14,0,23, 8,21, 7,20,13],[18,6, 4, 8,23,10,13,0],[5, 9,21,22,14, 1, 3,11],[17,16,2,20,12,15,19,7],[ 11,8, 5, 6,10,21,12,17],[3, 7,22, 5, 6, 9,11,19]];

var randomWordArray = ["HONEY","VETERINARIAN", "BLIZZARD", "OPERA", "SOCK", "FOREST", "REVOLUTION", "SHAKESPEARE", "PIANO", "MARIJUANA", "POGGERS", "MAPLE", "PIRATE", "DRAGON", "PLANE", "PHOENIX", "BRAIN", "MUFFIN", "PINECONE", "JUPITER", "DOMINOES", "HOURGLASS", "69420", "YEET", "SANDPAPER", "QUIDDITCH", "DUST BUNNY"];


var yourWordSet=[];
var theirWordSet=[];


var yourCodeIndex;
var theirCodeIndex;


var letter;

var numCodes = 24;
var wordArray = [];

var round = 1;

var teamBoolean =0;
var roomBoolean = 0;

var combo;



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
//    document.getElementById("mainbox").style.display = "none";
//    document.getElementById("mainbox2").style.display = "flex";
    
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
   
 
}


