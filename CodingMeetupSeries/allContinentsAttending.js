function allContinents(list) {
  var newList = [];
  var uniqList = [];
  for (var i=0; i<list.length; i++) {
    newList.push(list[i].continent);
  }
  uniqList = [...new Set(newList)];
  if (uniqList.length ===5) {
    return true;
  } else {
    return false;
  }
}

// function allContinents(list) {
//   return ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'].every(x => list.some(y => x==y.continent));
// }
