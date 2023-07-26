function solution(num1, num2) {
    const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
    const lcm = (a, b) => a * b / gcd(a, b);
    return [gcd(num1, num2), lcm(num1, num2)];
}
    
//     1. 약수 구해서, 2단 순회하여 최대 공약수 찾음. 다른 방법이 있는지?
//     2. m을 1부터 n까지 곱해봐, 