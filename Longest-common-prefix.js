var longestCommonPrefix = function (strs) {
  if (strs[0] === "" || strs.length === 1) {
    return strs[0] || "";
  }
  let sameLetter = true;
  let output = "";
  let counter = 0;
  while (sameLetter) {
    let counter2 = 0;
    const letterCheck = strs[0][counter];
    strs.forEach(function (str) {
      if (str[counter] != letterCheck || output.length === strs[0].length) {
        sameLetter = false;
      } else {
        counter2 += 1;
      }
    });
    if (counter2 === strs.length) {
      counter += 1;
      output += letterCheck;
    }
  }
  return output;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log(longestCommonPrefix([""]));
console.log(longestCommonPrefix(["flower", "flower", "flower", "flower"]));
