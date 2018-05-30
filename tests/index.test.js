import test from "ava";

test.before(t => {
  require("dotenv").config();
});

test("AUTHER_URI set", t => {
  t.is(process.env.AUTHER_URI, "http://localhost");
});

test("AUTHER_PORT set", t => {
  t.is(process.env.AUTHER_PORT, "3000");
});
