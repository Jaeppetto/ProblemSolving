function solution(priorities, location) {
    let count = 0;
    const queue = priorities.map((priority, index) => ({ priority, index }));

    while (queue.length > 0) {
        const currentProcess = queue.shift();
        const isHigher = queue.some(process => process.priority > currentProcess.priority);

        if (isHigher) {
            queue.push(currentProcess); 
        } else {
            count++;

            if (currentProcess.index === location) {
                return count;
            }
        }
    }

    return count;
}


// 큐에서 하나 꺼내 (shift) 꺼낸 값의 우선순위보다 먼저인 값이 큐에 있다면,
// 꺼낸 값을 다시 큐에 넣고 (push) 해당 값을 꺼냄 (splice) -> 하나 뺄 때마다 return++
// 규칙에 따라 꺼내다가, location에 해당하는 원소의 순서가 되어 처리된 경우 해당 return 카운트를 반환
// 우선순위는 중복되기 때문에, Primary key가 될 수 없음 -> 0부터 시작하는 인덱스 부여