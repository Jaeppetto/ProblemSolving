function solution(lottos, win_nums) {
    const dst = {
        0:6,
        1:6,
        2:5,
        3:4,
        4:3,
        5:2,
        6:1,
    }
    const remove = lottos.filter(lotto=>lotto===0).length
    const correct = lottos.filter(lotto=>win_nums.includes(lotto)).length
    return [dst[correct + remove] , dst[correct]];
}