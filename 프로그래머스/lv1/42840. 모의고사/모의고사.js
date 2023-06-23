function solution(answers) {
    var answer = [];
    var score1 = 0
    var score2 = 0
    var score3 = 0
    
    const answer1 = [1,2,3,4,5]
    const answer2 = [2,1,2,3,2,4,2,5]
    const answer3 = [3,3,1,1,2,2,4,4,5,5]

    for(let i=0;i<answers.length;i++){
        if(answers[i] === answer1[i%answer1.length]){score1+=1}
        if(answers[i] === answer2[i%answer2.length]){score2+=1}
        if(answers[i] === answer3[i%answer3.length]){score3+=1}
    }
    
    const scores = [score1,score2,score3]
    scores.forEach((element,i)=>{
        if(element === Math.max(...scores)){
            answer.push(i+1)
        }
    })
    return answer;
}