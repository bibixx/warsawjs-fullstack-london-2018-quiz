const fn = (array) => {
  const millisecondsArray = array.map(el => Date.parse(el));

  const filteredArray = millisecondsArray.filter(el => {
    if (el == NaN) {
      return false;
    }
    
    return true;
  })

  const datesArray = filteredArray
    .sort()
    .map(el => new Date(el));

  return datesArray;
}

module.exports = fn;
