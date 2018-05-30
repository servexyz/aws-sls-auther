import test from "ava";

test.before(t => {
  require("dotenv").config();
});

test("bar", async t => {
  const bar = Promise.resolve("bar");

  t.is(await bar, "bar");
});
