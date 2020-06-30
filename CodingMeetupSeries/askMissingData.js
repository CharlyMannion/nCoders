function askForMissingDetails(list) {
newArr = [];
 for (var i=0; i<list.length; i++) {
   if(Object.values(list[i]).includes(null)) {
     var nullKey = Object.keys(list[i]).find(key => list[i][key] === null);
     list[i].question = 'Hi, could you please provide your ' + nullKey + '.';
     newArr.push(list[i]);
  }
 }
 return newArr;
}
