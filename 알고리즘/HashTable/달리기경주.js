const players = ["mumu", "soe", "poe", "kai", "mine"];
const callings = ["kai", "kai", "mine", "mine"];

// function solution(players, callings) {
//   const result = [];
//   let map = new Map();

//   players.forEach((player, i) => {
//     map.set(player, i);
//   });

//   callings.forEach((player, i) => {
//     var idx = map.get(player);

//     for (const [key, val] of map.entries()) {
//       if (val === idx - 1) {
//         map.set(key, idx);
//         break;
//       }
//     }
//     map.set(player, idx - 1);
//   });

//   const sortedArr = Array.from(map).sort((a, b) => a[1] - b[1]);
//   return sortedArr.map((player) => player[0]);
// }

function solution(player, calling) {
  const map = new Map();
  const mapRevese = new Map();

  player.forEach((player, idx) => {
    map.set(player, idx);
  });

  player.forEach((player, idx) => {
    mapRevese.set(idx, player);
  });

  for (let i = 0; i < calling.length; i++) {
    if (map.get(calling[i]) !== 0) {
      const name = calling[i];
      const score = map.get(name);
      const newScore = score - 1;
      const OtherName = mapRevese.get(score - 1);
      const OtherScore = score - 1;
      const OtherNewScore = score;

      map.set(name, newScore);
      map.set(OtherName, OtherNewScore);
      mapRevese.set(score, OtherName);
      mapRevese.set(OtherScore, name);
    }
  }
  let arr = [];
  for (let [key, val] of map.entries()) {
    arr[val] = key;
  }
  return arr;
}

solution(players, callings);
