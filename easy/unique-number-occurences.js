var uniqueOccurrences = function (arr) {
  const map = new Map();
  arr.forEach(function (entry) {
    if (map.has(entry)) {
      const value = map.get(entry);
      map.set(entry, value + 1);
    } else {
      map.set(entry, 1);
    }
  });
  return new Set([...map.values()]).size === [...map.values()].length;
};

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3]));
console.log(uniqueOccurrences([1, 2]));
console.log(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]));
