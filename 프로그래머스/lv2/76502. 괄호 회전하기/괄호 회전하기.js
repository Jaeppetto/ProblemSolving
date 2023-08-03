function solution(s) {
    var answer = 0;
    let dst = s.split('')
//     1. 한 글자씩 옮기는 알고리즘
//     2. 옮긴 문자열이 올바른 괄호인지 확인하는 알고리즘
    for(let i=0;i<s.length;i++){
        if(i>=1){
            const shift = dst.shift()
            dst.push(shift)
        }
        isRight(dst)?answer+=1:answer+=0
    }
    return answer;
}

function isRight(arr){
    const stack = [];

  for (let i=0;i<arr.length;i++) {
      const char = arr[i]
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else {
      const lastOpenBracket = stack.pop();
      if (
        (char === ')' && lastOpenBracket !== '(') ||
        (char === '}' && lastOpenBracket !== '{') ||
        (char === ']' && lastOpenBracket !== '[')
      ) {
        return 0; // 올바른 괄호 문자열이 아니면 바로 0을 반환하고 종료
      }
    }
  }

  return stack.length === 0 ? true : false;
}