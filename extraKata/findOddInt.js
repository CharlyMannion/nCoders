function findOdd(A) {
  for (var i = 0; i < A.length; i++) {
    var count = 0;
    for (var j = 0; j < A.length; j++) {
      if (A[i] == A[j])
      count++;
    }
      if (count % 2 != 0)
      return A[i];
  }
    return -1;
}
