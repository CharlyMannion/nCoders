function getNumber(number){
  if (number%15===0) { return "BOTH" };
  if (number%3===0) { return "THREE" };
  if (number%5===0) { return "FIVE" };
  return number;
};

function getNumberRange(first, last){
  var foo = [];
  for (var i = first; i <= last; i++) {
    evaluatedNum = getNumber(i);
     foo.push(evaluatedNum);
  }
  return foo;
};
