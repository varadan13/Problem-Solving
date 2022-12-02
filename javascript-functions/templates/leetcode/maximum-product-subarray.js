// nums = [2,3,-2,4]
// output = 6

// nums = [-2,0,-1]
// output = 0

const ans = (nums) => {
  let value = 1;
  let maxValue = 0;
  nums.forEach((ele) => {
    value *= ele;
    if (value < 0) {
      value = 1;
    }
    if (value > maxValue) {
      maxValue = value;
    }
  });
  return maxValue;
};

console.log(ans([2, 3, -2, 4]));
