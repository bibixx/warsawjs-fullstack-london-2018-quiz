const {expect} = require("chai");

const fn = require("./index.js");
const n = 15;

it("returned array should be of a length passed as a first argument", async () => {
  const val = await fn(n);

  val.forEach(v => {
    expect(val).to.have.length(n);
  });
});

it("array should contain objects which have only ”id” key", async () => {
  const val = await fn(n);

  val.forEach(v => {
    expect(v).to.have.keys("id");
  });
});

it("every object should have an unique id", async () => {
  const val = await fn(n);

  const usedIds = [];
  val.forEach(v => {
    expect(usedIds).not.to.include(v.id);
    usedIds.push(v.id);
  });
});