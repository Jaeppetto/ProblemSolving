function charCount(str){
  var answer = {};
  
  for (var i=0;i<str.length;i++){
      var char = str[i].toLowerCase();

      if(/[a-z0-9]/.test(char)){
          if(answer[char] > 0){
          answer[char]++;
          }
          else {
          answer[char] = 1;
          }
      }
  }
  return answer
}

charCount("Hello there!")