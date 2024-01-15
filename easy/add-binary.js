var addBinary = function (a, b) {
  let carry = 0;
  let output = "";
  if (a.length > b.length) {
    const count = a.length - b.length;
    for (let j = 0; j < count; j++) {
      b = "0" + b;
    }
  } else if (b.length > a.length) {
    const count = b.length - a.length;
    for (let j = 0; j < count; j++) {
      a = "0" + a;
    }
  }
  for (let i = a.length - 1; i > -1; i--) {
    if (a[i] === b[i]) {
      if (carry === 0) {
        output = "0" + output;
      } else {
        output = "1" + output;
        carry = 0;
      }
      if (a[i] === "1") {
        carry = 1;
      }
    } else {
      if (carry === 0) {
        output = "1" + output;
      } else {
        output = "0" + output;
      }
    }
  }
  if (carry === 1) {
    output = "1" + output;
  }
  return output;
};

addBinary("11", "1");
addBinary("1010", "1011");
