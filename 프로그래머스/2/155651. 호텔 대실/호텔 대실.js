function hourToMin(time) {
    const [st, ed] = time.split(':');
    return Number(st*60) + Number(ed);
}

function solution(book_time) {
    var answer = 1;
    const sorted = book_time.sort((a, b) => hourToMin(a[0]) - hourToMin(b[0]));
    const stack = [sorted[0]];

    for (let i = 1; i < sorted.length; i++) {
        const [start, end] = sorted[i];
        const isdup = stack.every(([st, ed]) => hourToMin(ed) + 10 > hourToMin(start));
        if (isdup) {
            answer++;
            stack.push(sorted[i]);
        } else {
            const index = stack.findIndex(([st, ed]) => hourToMin(ed) + 10 <= hourToMin(start));
            stack[index] = sorted[i];
        }
    }

    return answer;
}