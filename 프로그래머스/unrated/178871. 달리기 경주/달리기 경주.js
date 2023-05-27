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