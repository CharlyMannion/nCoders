function findSenior(list) {
  var oldestAge = 0;
  newArr = [];
  for (var i=0; i < list.length; i++) {
    if (list[i].age > oldestAge) {
      oldestAge = list[i].age;
    }
  }
    for (var i=0; i < list.length; i++) {
    if (list[i].age === oldestAge) {
      newArr.push(list[i]);
    }
  }
  return newArr;
}

// function findSenior(list) {
//   var maxAge = Math.max(...list.map(person => person.age));
//   return list.filter(person => person.age === maxAge);
// }
