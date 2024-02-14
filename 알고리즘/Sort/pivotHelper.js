function pivotHelper(arr) {
  let pivotPoint = 0;
  let cnt = 1;

  for (let i = 1; i <= arr.length - 1; i++) {
    if (arr[pivotPoint] > arr[i]) {
      let tmp = arr[i];
      arr[i] = arr[cnt];
      arr[cnt] = tmp;
      cnt++;
    }
    console.log(arr);
  }

  let cntTmp = arr[cnt - 1];
  arr[cnt - 1] = arr[pivotPoint];
  arr[pivotPoint] = cntTmp;

  return arr;
}

let arr = [32, 23, 17, 26, 27, 47, 39, 12, 43];

pivotHelper(arr);
