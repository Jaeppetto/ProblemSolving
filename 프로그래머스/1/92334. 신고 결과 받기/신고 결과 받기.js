function solution(id_list, report, k) {
    const set = new Set(report)
    const uniqueReport = [...set]

    const reporting = {}
    const reported = {}
    const banned = []
    
    uniqueReport.forEach((r)=>{
        const [ring,red] = r.split(' ')
        
        if(!reporting[ring]){
            reporting[ring]=[]
            reporting[ring].push(red)
        }else{
            reporting[ring].push(red)
        }
        
        if(reported[red]){
            reported[red]++
        }else{
            reported[red]=1
        }
    })

    for(const key in reported){
        if(reported[key]>=k){
            banned.push(key)
        }
    }
        
    return id_list.map((user)=>{
        if(reporting[user]){
            let count = 0
            for(let i=0; i<reporting[user].length;i++){
                if(banned.includes(reporting[user][i])) {
                    count++
                }
            }
            return count
        }
        else{
            return 0
        }
    })
}