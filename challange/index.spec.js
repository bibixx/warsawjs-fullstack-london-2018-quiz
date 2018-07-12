const {expect} = require("chai");

const fn = require("./index.js");

it("returned array should be of a length passed as a first argument", async () => {
  const n = 15;
  const val = await fn(n);

  val.forEach(v => {
    expect(val).to.have.length(n);
  });
});


it("returned array should not contain Promises", async () => {
  const val = await fn();

  val.forEach(v => {
    expect(v instanceof Promise).to.be.false;
  });
});

it("every object should have only an id", async () => {
  const val = await fn();

  val.forEach(v => {
    expect(v).to.have.keys("id");
  });
});

it("every object should have an unique id", async () => {
  const val = await fn();

  const usedIds = [];
  val.forEach(v => {
    expect(usedIds).not.to.include(v.id);
    usedIds.push(v.id);
  });
});