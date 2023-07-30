function solution(d, budget) {
    let counter = 0
    const budgetApply = d.sort((a,b)=>a-b).filter(el=>{
        if(budget - el >= 0){
            budget -= el
            counter+=1
        }
        return false
    })

    return counter
}