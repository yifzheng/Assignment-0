function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
  var set = new Set();
  for (var arg of args){
    for (var y of arg){
      if (!(set.has(y))){
        set.add(y);
      }
    }
  }

  return set;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;