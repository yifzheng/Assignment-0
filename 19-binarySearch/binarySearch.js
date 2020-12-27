class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    // Insert code here;
    if (nums.length == 1){
      return nums[0] == target;
    }
    var mid = Math.floor(nums.length / 2);
    if (nums[mid]  == target){
      return true;
    }
    if (nums[mid] > target){
      return this.binarySearch(nums.slice(0,mid), target);
    }
    if (nums[mid] < target){
      return this.binarySearch(nums.slice(mid), target);
    }
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;