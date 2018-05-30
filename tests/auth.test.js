import test from "ava";
import { login } from "../auth/enticate.js";
import chalk from "chalk";

test.before(t => {
  require("dotenv").config();
});

test("login", async t => {
  let token = await login(
    process.env.AUTHER_MOCK_USERNAME,
    process.env.AUTHER_MOCK_PASSWORD
  );

  console.log(`
    ${chalk.yellow("------------------------")} \n
    ${chalk.blue("Authentication JWT")}:\n ${token} \n
    ${chalk.yellow("------------------------")} \n
  `);

  t.truthy(token);
});
