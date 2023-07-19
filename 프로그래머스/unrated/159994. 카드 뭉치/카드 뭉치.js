function solution(cards1, cards2, goal) {
    let index = 0

    while(index !== goal.length){
        if(cards1[0] === goal[index]){
            cards1.shift()
            index++
        }
        else if(cards2[0] === goal[index]){
            cards2.shift()
            index++
        }
        else{
            break;
        }
    }

    return index === goal.length ? 'Yes' : 'No'
}