const fn = require("./index.js");

it("should return proper element", () => {
  expect(fn()).toBe([1, 2, 3, 4, 5]);
});
