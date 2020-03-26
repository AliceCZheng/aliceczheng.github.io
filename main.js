var randomCodeArray = [[1,2,3],[1,2,4],[1,3,2],[1,3,4],[1,4,2],[1,4,3],[2,1,3],[2,1,4],[2,3,1],[2,3,4],[2,4,1],[2,4,3],[3,1,2],[3,1,4],[3,2,1],[3,2,4],[3,4,1],[3,4,2],[4,1,2],[4,1,3],[4,2,1],[4,2,3],[4,3,1],[4,3,2]];
var numCodes = 24;
var wordArray = [];

var teamBoolean =0;
var roomBoolean = 0;









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
    
    if (roomComboInput.value != "") {
        roomBoolean += 1;
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
    var myVar;
    var i;
    for (i = 100; i>0 ; i--) {
         document.getElementById("mainbox").style.opacity = (i/100);
        
    }
 
}


