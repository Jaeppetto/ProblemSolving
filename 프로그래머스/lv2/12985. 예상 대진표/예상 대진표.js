function solution(n,a,b)
{
    const roundLength = Math.log2(n)
    var round = 1;
    var round_a =[a] 
    var round_b =[b] 
    
//     데이터 변환 및 라운드 연산
    for(let i=0;i<roundLength;i++){
        a = Math.ceil(a/2)
        b = Math.ceil(b/2)

        round_a.push(a)        
        round_b.push(b)
    }
    
    console.log(round_a, round_b)
    
//     같은 라운드 두 수 중 작은 수가 홀수이고, 작은 수에서 +1한 값이 큰 수일 때
    for(let j=0;j<roundLength;j++){
        const small = round_a[j]>round_b[j]?round_b[j]:round_a[j]
        const large = round_a[j]<round_b[j]?round_b[j]:round_a[j]
        
        console.log(small,large)
        if(small%2===1 && small+1===large) return j+1
    }
    
    return round
}

// 0번째 원소부터 2개씩 짝을 지어 준다 -> 그렇게 생기는 인덱스가 다음 라운드의 순번
// 뭔가 지수를 어떻게 사용해야 할 것 같은데