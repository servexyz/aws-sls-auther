import got from "got";
import chalk from "chalk";
//TODO: Add .env & dotenv

const login = async (username, password) => {
  let endpoint = `${process.env.AUTHER_ENDPOINT}/mock/post/login`;
  const { body } = await got.post(endpoint, {
    body: {
      username,
      password
    },
    json: true
  });

  let t = body.token;
  console.log(`
    ${chalk.yellow("------------")} \n
    ${chalk.blue("Cognito's Authentication JWT")}:\n ${body.token}
    ${chalk.yellow("------------")} \n
  `);

  return t;
};

module.exports = { login };
