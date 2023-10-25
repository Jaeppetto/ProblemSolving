function solution(myString) {
    const arr = ['a','b','c','d','e','f','g','h','i','j','k']
    return myString.split('').map(el=>arr.includes(el)?'l':el).join('');
}