function isRubyComing(list) {
  count = 0;
  for (var i=0; i<list.length; i++) {
    if (list[i].language == 'Ruby') {
      count +=1;
    }
  }
  return (count > 0) ? true:false;
}


// function isRubyComing(list) {
//   return list.some(developer => developer.language === "Ruby");
// }
