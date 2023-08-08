function solution(n, t, m, p) {
    let answer = '';
    let count = 0;

    while(answer.length < t*m) {
        const trans = count.toString(n).toUpperCase();
        answer += trans;

        count++;
    }

    const dst = [];
    for (let i = p - 1; i < answer.length; i += m) {
        dst.push(answer[i]);

        if (dst.length === t) {
            break;
        }
    }

    return dst.join('');
}
