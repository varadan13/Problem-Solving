// // scratch

// const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

// // result = 6
// // sub array = [4,-1,2,1]

// const nums2 = [1];

// // result = 1
// // sub array = [1]

// // 2 extra variables or 1 varaibale what is it?

// // 1 varaible

// let value = 0;
// let maxValue = 0;

// nums.forEach((ele) => {
//   if (value + ele < 0) {
//     value = 0;
//   } else {
//     value += ele;
//     if (value >= maxValue) {
//       maxValue = value;
//     }
//   }
// });

// console.log(maxValue);

const ans = (nums) => {
  let value = 0;
  let maxValue = 0;
  nums.forEach((ele) => {
    if (value + ele < 0) {
      value = 0;
    } else {
      value += ele;
      if (value >= maxValue) {
        maxValue = value;
      }
    }
  });
  return maxValue;
};

console.log(ans([2, 3, -6, 5, 5]));

const returnArray = (nums) => {
  let value = 0;
  let maxValue = 0;
  let start = null;
  let end = null;
  nums.forEach((ele, index) => {
    if (value + ele < 0) {
      value = 0;
      start = null;
      end = null;
    } else {
      if (!start) {
        start = index;
      }
      value += ele;
      if (value >= maxValue) {
        maxValue = value;
        end = index;
      }
    }
  });
  return [maxValue, [start, end]];
};

console.log(returnArray([-2, 1, -3, 4, -1, -2, 1, 5, -3]));
