function solution(today, terms, privacies) {
    var answer=[]
    const todayDate = new Date(today)

//    약관 종류에 따른 유효기간을 Map구조에 담음  
    const term = new Map
    terms.forEach((element)=>{
        const dst = element.split(" ")
        term.set(dst[0],dst[1])
    })
    
//     개인정보 수집 일자와 약관 유효 기간을 연산
//     배열을 순회하여 만료된 요소의 인덱스+1을 반환
    privacies.forEach((element,index)=>{
        const dst = element.split(" ")
        const validMonth = +term.get(dst[1])
        var registerDate = seperateDate(dst[0])
        const newMonth = registerDate.month+validMonth
        if(newMonth > 12){
            registerDate.month=newMonth%12
            registerDate.year+=Math.floor(newMonth/12)
            registerDate.day-=1
        } else{
            registerDate.month=newMonth
            registerDate.day-=1
        }
        
        if(registerDate.day===0){
            registerDate.day=28
            registerDate.month-=1
        }
        
        if(registerDate.month===0){
            registerDate.month=12
            registerDate.year-=1
        }
        const expireDate = new Date(`${registerDate.year}.${registerDate.month}.${registerDate.day}`)
        if(todayDate>expireDate) answer.push(index+1)
    })

    return answer;
}

function seperateDate(str){
    const date = str.split(".")
    const obj = {year:+date[0], month:+date[1], day:+date[2]}  

    return obj
}