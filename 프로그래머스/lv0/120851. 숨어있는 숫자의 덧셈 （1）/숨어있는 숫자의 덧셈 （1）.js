function solution(my_string) {
    const regex = new RegExp(/\d/,'g');
    return my_string.match(regex).reduce((a,b)=>Number(a)+Number(b));
}