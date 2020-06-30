function orderFood(list) {
  var standardNo = 0;
  var veganNo = 0;
  var vegetarianNo = 0;
  var diabeticNo = 0;
  var glutenNo = 0;
  for (var i=0; i<list.length; i++) {
    if (list[i].meal === 'vegan') {
      veganNo++;
    }
    if (list[i].meal === 'vegetarian') {
      vegetarianNo++;
    }
    if (list[i].meal === 'standard') {
      standardNo++;
    }
    if (list[i].meal === 'gluten-intolerant') {
      glutenNo++;
    }
    if (list[i].meal === 'diabetic') {
      diabeticNo++;
    }
  }
  var fullList = {standard: standardNo, vegan: veganNo, vegetarian: vegetarianNo, diabetic: diabeticNo, 'gluten-intolerant': glutenNo};
  for (const [key, value] of Object.entries(fullList)) {
    if (value === 0) {
    delete fullList[key];
    }
  }
  return fullList;
}
