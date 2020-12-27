function frequencyCounter(word) {
  // Insert code here;
  var obj = {};
  var arr = [0,0,0,0,0,0,
             0,0,0,0,0,0,
             0,0,0,0,0,0,
             0,0,0,0,0,0,
             0,0];
  for (var i = 0; i < word.length; i++){
    arr[word.charCodeAt(i) - 97] += 1;
  }
  for (var k = 0; k < 26; k++){
    if (arr[k] > 0){
      obj[String.fromCharCode(k + 97)] = arr[k];
    }
  }
  return obj;
}

// Do not edit this line;
module.exports = frequencyCounter;