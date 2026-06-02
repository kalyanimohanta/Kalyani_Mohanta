function triangleType(a, b, c) {
  if (a + b <= c || a + c <= b || b + c <= a) {
    return "Not a triangle";
  }
  if (a === b && b === c) {
    return "Equilateral";
  }
  if (a === b || b === c || a === c) {
    return "Isosceles";
  }
  return "Scalene";
}

const tests = [
  [5, 5, 5],
  [5, 5, 8],
  [3, 4, 5],
];

tests.forEach(([a, b, c]) => {
  console.log(`Sides: ${a}, ${b}, ${c} -> ${triangleType(a, b, c)}`);
});
