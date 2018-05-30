import test from "ava";

test.before(t => {
  require("dotenv").config();
});

test("AUTHER_ENDPOINT set", t => {
  t.is(process.env.AUTHER_ENDPOINT, "http://localhost:3000/api");
});

test("AUTHER_MOCK_USERNAME set", t => {
  t.truthy(process.env.AUTHER_MOCK_USERNAME);
});

test("AUTHER_MOCK_PASSWORD set", t => {
  t.truthy(process.env.AUTHER_MOCK_PASSWORD);
});
