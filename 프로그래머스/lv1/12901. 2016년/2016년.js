function solution(a, b) {
    var answer = '';
    const dayNames = ["SUN","MON","TUE","WED","THU","FRI","SAT"]
    const dayIdx = new Date(`2016-${a}-${b}`).getDay()
    return dayNames[dayIdx];
}