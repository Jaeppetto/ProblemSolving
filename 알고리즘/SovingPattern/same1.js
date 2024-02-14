function same(arr1,arr2){
    // 두 배열의 길이가 다른 경우 1차적으로 필터링
    if(arr1.length !== arr2.length){
        return false
    }

    for (let i=0;i<arr1.length;i++){
        // arr1 원소 값의 제곱이 arr2 배열 내부에 존재하는 인덱스를 반환. 존재하지 않을 경우 -1을 반환
        let correctIndex = arr2.indexOf(arr1[i]**2)

        // 존재하지 않는 경우 -1을 반환받았으므로, false 반환하며 코드 종료
        if(correctIndex === -1){
            return false
        }

        // 비교를 끝낸 원소는 제거
        arr2.splice(correctIndex,1)
    }
    return true
}