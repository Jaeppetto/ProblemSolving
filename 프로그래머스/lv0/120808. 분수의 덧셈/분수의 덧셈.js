function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}

function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
//     1. 만약, 분모 중 하나가 다른 하나의 약수일 경우
//     2. 나눠지니까, 그 나눈 몫만큼 분수에 곱해 -> 통분됐음
//     3. 약수가 아닌 경우, 두 수를 곱한 값이 분모값임.
    var numer = numer1 * denom2 + numer2 * denom1
    var denom = denom1 * denom2
    var gcdNum = gcd(numer,denom)
    return [numer / gcdNum, denom / gcdNum ];
}