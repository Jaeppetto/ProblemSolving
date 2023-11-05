function gcd(a, b) {
    while (b != 0) {
        let r = a % b;
        a = b;
        b = r;
    }
    return a;
}

function solution(w, h) {
    const total = w * h;
    const diagonal = w + h - gcd(w, h);
    return total - diagonal;
}

// 1. 직방 활용
// - W,H 다 돌면 시간초과날 듯
// - 기울기에 따라 한 열에 사용할 수 없는 사각형 갯수가 결정됨