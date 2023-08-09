function solution(babbling) {
    var answer = 0;
    
    babbling.forEach((el)=>{
        const dst = el.replaceAll('aya','0').replaceAll('ye','1').replaceAll('woo','2').replaceAll('ma','3')
        if((+dst || +dst===0) && !(dst.includes('00')) && !(dst.includes('11')) && !(dst.includes('22'))  && !(dst.includes('33'))) answer+=1
    })
    return answer;
}