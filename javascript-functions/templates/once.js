function once(fn) {
  let argObj = {};
  return function () {
    const argInput = JSON.stringify(arguments);
    let result;
    if ((result = argObj[argInput])) return result;
    result = argObj[argInput] = fn.call(this, ...arguments);
    return result;
  };
}

const add = (x, y) => x + y;

const addFn = once(add);

console.log(
  addFn(1, 2),

  addFn(2, 3),

  addFn(1, 2)
);
