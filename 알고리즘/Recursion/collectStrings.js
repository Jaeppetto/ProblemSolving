let result = [];
function collectStrings(obj) {
  for (var key in obj) {
    if (typeof obj[key] === "string") {
      result.push(obj[key]);
    } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      collectStrings(obj[key]);
    }
  }
  return result;
}

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

collectStrings(obj); // ["foo", "bar", "baz"])
