function findAdmin(list, lang) {
  var adminArr = [];
  for (var i=0; i<list.length; i++) {
    if (list[i].language === lang && list[i].githubAdmin === 'yes') {
      adminArr.push(list[i]);
    }
  }
  return adminArr;
}


// function findAdmin(list, lang) {
//   return list.filter(function(dev){return dev.language == lang && dev.githubAdmin == 'yes'});
// }
