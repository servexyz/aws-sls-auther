import { serial as test } from "ava";
import { authenticate } from "../auth/enticate.js";
import { isAuthorized } from "../auth/orize.js";
import chalk from "chalk";

var token;

test.before(t => {
  require("dotenv").config();
});

test("Mock login", async t => {
  token = await authenticate(
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

test("JWT Authorization", async t => {
  let body = await isAuthorized(token);
  console.log(`
    ${chalk.yellow("------------------------")} \n
    ${chalk.blue("Authorized Route Request")}:\n ${JSON.stringify(
    JSON.parse(body),
    null,
    2
  )} \n
    ${chalk.yellow("------------------------")} \n
  `);

  t.truthy(body);
});
