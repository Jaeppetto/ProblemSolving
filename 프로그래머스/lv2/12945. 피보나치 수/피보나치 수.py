def solution(n):
    d=[0]*100000
    
    d[0]=1
    d[1]=1
    
    for i in range(2,n):
        d[i]=d[i-1]+d[i-2]
    
    answer = d[n-1]%1234567
    return answer