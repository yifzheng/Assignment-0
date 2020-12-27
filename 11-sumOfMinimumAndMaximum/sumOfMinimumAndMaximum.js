function sumOfMinimumAndMaximum(nums) {
  // Insert code here;
  var max = nums[0];
  var min = nums[0];
  if (nums.length == 2){
    return nums[0] + nums[1];
  }
  else if (nums.length == 1){
    return nums[0];
  }
  else if (nums.length == 0){
    return 0;
  }
  for (var i = 0; i < nums.length; i++){
    if (nums[i] > max){
      max = nums[i];
    }
    else if (nums[i] < min){
      min = nums[i];
    }
  }
  return max + min;
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;