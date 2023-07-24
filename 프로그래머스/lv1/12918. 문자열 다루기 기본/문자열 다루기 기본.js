function solution(s) {
    const regex = /\D/g; 
    if(regex.test(s)===false && (s.length===4 || s.length===6)) return true
    return false
    
}