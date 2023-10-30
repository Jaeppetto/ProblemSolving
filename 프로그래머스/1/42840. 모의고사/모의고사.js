function solution(answers) {
    const answer = [];
    let [student1,student2,student3] = [0,0,0]
    
    const answer1 = [1,2,3,4,5]
    const answer2 = [2,1,2,3,2,4,2,5]
    const answer3 = [3,3,1,1,2,2,4,4,5,5]

    for(let i=0;i<answers.length;i++){
        if(answers[i] === answer1[i%answer1.length]){student1+=1}
        if(answers[i] === answer2[i%answer2.length]){student2+=1}
        if(answers[i] === answer3[i%answer3.length]){student3+=1}
    }
    
    const scores = [student1,student2,student3]
    scores.forEach((element,i)=>{
        if(element === Math.max(...scores)){
            answer.push(i+1)
        }
    })
    return answer;
}