function solution(my_string, letter) {
    var answer = '';
    var regexAllCase = new RegExp(letter,"g")
    return my_string.replace(regexAllCase,'');
}