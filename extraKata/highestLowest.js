function highAndLow(numbers){
  let arr = numbers.split(' ').map(function(item) {
    return parseInt(item, 10);
});
  let lowest = Math.min(...arr);
  let highest = Math.max(...arr);
  return '' + highest + " " + lowest;
}


// function highAndLow(numbers){
//   numbers = numbers.split(' ');
//   return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
// }
