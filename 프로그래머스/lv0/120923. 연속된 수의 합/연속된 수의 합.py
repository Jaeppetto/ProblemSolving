def solution(num, total):
    answer = []

    tmp = sum(range(num+1))
    diff = total - tmp 
    start = diff//num 
    answer = [i+1+start for i in range(num)]

    return answer