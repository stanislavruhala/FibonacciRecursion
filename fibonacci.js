function fibonacciRecursive(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

const n = 10;
const fibRec = [];
for (let i = 0; i < n; i++) {
  fibRec.push(fibonacciRecursive(i));
}

console.log("Фібоначчі (рекурсія):", fibRec);
