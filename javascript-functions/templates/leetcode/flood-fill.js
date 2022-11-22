const solution = (arr, i, j, color) => {
  const initialColor = arr[i][j];
  const floodFill = (_i, _j) => {
    arr[_i][_j] = color;
  };
  const goodI = (_i) => _i >= 0 && _i < arr.length;
  const goodJ = (_j) => _j >= 0 && _j < arr[0].length;
  const goodColor = (_i, _j) => initialColor === arr[_i][_j];
  const recur = (_i, _j) => {
    if (goodI(_i) && goodJ(_j) && goodColor(_i, _j)) {
      floodFill(_i, _j);
      recur(_i + 1, _j);
      recur(_i - 1, _j);
      recur(_i, _j + 1);
      recur(_i, _j - 1);
    }
  };
  recur(i, j);
  return arr;
};

//>> does not work!

const ff = solution(
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  0,
  0,
  0
);

console.log(ff);
