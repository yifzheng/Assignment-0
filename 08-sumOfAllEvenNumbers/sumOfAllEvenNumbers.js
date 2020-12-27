function sumOfAllEvenNumbers(nums) {
  // Insert code here;
  var num = 0;
  for (var i = 0; i < nums.length; i++){
    if (nums[i] % 2 == 0){
      num += 1;
    }
  }
  return num;
}

// Do not edit this line;
module.exports = sumOfAllEvenNumbers;