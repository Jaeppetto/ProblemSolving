function solution(str1, str2) {
    var answer = 0;
    const dst1 = [], dst2 = []
    
//     문자열 분리
    for(let i=0;i<str1.length-1;i++){
        const regex = /^[a-zA-Z]+$/;
        const sliced1 = str1.toUpperCase().slice(i,i+2)
        if(regex.test(sliced1)) dst1.push(sliced1)
    }
    
    for(let j=0;j<str2.length-1;j++){
        const regex = /^[a-zA-Z]+$/;
        const sliced2 = str2.toUpperCase().slice(j,j+2)
        if(regex.test(sliced2)) dst2.push(sliced2)
    }
    
    let union = [...dst1,...dst2] 
    let inter = []
    let tmp = dst2.slice()
    
//     교집합 구하기
    dst1.forEach((el)=>{
       if(tmp.includes(el)){
           tmp.splice(tmp.indexOf(el),1)
           inter.push(el)
       } 
    })
    
//     합집합 구하기
    inter.forEach((el)=>{
        if(union.includes(el)){
            union.splice(union.indexOf(el),1)
        }
    })
    // console.log(dst1, dst2)
    // console.log("inter:",inter)
    // console.log("union:",union)
    
    if(inter.length===0 && union.length===0) return 1*65536
    return Math.floor(inter.length/union.length*65536);
}

// 1. 문자열을 두글자씩 끊어 집합에 넣기 -> for문 말고 다른 방법은?
// 2. 두 집합의 교집합, 합집합 구하기
// - dst1을 순회하여, 해당 원소와 일치하는 원소가 있으면 인덱스를 찾아 뽑아냄
// - 뽑아낸 원소를 교집합 배열에 넣어줘
// - 두 배열을 합치고, 교집합에 해당하는 원소들을 한 번 빼주면 합집합임