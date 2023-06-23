function solution(sizes) {
    var answer = 0;
//     x를 기준으로 하고자 한다면, 좌표 중 큰 값이 x가 되게 돌림
//     다 돌린 상태에서, y중 가장 큰 값이 명함 케이스의 세로 길이가 되는 것
    var xArr = [];
    var yArr = [];
    
    sizes.forEach((element)=>{
        if(element[0] >= element[1]){
            xArr.push(element[0])
            yArr.push(element[1])
        } else{
            xArr.push(element[1])
            yArr.push(element[0])
        }
    })
    return Math.max(...xArr) * Math.max(...yArr)
}