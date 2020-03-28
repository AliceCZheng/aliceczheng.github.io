var randomCodeArray = [[1,2,3],[1,2,4],[1,3,2],[1,3,4],[1,4,2],[1,4,3],[2,1,3],[2,1,4],[2,3,1],[2,3,4],[2,4,1],[2,4,3],[3,1,2],[3,1,4],[3,2,1],[3,2,4],[3,4,1],[3,4,2],[4,1,2],[4,1,3],[4,2,1],[4,2,3],[4,3,1],[4,3,2]];

var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var letter;

var numCodes = 24;
var wordArray = [];

var teamBoolean =0;
var roomBoolean = 0;

var randomWordArray = ["HONEY","VETERINARIAN", "BLIZZARD", "OPERA", "SOCK", "FOREST", "REVOLUTION", "SHAKESPEARE", "PIANO", "MARIJUANA", "POGGERS", "MAPLE", "PIRATE", "DRAGON", "PLANE", "PHOENIX", "BRAIN", "MUFFIN", "PINECONE", "JUPITER", "DOMINOES", "HOURGLASS", "69420", "YEET", "SANDPAPER", "QUIDDITCH", "DUST BUNNY"];

var combo;




function teamName() {  
    var teamNameInput = document.getElementById("team-name-input");
    var teamName = document.getElementById("team-name");
    
    teamName.innerHTML = teamNameInput.value;
    
    
    if (teamNameInput.value != "") {
        teamBoolean += 1;
    } else {
        teamBoolean = 0;
    }
    if ((teamBoolean>0)&& (roomBoolean>0)) {
        document.getElementById("continue-button").disabled = false;
    } else {
        document.getElementById("continue-button").disabled = true;
    }
}

function roomCombo() {  
    var roomComboInput = document.getElementById("room-combo-input");
    var roomCombo = document.getElementById("room-combo");
    roomCombo.innerHTML = roomComboInput.value;
    roomComboInput.value = roomComboInput.value.replace(/\s+/g, '');
    combo = roomComboInput.value;
    if (roomComboInput.value != "") {
        roomBoolean = 1;
    }  else {
        roomBoolean = 0;
    }
    if ((teamBoolean>0)&& (roomBoolean>0)) {
        document.getElementById("continue-button").disabled = false;
    } else {
        document.getElementById("continue-button").disabled = true;
    }
    
    

    
}






function onDisplay() {
//    document.getElementById("mainbox").style.display = "none";
    document.getElementById("mainbox2").style.display = "flex";
    
    if (document.getElementById("warmGradientRadio").checked) {
        document.getElementById("mainbox2").style.background = "url('images/Warm-Gradient.png') no-repeat center center";
    } else {
        document.getElementById("mainbox2").style.background = "url('images/Cold-Gradient.jpg') no-repeat center center";
    }
    var current_date = new Date();
    var cday = current_date.getDate();
    var chour = current_date.getHours();
    var cminute = current_date.getMinutes();
    
//    for (var j = 0; j < 4; j++) {
//        var wordIndex = alphabet.indexOf(combo[j]);
//        wordIndex = wordIndex % randomWordArray.length;
//        document.getElementById("word" + j).innerHTML = randomWordArray[wordIndex];
//        delete randomWordArray[wordIndex];
//    }
    
    var j;
    for (j = 0; j < 4; j++) {
        var wordIndex = alphabet.indexOf(combo[j]);
        wordIndex = wordIndex % randomWordArray.length;
        var wordID = "word" + (j+1);
        document.getElementById("word" + (j+1)).innerHTML = randomWordArray[wordIndex];
        randomWordArray.splice(wordIndex,1);
        
    }

    
     
 
}


