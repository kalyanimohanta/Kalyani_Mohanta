
function greet(name) {
  if (!name) {
    return null; // explicitly no greeting
  }
  return "Hello " + name;
}

let result1 = greet();      // undefined if no return, but here it returns null
let result2 = greet("Ali"); // "Hello Ali"

console.log(result1); // null
console.log(result2); // "Hello Ali"