function solution(begin, target, words) {
  const queue = [];
  const visited = new Set();
  queue.push({ word: begin, count: 1 });
  visited.add(begin);

  while (queue.length) {
    const { word, count } = queue.shift();

    if (word === target) return count;

    for (let i = 0; i < words.length; i++) {
      const nextWord = words[i];

      if (!visited.has(nextWord) && isChange(word, nextWord)) {
        queue.push({ word: nextWord, count: count + 1 });
        visited.add(nextWord);
      }
    }
  }

  return 0;
}

function isChange(word1, word2) {
  let cnt = 0;

  for (let i = 0; i < word1.length; i++) {
    if (word1[i] !== word2[i]) {
      cnt++;

      if (cnt > 1) return false;
    }
  }
  return true;
}
