function charCount(str){
  var answer = {};

  for (var char of str){
      char = char.toLowerCase();

      if(/[a-z0-9]/.test(char)){
          answer[char] = ++answer[char] || 1;
      }
  }
  return answer
}

charCount("Hello there!")