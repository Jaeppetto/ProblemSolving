function solution(name, yearning, photo) {
  const mapYearning = new Map();
  var answer = Array.from({ length: photo.length }, () => 0);

  name.forEach((name, i) => mapYearning.set(name, yearning[i]));

  for (let i = 0; i < photo.length; i++) {
    for (let j = 0; j < photo[i].length; j++) {
      if (mapYearning.has(photo[i][j])) {
        answer[i] += mapYearning.get(photo[i][j]);
        // console.log(mapYearning.get(photo[i][j]));
      }
    }
  }
  return console.log(answer);
}

solution(
  ["may", "kein", "kain", "radi"],
  [5, 10, 1, 3],
  [
    ["may", "kein", "kain", "radi"],
    ["may", "kein", "brin", "deny"],
    ["kon", "kain", "may", "coni"],
  ]
);
