var romanToInt = function (s) {
  let total = 0;
  while (s.length > 0) {
    if (s[0] === "M") {
      total += 1000;
      s = s.slice(1);
    } else if (s[0] === "D") {
      total += 500;
      s = s.slice(1);
    } else if (s[0] === "C") {
      if (s[1] === "D") {
        total += 400;
        s = s.slice(2);
      } else if (s[1] === "M") {
        total += 900;
        s = s.slice(2);
      } else {
        total += 100;
        s = s.slice(1);
      }
    } else if (s[0] === "L") {
      total += 50;
      s = s.slice(1);
    } else if (s[0] === "X") {
      if (s[1] === "C") {
        total += 90;
        s = s.slice(2);
      } else if (s[1] === "L") {
        total += 40;
        s = s.slice(2);
      } else {
        total += 10;
        s = s.slice(1);
      }
    } else if (s[0] === "V") {
      total += 5;
      s = s.slice(1);
    } else if (s[0] === "I") {
      if (s[1] === "V") {
        total += 4;
        s = s.slice(2);
      } else if (s[1] === "X") {
        total += 9;
        s = s.slice(2);
      } else {
        total += 1;
        s = s.slice(1);
      }
    }
  }
  return total;
};

// came to me later but i could have just loped through once and done a double counter when CX or I we used to do 4 or 9 ect

console.log(romanToInt("MD"));
console.log(romanToInt("MDCM"));
console.log(romanToInt("MDCD"));
console.log(romanToInt("MDC"));
