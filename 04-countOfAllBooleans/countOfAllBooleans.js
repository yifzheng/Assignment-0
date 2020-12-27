function countOfAllBooleans(arr) {
  // Insert code here;
  var num = 0;
  for (var i = 0; i < arr.length; i++){
    if ((arr[i] === true) || (arr[i] === false)){
      num += 1;
    }
    
  }
  return num;
}

// Do not edit this line;
module.exports = countOfAllBooleans;