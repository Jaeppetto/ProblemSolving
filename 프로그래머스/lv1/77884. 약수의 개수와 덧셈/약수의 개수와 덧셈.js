function solution(left, right) {
    var answer = 0;
    for(let i=left;i<=right;i++){
        const dividor = dst(i).length
        
        if(dividor%2===0)answer+=i
        else if(dividor%2===1)answer-=i
    }
    return answer;
}

function dst(int){
    var arr=[]
    for (let i=0;i<=(int/2);i++){
        if(int%i===0) arr.push(i)
    }
    arr.push(int)
    console.log(arr)
    return arr
}