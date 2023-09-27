function solution(tickets) {
  let answer = [];
  const result = [];
  
  tickets.sort();
  
  const len = tickets.length;
  const visited = Array(len).fill(false);
  
  // 스택에 시작 노드 추가
  const stack = [["ICN", visited, result, 0]];
  
  while (stack.length > 0) {
    let [str, visited, result, count] = stack.pop();
    
    result.push(str);
    
    if(count === len) {
      answer = result;
      break;
    }
    
    for(let i = len -1; i >=0 ; i--) { // 역순으로 push 해서 알파벳 순으로 pop 되게 한다.
      if(!visited[i] && tickets[i][0] === str) {
        let newVisited= [...visited]; 
        newVisited[i]=true; 
        stack.push([tickets[i][1], newVisited,[...result], count+1]);
      }
    }
   }
   return answer;
}
