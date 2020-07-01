function sumDigits(number) {
  var res = number.toString().split('');
  var sum = 0;
  for (var i=0; i<res.length; i++) {
    if (res[i] !== '-') {
      var num = parseInt(res[i], 10);
      sum+=num;
    }
  }
  return sum;
}

// function sumDigits(number) {
//   return Math.abs(number).toString().split('').reduce(function(a,b){return +a + +b}, 0);
// }
