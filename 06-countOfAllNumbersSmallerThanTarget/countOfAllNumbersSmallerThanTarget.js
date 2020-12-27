function countOfAllNumbersSmallerThanTarget(nums, target) {
  // Insert code here;
  var num = 0;
  for (var i = 0; i < nums.length; i++){
    if (nums[i] < target){
      num += 1;
    }
  }
  return num;
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;