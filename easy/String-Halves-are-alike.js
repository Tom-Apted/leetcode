var halvesAreAlike = function (s) {
  const numVouls = function (str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (vouls.includes(str[i])) {
        count++;
      }
    }
    return count;
  };
  const vouls = "aeiou";
  const part1 = s.slice(0, s.length / 2).toLowerCase();
  const part2 = s.slice(s.length / 2, s.length).toLowerCase();
  if (numVouls(part1) === numVouls(part2)) {
    return true;
  } else {
    return false;
  }
};

console.log(halvesAreAlike("book"));
console.log(halvesAreAlike("textbook"));
