function rangeFactory(to, from) {
  const r = Object.create(rangeFactory.prototype);
  r.to = to;
  r.from = from;
  return r;
}

rangeFactory.prototype.getAll = function () {
  return "get all";
};

rangeFactory.prototype.getOne = function (o) {
  return o;
};

const rf = rangeFactory(1, 10);

console.log(rf.to, rf.from, rf.getAll, rf.getOne);
