// const subArray = (nums) => {
//   const l = [];
//   nums.forEach((e, index) => {
//     l.push([e]);
//     let i = index - 1;
//     while (i >= 0) {
//       l[i].push(e);
//       i -= 1;
//     }
//   });
//   return l;
// };

// console.log(subArray([1, 2, 3, 4, 5, 6, 7]));

// [1,2,3]
// 0 1 2

// start = 0 end = 0
// start = 0 end = 1
// start = 0 end = 2
// start = 1 end = 2
// start = 1 end = 1
// start = 2 end = 2

//             0  0
//         0 0     0 1
//                1 1     0 2
//             1 1  1 2
//                2 2  1 2

//  0  1
//  1  1
//  1  2
//  2  2

const subArray = (arr) => {
  const result = [];
  const recur = (start, end) => {
    result.push(arr.slice(start, end));

    if (start + 1 <= end) {
      recur(start + 1, end);
    }
    if (end + 1 < arr.length) {
      recur(start, end + 1);
    }
  };
  recur(0, 0);
  return result;
};

console.log(subArray([1, 2, 3]));
