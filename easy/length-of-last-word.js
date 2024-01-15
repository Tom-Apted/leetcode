var lengthOfLastWord = function (s) {
  const trimmed = s.trim();
  const index = trimmed.lastIndexOf(" ");
  return trimmed.slice(index + 1).length;
};

console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("luffy is still joyboy"));
