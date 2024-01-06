var isValid = function (s) {
  const Arr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      Arr.push(")");
    } else if (s[i] === "{") {
      Arr.push("}");
    } else if (s[i] === "[") {
      Arr.push("]");
    } else if (Arr.pop() != s[i]) {
      return false;
    }
  }
  return !Arr.length;
};

console.log(isValid("()"));
console.log(isValid("(){}[]"));
console.log(isValid("(){}[}"));
console.log(isValid("{[]}"));
console.log(isValid("([)]"));
