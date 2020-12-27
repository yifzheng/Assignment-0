function pairSum(nums, target) {
  // Insert code here;
  if (nums.length <= 1){
    throw new Error("too bad");
  }
  else{
    var obj = {};
    for (var  i = 0; i < nums.length; i++){
      obj[nums[i]] = i;
    }
    for (var i = 0; i < nums.length; i++){
      var difference = target - nums[i];
      if (obj.hasOwnProperty(difference)){
        return true;
      }
    }
    return false;
  }
}

// Do not edit this line;
module.exports = pairSum;