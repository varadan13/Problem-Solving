const findMin = (arr) => {
  let min = arr[0],
    minIndex;
  arr.forEach((ele, index) => {
    if (ele < min) {
      min = ele;
      minIndex = index;
    }
  });
  return [min, minIndex];
};

const findMax = (arr) => {
  let max = arr[0],
    maxIndex;
  arr.forEach((ele, index) => {
    if (ele > max) {
      max = ele;
      maxIndex = index;
    }
  });
  return [max, maxIndex];
};

const solution2 = (arr) => {
  const [min, minIndex] = findMin(arr);
  const [max, maxIndex] = findMax(arr.slice(minIndex));
  return [max - min, [minIndex, minIndex + maxIndex]];
};

console.log(solution2([7, 6, 4, 3, 1]));

const s3 = (arr) => {
  // find the first minimum value
  findMin;
  // find the first max value after the min value
  findMax;
  // if found proceed or else stop
  // find the second min after the first min
  findMin;
  // find the
  FindMax;
  // if found proceed or else  stop
};
