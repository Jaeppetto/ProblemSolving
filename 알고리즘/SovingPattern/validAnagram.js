function validAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  let str1_freq = {};
  let str2_freq = {};

  // 문자열을 한 글자씩 순회하는데, 추가된 적 있었던 글자일 경우 기존값에 +1
  // 처음 마주친 글자일 경우 1로 설정
  for (let key of str1) {
    str1_freq[key] = (str1_freq[key] || 0) + 1;
  }

  for (let key of str2) {
    str2_freq[key] = (str2_freq[key] || 0) + 1;
  }

  console.log(str1_freq, str2_freq);

  // 유효성 검사
  for (var key in str1_freq) {
    if (!(key in str2_freq)) {
      return false;
    }
    if (str1_freq[key] !== str2_freq[key]) {
      return false;
    }
  }
  return true;
}

validAnagram("aa z", "z aa");
