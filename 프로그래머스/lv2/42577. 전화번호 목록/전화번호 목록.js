function solution(phoneBook) {
    const map = new Map()
    for (const number of phoneBook) {
    map.set(number,true)
  };
    
    for (const number of phoneBook) {
        for (let i = 1; i < number.length; i += 1) {
            const prefix = number.slice(0, i);
            if (map.has(prefix)) return false;  
        };
  };

    return true
}