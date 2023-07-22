function hanoi(num, from, to, via) {
  if (num === 0) return;
  hanoi(num - 1, from, via, to);
  console.log(`${from}번에서 ${to}번으로 옮긴다.`);
  hanoi(num - 1, via, to, from);
}
