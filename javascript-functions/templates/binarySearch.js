const binarySearch = (arr, x) => {
  const midpoint = (start, end) => Math.floor((start + end) / 2);
  let bl, index;
  const recur = (start, end) => {
    if (start > end) {
      bl = false;
      index = null;
      return;
    }
    const m = midpoint(start, end);
    if (x > arr[m]) recur(m + 1, end);
    if (x < arr[m]) recur(start, m - 1);
    if (x === arr[m]) {
      bl = true;
      index = m;
      return;
    }
  };
  recur(0, arr.length - 1);
  return [bl, index];
};
