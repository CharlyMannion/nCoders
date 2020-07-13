var repeatIt = function(str, n) {
  if (typeof str === 'string') {
     return str.repeat((n));
  }
  return "Not a string";
}

// const repeatIt = (str,n) => typeof str == 'string' ? str.repeat(n) : 'Not a string'
