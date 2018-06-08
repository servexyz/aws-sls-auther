import { serial as test } from "ava";
import { AUTHER_MOCK_USERNAME, AUTHER_MOCK_PASSWORD } from "babel-dotenv";
// import { authenticate } from "../src/auth/enticate.js";
// import { isAuthorized } from "../src/auth/orize.js";
import { authenticate, isAuthorized } from "../src/index.js";
import chalk from "chalk";

var token;

test("Mock login", async t => {
  token = await authenticate(AUTHER_MOCK_USERNAME, AUTHER_MOCK_PASSWORD);

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
