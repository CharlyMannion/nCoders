function solution(number){
  var sum = 0;
  var fullArr = [...Array(number+1).keys()];
  for (var i=0; i<fullArr.length-1; i++) {
    if (i%3===0 || i%5===0) {
      sum+=i;
    }
  }
  return sum;
}
