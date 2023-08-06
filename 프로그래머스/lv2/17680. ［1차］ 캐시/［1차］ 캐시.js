function solution(cacheSize, cities) {
    var answer = 0;
    let dst = []
    const array = cities.map((el)=>el.toLowerCase())
//     일단 입력 배열 대소문자 통일시키고 시작하는게 좋을 듯
//     캐시배열이 있음. 빈 배열로 시작
    if(cacheSize===0) return cities.length*5
    array.forEach((element)=>{
        if(dst.length<cacheSize){
            if(dst.includes(element)){ 
                dst = dst.filter((el)=>el!==element)
                dst.push(element)
                answer+=1
            } else{
                dst.push(element)
                answer+=5
            }
        }
        else{
            if(dst.includes(element)){ 
                dst = dst.filter((el)=>el!==element)
                dst.push(element)
                answer+=1
            } else{
                dst.shift()
                dst.push(element)
                answer+=5
            }
        }
    })
    return answer;
}