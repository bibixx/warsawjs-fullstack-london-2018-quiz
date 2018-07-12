const {expect} = require("chai");

const fn = require("./index.js");

it("returned array should have same length as input if all parameters are valid", () => {
  const params = ["Thu, 02 Jan 1970 00:00:00 GMT-0400", "Wed, 01 Jan 1970 00:00:00 GMT-0400", "Thu Jan 01 1970 01:00:00 GMT+0100"]
  const val = fn(params);

  expect(val).to.have.lengthOf(params.length);
});

it("returned array should not contain Invalid Dates", () => {
  const params = ["Thu, 02 Jan 1970 00:00:00 GMT-0400", "Wed, 01 Jan 1970 00:00:00 GMT-0400", "Thu Jan 01 1970 01:00:00 GMT+0100", "WarsawJS"]
  const val = fn(params);

  expect(val).to.have.lengthOf(params.length - 1);
});

it("returned array should be sorted properly", () => {
  const params = ["Thu, 02 Jan 1970 00:00:00 GMT-0400", "Wed, 01 Jan 1970 00:00:00 GMT-0400", "Thu Jan 01 1970 01:00:00 GMT+0100"];
  const expectedOutput = ["1970-01-01T00:00:00.000Z", "1970-01-01T04:00:00.000Z", "1970-01-02T04:00:00.000Z"];
  const val = fn(params);

  val.forEach((v, i) => {
    expect(v.getTime()).to.be.equal(new Date(expectedOutput[i]).getTime())
  });

});