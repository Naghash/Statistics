var statistics ={
	
	nRep : 0,
	nDem : 0,
	nInd : 0,
	av_votesRep: 0,
	av_votesDem: 0,
	
	bottom_attendance:[],
	top_attendance:[],
	top_loyal: [],
	bottom_loyal: [],
}

var members = data.results[0].members;

var rep = [];
var dem = [];
var ind = [];

function partyNums(){
	for (var x = 0; x < members.length; x++){
		if ( members[x].party == "R"){
			rep.push(members[x]);
		}
		if ( members[x].party == "D"){
			dem.push(members[x]);
		}
		if ( members[x].party == "I"){
			ind.push(members[x]);
		}
	}
	
}
partyNums()

var demVotes = [];
var repVotes = [];
var demArrayVotes = [];
var repArrayVotes = [];


for (var m = 0; m < dem.length; m++){
	demArrayVotes.push(dem[m].votes_with_party_pct);				
}

var sumDems = demArrayVotes.reduce(function(a, b) { return a + b; }, 0);
var avVoteDems = sumDems / dem.length;
var avVoteDemsRound = Math.round(avVoteDems);



for (var h = 0; h < rep.length; h++){
	repArrayVotes.push(rep[h].votes_with_party_pct);				
}

var sumReps = repArrayVotes.reduce(function(a, b) { return a + b; }, 0);
var avVoteReps = sumReps / rep.length;
var avVoteRepsRound = Math.round(avVoteReps);

//Top voted Democrats

var sliceDem = dem.slice();
const MostVotedDems = sliceDem.sort(function(a,b) {
  return a.missed_votes_pct - b.missed_votes_pct
  });

var percLenght = Math.round(MostVotedDems.length*0.1);
var topVotedD = [];

for (let k = 0; k < 1; k++) {
	if (MostVotedDems.length = percLenght){
		topVotedD.push(MostVotedDems);
	}
	
}
           	console.log(topVotedD);

////bottom voted Democrats

var sliceDemLess = dem.slice();
const LessVotedDems = sliceDemLess.sort(function(b,a) {
  return a.missed_votes_pct - b.missed_votes_pct
  });

var percLenght = Math.round(LessVotedDems.length*0.1);
var bottomVotedD = [];
for (let j = 0; j < 1; j++) {
	if (LessVotedDems.length = percLenght){
		bottomVotedD.push(LessVotedDems);
	}
		
}


//Most voted Republics
var sliceRep = rep.slice();
const MostVotedReps = sliceRep.sort(function(a,b) {
  return a.missed_votes_pct - b.missed_votes_pct
  });

var percLenghtR = Math.round(MostVotedReps.length*0.1);
var topVotedR = [];

for (let f = 0; f < 1; f++) {
	if (MostVotedReps.length = percLenghtR){
		topVotedR.push(MostVotedReps);
	}
	
}

//Less voted Republics

var sliceRepLess = rep.slice();
const LessVotedReps = sliceRepLess.sort(function(b,a) {
  return a.missed_votes_pct - b.missed_votes_pct
  });

var percLenghtR = Math.round(LessVotedReps.length*0.1);
var bottomVotedR = [];
for (let o = 0; o < 1; o++) {
	if (LessVotedReps.length = percLenghtR){
		bottomVotedR.push(LessVotedReps);
	}
		
}


//top loyal dems///

var sliceDemLoyal = dem.slice();
const MostLoyalDems = sliceDemLoyal.sort(function(a,b) {
  return a.votes_with_party_pct - b.votes_with_party_pct
  });

var percLenghtLoyal = Math.round(MostLoyalDems.length*0.1);
var topLoyalD = [];

for (let e = 0; e < 1; e++) {
	if (MostLoyalDems.length = percLenghtLoyal){
		topLoyalD.push(MostLoyalDems);
	}
	
}
var top_loyal = statistics.top_loyal.push(topLoyalD);       
console.log(top_loyal);

///bottom loyal dems///
var sliceDemLessLoyal = dem.slice();
const LessLoyalDems = sliceDemLessLoyal.sort(function(b,a) {
  return a.votes_with_party_pct - b.votes_with_party_pct
  });

var percLenghtLoyalless = Math.round(LessLoyalDems.length*0.1);
var bottomLoyalD = [];
for (let b = 0; b < 1; b++) {
	if (LessLoyalDems.length = percLenghtLoyalless){
		bottomLoyalD.push(LessLoyalDems);
	}
		
}


///top loyal reps///

var sliceRepLoyal = rep.slice();
const MostLoyalReps = sliceRepLoyal.sort(function(a,b) {
  return a.votes_with_party_pct - b.votes_with_party_pct
  });

var percLenghtLoyalR = Math.round(MostLoyalReps.length*0.1);
var topLoyalR = [];

for (let s = 0; s < 1; s++) {
	if (MostLoyalReps.length = percLenghtLoyalR){
		topLoyalR.push(MostLoyalReps);
	}
	
}

///bottom loyal Reps///

var sliceRepLessLoyal = rep.slice();
const LessLoyalReps = sliceRepLessLoyal.sort(function(b,a) {
  return a.votes_with_party_pct - b.votes_with_party_pct
  });

var percLenghtLoyallessR = Math.round(LessLoyalReps.length*0.1);
var bottomLoyalR = [];
for (let a = 0; a < 1; a++) {
	if (LessLoyalReps.length = percLenghtLoyallessR){
		bottomLoyalR.push(LessLoyalReps);
	}
		
}
















