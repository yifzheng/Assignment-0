function titleCaseEdit(title) {
  // Insert code here;
  var word = title.split(" ");
  for (let i = 0; i < word.length; i++) {
      word[i] = word[i][0].toUpperCase() + word[i].substring(1);
  }
  var string = word.join(" ");
  return string;
}

// Do not edit this line;
module.exports = titleCaseEdit;