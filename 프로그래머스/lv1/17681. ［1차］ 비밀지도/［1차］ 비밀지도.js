function solution(n, arr1, arr2) {
    var answer = [];
    const binaryArr1 = arr1.map((el)=>'0b'+'0'.repeat(n-el.toString(2).length)+el.toString(2))
    const binaryArr2 = arr2.map((el)=>'0b'+'0'.repeat(n-el.toString(2).length)+el.toString(2))
    
    const operated = binaryArr1.map((el,i)=>(el|binaryArr2[i]).toString(2))
    operated.forEach((item)=>{
        let tmp = '0'.repeat(n-item.length)+item
        let dst = tmp.replaceAll('1','#')
        dst = dst.replaceAll('0',' ')
        answer.push(dst)
    })
    return answer;
}