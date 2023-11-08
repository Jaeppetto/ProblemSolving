function solution(user_id, banned_id) {
  const bannedList = new Array();

  banned_id.forEach((bid) => {
    let pattern = new RegExp("^" + bid.replaceAll('*', '.*') + "$");
    let dstList = new Array();

    user_id.forEach((uid) => {
      if (pattern.test(uid) && uid.length === bid.length) {
        dstList.push(uid);
      }
    });
    bannedList.push(dstList);
  });

  const results = new Set();

  function dfs(idx, selected) {
    if (idx === bannedList.length) {
      results.add(selected.sort().join(','));
      return;
    }
    for (let i = 0; i < bannedList[idx].length; i++) {
      if (!selected.includes(bannedList[idx][i])) {
        dfs(idx + 1, [...selected, bannedList[idx][i]]);
      }
    }
  }

  dfs(0, []);
  return results.size;
}



// 1. 불량 사용자 전부 필터링
// 2. 조합으로 경우의 수 추출

// 1-1. 정규식?
// 1-2. 인덱스를 따와?
// 1-3. 최적화는?