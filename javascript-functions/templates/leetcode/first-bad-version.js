const bs = (arr) => {
  const midPoint = (start, end) => Math.floor((start + end) / 2);
  const recur = (start, end) => {
    const m = midPoint(start, end);
    let a = arr[m - 1];
    let b = arr[m];
    let c = arr[m + 1];
    if (api(a) === true) {
      recur(start, m - 2);
    } else if (api(a) === false && api(b) === true) {
      return [b, m];
    } else if (api(b) === false && api(c) === true) {
      return [c, m + 1];
    } else {
      recur(m + 2, end);
    }
  };
};
