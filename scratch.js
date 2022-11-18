let listA;

let listB;

// let difference = (a, b) => {
//   const o = [];
//   a.forEach((element) => {
//     if (!b.includes(element)) {
//       o.push(element);
//     }
//   });
//   return o;
// };

// let symDiff = (a, b) => a.filter((x) => !b.includes(x)).concat();

let difference = (a, b) => a.filter((x) => !b.includes(x));
let symDiff = (a, b) => difference(a, b).concat(difference(b, a));

// console.log(symDiff([1, 2, 3, 4, 5], [2, 6, 7]));

let NaturalNumbers;
let ThreeMultiples;
let FiveMultiples;
