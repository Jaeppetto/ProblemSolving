function solution(new_id) {
    let result = new_id.toLowerCase()
        .replace(/[^\w\-\.]/g,'')
        .replace(/\.{2,}/g,'.')
        .replace(/^\./,'').replace(/\.$/,'')
    
    if(result.length === 0)
            result = 'a'

        if(result.length >= 16){
            result = result.slice(0,15).replace(/\.$/,'')
        }

        if(result.length <= 2){
            result = result.concat(result[result.length-1].repeat(3 - result.length))
        }
    
    return result;
}