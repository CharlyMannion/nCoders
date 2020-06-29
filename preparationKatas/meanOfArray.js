function getAverage(marks){
  var sum = marks.reduce(function(a, b) {
   return a + b;
  },
  0);
  var total = sum / marks.length;
  return Math.floor(total);
}

function getAverage(marks){
  return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);
}
