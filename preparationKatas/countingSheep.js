function countSheeps(arrayOfSheep) {
  var number = 0;
  arrayOfSheep.forEach( function evaluateTruth(value) {
    if (value === true) {
      number +=1;
    }
  });
  return number;
}
