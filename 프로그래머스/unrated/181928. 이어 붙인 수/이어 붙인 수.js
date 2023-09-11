function solution(num_list) {
    let odd = ''
    let even = ''
    
    num_list.forEach((el)=>{
        if(el%2===1) odd+=el.toString()
        else if(el%2===0) even+=el.toString()
    })
    return Number(odd)+Number(even);
}