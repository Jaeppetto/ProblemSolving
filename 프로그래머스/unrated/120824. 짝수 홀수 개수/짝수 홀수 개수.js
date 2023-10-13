function solution(num_list) {
    let [odd,even] = [0,0]
    num_list.forEach(el=>{
        if(el%2===0)odd++
        else even++
    })
    return [odd,even];
}