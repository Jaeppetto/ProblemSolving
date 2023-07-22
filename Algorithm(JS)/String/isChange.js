// 길이가 같은 단어 두 개가 주어졌을 때,
// 한 글자만 바꿔서 같아질 수 있으면 True 반환
function isChange(word1, word2) {
  let cnt = 0;

  for (let i = 0; i < word1.length; i++) {
    if (word1[i] !== word2[i]) {
      cnt++;

      if (cnt > 1) return console.log(false);
    }
  }

  return console.log(true);
}
