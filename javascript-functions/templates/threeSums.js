const genPermArr = (arr) => {};

const sol = (arr) => {
  const permutationArray = genPermArr(arr);
  const res = [];
  permutationArray.forEach((element) => {
    const [i, j, k] = element;
    if (arr[i] + arr[j] + arr[k] === 0) {
      res.push([i, j, k]);
    }
  });
  return res;
};
