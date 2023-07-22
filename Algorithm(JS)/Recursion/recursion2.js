// Helper Method Recursion Pattern

function oddValues(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) return;

    if (helperInput[0] % 2 !== 0) result.push(helperInput[0]);

    helper(helperInput.slice(1));
  }
  helper(arr);
  return result;
}

oddValues([1, 4, 5, 23, 4, 23, 3, 2423, 23, 2, 3]);
