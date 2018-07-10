const fn = () => {
  const array = [1, 2, 3, 4, 5];
  array.splice(0, 1);

  return array;
};

console.log(fn());

module.exports = fn;
