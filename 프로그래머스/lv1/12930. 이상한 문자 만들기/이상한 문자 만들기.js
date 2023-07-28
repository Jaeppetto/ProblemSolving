function solution(s) {
    var split = s.split(' ')
    var asnwer = split.map((el)=>{
        let dst = ""
        for(let i=0;i<el.length;i++){
            if(i%2===0) {dst+=el[i].toUpperCase()}
            else {dst+=el[i].toLowerCase()}
        }
        return dst
    })
    return asnwer.join().replaceAll(',',' ');
}