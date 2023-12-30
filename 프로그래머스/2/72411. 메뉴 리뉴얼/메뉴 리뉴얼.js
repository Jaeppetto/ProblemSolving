function solution(orders, course) {
    const answer = [];

    course.forEach(num => {
        const menus = new Map();
        orders.forEach(order => {
            const combinations = getComb(order.split('').sort(), num);
            combinations.forEach(combs => {
                const comb = combs.join('');
                menus.set(comb, menus.has(comb) ? menus.get(comb) + 1 : 1);
            });
        });

        let populate = Math.max(...menus.values());

        menus.forEach((count, menu, map) => {
            if(count === populate && count >= 2) answer.push(menu);
        });
    });

    return answer.sort();
}

function getComb(arr, num){
    const results = [];
    if(num === 1) return arr.map(v => [v]);

    arr.forEach((fixed, index, origin) => {
        const rest = origin.slice(index + 1);
        const combinations = getComb(rest, num - 1);
        const attached = combinations.map(v => [fixed, ...v]);
        results.push(...attached);
    });

    return results;
}