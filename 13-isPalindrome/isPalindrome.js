function isPalindrome(word) {
  // Insert code here;
  if (word.length == 1){
    return true;
  }
  else{
    var start = 0;
    var end = word.length - 1;
    while (end > start){
      if (word.charAt(start) != word.charAt(end)){
        return false;
      }
      start++;
      end--;
    }
    return true;
  }
}

// Do not edit this line;
module.exports = isPalindrome;