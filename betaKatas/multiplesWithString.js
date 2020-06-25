// function getNumber(number){
//   if (number%15===0) { return "BOTH" };
//   if (number%3===0) { return "THREE" };
//   if (number%5===0) { return "FIVE" };
//   return number;
// };
//
// function getNumberRange(first, last){
//   var foo = [];
//   for (var i = first; i <= last; i++) {
//     evaluatedNum = getNumber(i);
//      foo.push(evaluatedNum);
//   }
//   return foo;
// };

function getNumber(number){
    if (number % 3 === 0 && number % 5 === 0) {
        return "BOTH";
    } else if (number % 3 === 0) {
        return "THREE";
    } else if (number % 5 === 0) {
        return "FIVE";
    } else {
        return number;
    }
};

function getNumberRange(first, last){
    var list = [];
    if (first < last) {
        for (var i = first; i <= last; i++) {
            list.push(getNumber(i));
        }
    } else if (first > last) {
        for (var i = first; i >= last; i--) {
            list.push(getNumber(i));
        }
    }
    return list;
};
