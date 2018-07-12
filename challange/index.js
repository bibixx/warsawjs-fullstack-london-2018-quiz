const fetchApi = require("./api");

const fn = (n) => new Promise((resolve) => {
  const arrayOfObjects = Array(n).fill({});
  const arrayOfPromises = [];

  for (var i = 0; i < arrayOfObjects.length; i++) {
    arrayOfPromises.push(
      fetchApi("https://api.com/")
        .then(function({ id }) {
          if (arrayOfObjects[i]) {
            arrayOfObjects[i].id = id;
          }
        })
    );
  }

  resolve(arrayOfPromises);
});

module.exports = fn;