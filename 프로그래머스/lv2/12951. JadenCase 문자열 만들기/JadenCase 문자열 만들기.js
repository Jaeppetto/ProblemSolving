function solution(s) {
    const answer = s.split(' ').map(el => el.replace(/\w/g,(value,idx)=>{
        return idx === 0 ? value.toUpperCase() : value.toLowerCase()
    })).join(' ')
    return answer
}