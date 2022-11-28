// error

//! kindly debug

const bs = (arr, target) => {
  const midpoint = (start, end) => Math.floor((start + end) / 2);
  let targetIndex = null;
  let s, f;
  const recur = (start, end) => {
    const m = midpoint(start, end);
    if (start > end) {
      return;
    } else if (target < arr[m]) {
      recur(start, m - 1);
    } else if (target > arr[m]) {
      recur(m + 1, end);
    } else if (target === arr[m]) {
      targetIndex = m;
      return;
    }
  };
  const recur2 = (start, end) => {
    if (arr[start - 1] === target && arr[start + 1] === target) {
      recur2(start - 1, start + 1);
    } else if (arr[start - 1] === target) {
      recur2(start - 1, end);
    } else if (arr[start + 1] === target) {
      recur2(start, start + 1);
    } else {
      s = start;
      f = end;
      return;
    }
  };
  recur(0, arr.length - 1);
  if (targetIndex) {
    recur2(targetIndex, targetIndex);
  }
  if (!s & !f) {
    return [-1, -1];
  }
  return [s, f];
};

bs([1, 2, 3, 3, 3, 4, 5, 6], 3);
