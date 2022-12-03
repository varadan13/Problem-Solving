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

// const subArray = (arr) => {
//   const result = [];
//   const recur = (start, end) => {
//     result.push(arr.slice(start, end));

//     if (start + 1 <= end) {
//       recur(start + 1, end);
//     }
//     if (end + 1 < arr.length) {
//       recur(start, end + 1);
//     }
//   };
//   recur(0, 0);
//   return result;
// };

// console.log(subArray([1, 2, 3]));

// nums = [1, 2, 3]

// start = 0 end = 0

// 1  0  0 1

const slice = (arr, start, end) => {
  let i = start;
  const j = end;
  const result = [];
  while (i <= j) {
    result.push(arr[i]);
    i += 1;
  }
  return result;
};

const generateSubArrays = (nums) => {
  let result = [];
  const recur = (start, end) => {
    if (start > end || end >= nums.length) {
      return;
    }
    result.push(slice(nums, start, end));
    recur(start + 1, end);
    recur(start, end + 1);
  };
  recur(0, 0);
  return result;
};

const opt_generateSubArrays = (nums) => {
  let result = [];
  const recur = (start, end) => {
    // update result
    // recur logice
    result.push(slice(nums, start, end));

    if (start + 1 < end) {
      recur(start + 1, end);
    }
    if (end + 1 < nums.length) {
      recur(start, end + 1);
    }
  };
  recur(0, 0);
  return result;
};

// console.time();
// console.log(
//   generateSubArrays([1, 2, 3, 4, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19])
// );
// console.timeEnd();

// const generateSubArraysIterator = nums=>{
//   const result = [];
//   for (let i of nums){

//   }

// }

const range = (n) => {
  const result = [];
  let i = 0;
  while (i < n) {
    result.push(i);
    i++;
  }
  return result;
};

console.log(range(100000));

const generateSubArray_it = (nums) => {
  const indexes = range(nums.length);
  const result = [];
  for (let i of indexes) {
    for (let j of indexes) {
      if (i < j) result.push(slice(nums, i, j));
    }
  }
  return result;
};

console.log(
  opt_generateSubArrays([
    1, 2, 3, 4, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 24, 24, 2, 424, 242, 42,
    424, 2, 323, 23, 2, 32, 3, 2, 32, 3, 2, 32, 3, 2, 3, 23, 2, 3, 23,
  ])
);
