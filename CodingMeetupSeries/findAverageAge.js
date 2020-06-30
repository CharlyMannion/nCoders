function getAverageAge(list) {
  var total = 0;
  for (var i=0; i<list.length; i++) {
    total += list[i].age;
  }
  return Math.round(total/list.length);
}
