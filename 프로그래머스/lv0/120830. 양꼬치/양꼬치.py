def solution(n, k):
    answer = n*12000 + k*2000
    if(n>=10):
        service = n//10
        answer -= service*2000
    return answer