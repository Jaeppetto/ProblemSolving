function fibo(n) {
  if (n <= 2) return 1;
  return fibo(n - 1) + fibo(n - 2);
}

function fiboMemo(n, memo = []) {
  // 이미 연산된 값인 경우, 그 값을 그대로 반환
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;

  var res = fiboMemo(n - 1, memo) + fiboMemo(n - 2, memo);
  memo[n] = res;
  return res;
}

function fiboTabu(n) {
  if (n <= 2) return 1;
  var fiboNums = [0, 1, 1];

  for (var i = 3; i <= n; i++) {
    fiboNums[i] = fiboNums[i - 1] + fiboNums[i - 2];
  }
  return fiboNums[n];
}
