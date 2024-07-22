const factorial = (num) => {
  let ans = 1;
  for (let i = 1; i <= num; i++) {
    ans *= i;
  }
  return ans;
}
