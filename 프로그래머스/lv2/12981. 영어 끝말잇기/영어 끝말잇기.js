function solution(n, words) {
  for (let idx = 1; idx < words.length; idx++) {
    const history = words.slice(0, idx);
    const prev = words[idx - 1];

    if (history.includes(words[idx]) || prev[prev.length - 1] !== words[idx][0]) {
      return [(idx % n) + 1, Math.floor(idx / n) + 1];
    }
  }

  return [0, 0];
}
