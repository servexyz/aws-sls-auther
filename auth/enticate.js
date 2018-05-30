import got from "got";
import chalk from 'chalk'
//TODO: Add .env & dotenv

const login = (username, password) => {
  let endpoint = `${apiLocal}/mock/post/login`;
  const { body } = await got.post(endpoint, {
    body: {
      username,
      password
    },
    json: true
  })
  let t = body.token;
  console.log(`
    ${chalk.yellow("------------")} \n
    ${chalk.green(endpointUri)}\n
    ${chalk.blue("JWT")}:\n ${body.token}
  `);

  return t;
};

module.exports = { login };
