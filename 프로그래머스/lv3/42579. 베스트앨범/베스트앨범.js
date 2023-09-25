// 1. 같은 장로까지 묶어
// 2. 묶인 노래들을 재생순으로 정렬
// 3. 장르별 최상위 두 개의 고유번호를 가져옴

function solution(genres, plays) {
    const genreMap = new Map();
    
    genres.map((genre,index)=>[genre,plays[index]]).forEach(([genre, play],index)=>{
        const data = genreMap.get(genre) || {total:0, songs:[]};
        
        genreMap.set(genre, { total: data.total + play, songs:[...data.songs,{play,index}].sort((a,b)=>b.play-a.play).slice(0,2)})
    })
    
    return [...genreMap.entries()].sort((a,b)=>b[1].total-a[1].total).flatMap(item=>item[1].songs).map(song=>song.index)
}

// 해시의 Value를 객체 형태로?
// 1. 장르별 총 재생횟수를 담아 비교
// 2. 장르별 노래 중 재생 횟수가 많은 두 노래의 고유 번호