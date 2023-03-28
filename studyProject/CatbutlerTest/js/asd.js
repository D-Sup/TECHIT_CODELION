const obj = {
  a: 10,
  b: 40,
  c: 30,
  d: 40,
};

let maxKey = null;
let maxValue = Number.NEGATIVE_INFINITY;

for (const [key, value] of Object.entries(obj)) {
  if (value > maxValue) {
    maxKey = key;
    maxValue = value;
  } else if (value === maxValue) {
    if (!Array.isArray(maxKey)) {
      maxKey = [maxKey];
    }
    maxKey.push(key);
  }
}

console.log(maxKey); // Output: ["b", "d"]
