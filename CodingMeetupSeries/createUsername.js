function addUsername(list) {
  var d = new Date();
  var n = d.getFullYear();
  for (var i=0; i<list.length; i++) {
    list[i].username = list[i].firstName.toLowerCase() + list[i].lastName.slice(0, 1).toLowerCase() + (n-list[i].age).toString();
  }
  return list;
}
