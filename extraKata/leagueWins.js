function countWins(winnerList, country) {
 winCount = 0;
 for (var i=0; i<winnerList.length; i++) {
   if (winnerList[i].country === country) {
   winCount++;
   }
 }
 return winCount;
}
