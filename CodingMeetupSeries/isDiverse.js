function isLanguageDiverse(list) {
  var pythonCount = 0;
  var rubyCount = 0;
  var javaScriptCount = 0;
  for (var i=0; i<list.length; i++) {
    if (list[i].language === 'Ruby') {
      rubyCount++;
    }
    if (list[i].language === 'Python') {
      pythonCount++;
    }
    if (list[i].language === 'JavaScript') {
      javaScriptCount++;
    }
  }
  var min = Math.min(rubyCount, pythonCount, javaScriptCount);
  var max = Math.max(rubyCount, pythonCount, javaScriptCount);
  if (max/min<=2) {
  return true;
  }
  return false;
}
