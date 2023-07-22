function charCount(str) {
  // 마지막에 반환할 객체 생성
  var answer = {};
  // 문자열을 한 글자씩 순회***
  for (var i = 0; i < str.length; i++) {
    var char = str[i].toLowerCase();

    // 한 글자(char)가 문자 혹은 숫자이고 객체의 키에 있다면, 기존 값에 +1 카운트
    if (answer[char] > 0) {
      answer[char]++;
    }
    // 한 글자가 객체의 키에 없다면, 그 글자를 키로 추가하고 값을 1로 설정
    else {
      answer[char] = 1;
    }
  }
  // 한 글자가 공백, 마침표 등의 문자 혹은 숫자 이외의 형태라면 무시
  // 영문자, 숫자를 전부 포함한 배열을 만들어 특수문자를 필터링
  // 정규표현식을 사용할 수도 있고, ASCII 코드를 사용할 수도 있음

  // 객체 반환
  return answer;
}

charCount("Hello");
