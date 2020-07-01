function matrixAddition(a, b){
  var finalArr = [];
  for (var i=0; i<a.length; i++) {
  var iArr = [];
    for (var j=0; j<a[i].length; j++) {
      iArr.push(a[i][j] + b[i][j]);
    }
    finalArr.push(iArr);
  }
  return finalArr;
}

// function matrixAddition(a, b){
//   return a.map(function(n, i){
//     return n.map(function(o, j){
//       return o + b[i][j];
//     });
//   });
// }
