const fetchApi = require("./api");

const fn = (n) => new Promise(async (resolve) => {
  const arrayOfObjects = Array(n).fill({});
  const arrayOfPromises = [];

  for (let i = 0; i < arrayOfObjects.length; i++) {
    arrayOfPromises.push(
      fetchApi("https://api.com/")
        .then(function({ id }) {
          if (arrayOfObjects[i]) {
            arrayOfObjects[i].id = id;
          }
        })
    );
  }

  await Promise.all(arrayOfPromises);
  resolve(arrayOfObjects);
});

module.exports = fn;
