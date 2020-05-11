var createPolitician = function(name, partyColor){

    var politician = {};
    politician.name = name;
    politician.electionResults = null;
    politician.totalVotes = 0;
    politician.partyColor = partyColor;
    return politician;
};

var michelle = createPolitician("Michelle Obama",[245, 141, 136]);
var kamala = createPolitician("Some Other Person", [132, 17, 11]);


michelle.electionResults = [4, 2, 40, 4, 22, 30, 3, 1, 2, 15, 80, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 60, 7, 3, 70, 3, 60, 1, 30, 17, 3, 1, 2, 11, 2, 3, 1];

kamala.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];

michelle.electionResults[9] = 1;
kamala.electionResults[9] = 28;

michelle.electionResults[4] = 17;
kamala.electionResults[4] = 38;

michelle.electionResults[43] = 11;
kamala.electionResults[43] = 27;

michelle.tallyUpTotalVotes = function(){
      this.totalVotes = 0;
      for (var i = 0; i < this.electionResults.length; i++){
        this.totalVotes = this.totalVotes + this.electionResults[i];
      }
    };

kamala.tallyUpTotalVotes = function(){
      this.totalVotes = 0;
      for (var i = 0; i < this.electionResults.length; i++){
        this.totalVotes = this.totalVotes + this.electionResults[i];
      }
    };

console.log(michelle.electionResults);
console.log(kamala.electionResults);

michelle.tallyUpTotalVotes();
kamala.tallyUpTotalVotes();

console.log(michelle.totalVotes);
console.log(kamala.totalVotes);

var winner = "???";
if (michelle.totalVotes > kamala.totalVotes){
    winner = michelle.name;
}
else if (michelle.totalVotes < kamala.totalVotes){
    winner = kamala.name;
}
else{
    winner = "DRAW.";
}

console.log("AND THE WINNER IS..." + winner + "!!!");




var setStateResults = function(state){
    theStates[state].winner = null;
    if (michelle.electionResults[state] > kamala.electionResults[state]) {
      theStates[state].winner = michelle;
    }
    else if (michelle.electionResults[state] < kamala.electionResults[state]) {
      theStates[state].winner = kamala;
    }
    var stateWinner = theStates[state].winner;
    if (stateWinner !== null) {
      theStates[state].rgbColor = stateWinner.partyColor;
    }
    else {
      theStates[state].rgbColor = [11,32,57];
    };

    var stateInfoTable = document.getElementById('stateResults');
    var header = stateInfoTable.children[0];
    var body = stateInfoTable.children[1];
    var stateName = header.children[0].children[0];
    var abbrev = header.children[0].children[1];
    var candidateMichelle = body.children[0].children[0];
    var candidateKamala = body.children[1].children[0];
    var candidateMichelleResults = body.children[0].children[1];
    var candidateKamalaResults = body.children[1].children[1];
    var winnersName = body.children[2].children[1];

    stateName.innerText = theStates[state].nameFull;
    abbrev.innerText = "(" +theStates[state].nameAbbrev + ")";

    candidateMichelle.innerText = michelle.name;
    candidateKamala.innerText = kamala.name;

    candidateMichelleResults.innerText = michelle.electionResults[state];
    candidateKamalaResults.innerText = kamala.electionResults[state];

    if (theStates[state].winner === null){
      winnersName.innerText = "DRAW";
    }
    else {
      winnersName.innerText = theStates[state].winner.name;
    }
    michelle.tallyUpTotalVotes();
    kamala.tallyUpTotalVotes();
    console.log("Michelle's color is: " + michelle.partyColor);
    console.log("Kamala's color is: " + kamala.partyColor);
};

State.prototype.mouseClick = function (x, y, state) {
  if (this.onClick != null) {
    this.onClick(x, y, state);
  }
};

var countryInfoTable = document.getElementById('countryResults');
var row = countryInfoTable.children[0].children[0];

row.children[0].innerText = michelle.name;
row.children[1].innerText = michelle.totalVotes;
row.children[2].innerText = kamala.name;
row.children[3].innerText = kamala.totalVotes;
row.children[5].innerText = winner;
