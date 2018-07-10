const fn = () => {
  const array = ["d", "e", "b", "a", "c"];

  const sortedArray = array.sort();
  const reversedArray = array.reverse();

  if (sortedArray[0] === "a" && reversedArray[0] === "c") {
    return array[0];
  }

  return null;
};

module.exports = fn;
