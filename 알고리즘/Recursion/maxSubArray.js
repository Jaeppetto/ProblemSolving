function maxSubarraySum(arr, n) {
  let maxSum = 0;
  let tempSum = 0;

  if (arr.length < n) return null;

  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;

  for (let i = n; i < arr.length; i++) {
    tempSum = tempSum - arr[i - n] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
