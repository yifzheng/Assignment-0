function productOfAnyAmountOfNumbers(...args) {
  // Insert code here;
  var sum = args[0];
  for (var i = 1; i < args.length; i++){
    sum *= args[i];
  }
  return sum;
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;