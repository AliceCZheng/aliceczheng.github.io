var randomCodeArray = [[1,2,3],[1,2,4],[1,3,2],[1,3,4],[1,4,2],[1,4,3],[2,1,3],[2,1,4],[2,3,1],[2,3,4],[2,4,1],[2,4,3],[3,1,2],[3,1,4],[3,2,1],[3,2,4],[3,4,1],[3,4,2],[4,1,2],[4,1,3],[4,2,1],[4,2,3],[4,3,1],[4,3,2]];
var numCodes = 24;
var wordArray = [];



function teamName() {  
    var teamNameInput = document.getElementById("team-name-input");
    var teamName = document.getElementById("team-name");
    teamName.innerHTML = teamNameInput.value;
}

function roomCombo() {  
    var roomComboInput = document.getElementById("room-combo-input");
    var roomCombo = document.getElementById("room-combo");
    roomCombo.innerHTML = roomComboInput.value;
}



