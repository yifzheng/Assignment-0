function sumOfNumsWithinARange(nums, start, end) {
  // Insert code here;
  var num = 0;
  for (var i = 0; i < nums.length; i++){
    if (nums[i] >= start && nums[i] <= end){
      num += 1;
    }
  }
  return num;
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;