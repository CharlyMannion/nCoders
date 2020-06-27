function monkeyCount(n) {
  var array = [];
    for (var i=1; i<n+1; i++) {
      array[i-1] = i;
  }
  return array;
}

// function monkeyCount(n) {
//   for (var i = 0, arr = []; i < n; arr.push(++i));
//
//   return arr;
// }
