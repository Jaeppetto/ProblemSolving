def solution(n):
    answer = []
    for i in range(1,n//2+1):
        answer.append(i*2)
    return sum(answer)