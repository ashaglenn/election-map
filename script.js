var createPolitician = function(name, partyColor){
 
    var politician = {}; 
    politician.name = name; 
    politician.electionResults = null;
    politician.totalVotes = 0;
    politician.partyColor = partyColor;    
    return politician;      
};
 
var michelle = createPolitician("Biden",[76, 155, 181]);
var kamala = createPolitician("Trump", [245, 141, 136]);
 

michelle.electionResults = [0, 0, 11, 0, 55, 9, 7, 3, 3, 0, 16, 4, 0, 20, 0, 0, 0, 0, 0, 4, 10, 11, 16, 10, 0, 0, 3, 0, 6, 4, 14, 5, 29, 0, 0, 0, 0, 7, 0, 4, 0, 0, 0, 0, 0, 3, 13, 12, 0, 10, 0];
 
kamala.electionResults = [9, 3, 0, 6, 0, 0, 0, 0, 0, 29, 0, 0, 4, 0, 11, 6, 6, 8, 8, 0, 0, 0, 0, 0, 6, 10, 0, 5, 0, 0, 0, 0, 0, 15, 3, 18, 7, 0, 20, 0, 9, 3, 11, 38, 6, 0, 0, 0, 5, 0, 3];



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
