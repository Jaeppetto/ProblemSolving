function solution(players, callings) {
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