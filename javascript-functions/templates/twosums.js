const sol = (arr, target) => {
  const map = {};
  const res = [];
  let shldSkip = false;
  arr.forEach((ele, index) => {
    if (shldSkip) return;
    if (map[Math.abs(target - ele)]) {
      res.push(map[Math.abs(target - ele)], index);
      shldSkip = true;
    } else {
      map[ele] = index;
    }
  });
  return res;
};

// console.log(sol([1, 2, 7, 0, 9], 9));

const sol2 = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  // you do them
};
