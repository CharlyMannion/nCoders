var gimme = function (inputArray) {
  var nums = [...inputArray].sort((a, b) => a - b);
  return inputArray.indexOf(nums[1]);
};
