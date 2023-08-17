function solution(order) {
  let answer = 0;
  let item = 1;
    
  const stack = [];
    
  for (const idx of order) {
    let flag = false;
      
    while (true) {
      if (stack.length === 0) stack.push(item++);
      if (idx > stack.at(-1)) stack.push(item++);
      else if (idx === stack.at(-1)) {
        stack.pop();
        answer++;
        flag = true;
        break;
      } else break;
    }
    if (!flag) break;
  }
  return answer;
}

// 컨테이너벨트는 큐, 보조 컨테이너벨트는 스택
// 메인벨트에서 shift한 것 혹은, 보조벨트에 재고가 있을 때 pop한 것
// 둘 중 하나가 order순서에 맞는 박스면, answer에 추가
// 둘 다 만족하지 않으면, 탈출