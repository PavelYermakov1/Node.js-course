function listFibonacci(num) {
  let fibonacci = [0, 1];
  for (let i = 1; i < num; i++) {
    fibonacci.push(fibonacci[i] + fibonacci[i - 1]);
  }
  console.log(fibonacci);
}

listFibonacci(8);
