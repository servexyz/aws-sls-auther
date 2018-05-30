import test from "ava";
import { login } from "../auth/enticate.js";

test.before(t => {
  require("dotenv").config();
});

test("login", async t => {
  let token = login(
    process.env.AUTHER_MOCK_USERNAME,
    process.env.AUTHER_MOCK_PASSWORD
  );
  t.truthy(token);
});
