function solution(r1, r2) {
    var answer = 0;
//     반지름 제곱보다 좌표 x,y 각각의 제곱합이 작은 경우, 해당 원 안에 위치
    for(let x=1;x<=r2;x++){
        var maxY = Math.floor(Math.sqrt(r2**2-x**2))
        
        if(x>=r1){var minY = 0}
        else{var minY = Math.ceil(Math.sqrt(r1**2-x**2))}
        
        answer+=maxY-minY+1
    }
    return answer*4;
}