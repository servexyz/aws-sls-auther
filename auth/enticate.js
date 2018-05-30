import got from "got";

const authenticate = async (username, password) => {
  let endpoint = `${process.env.AUTHER_ENDPOINT}/mock/post/login`;
  console.log(`endpoint: ${endpoint}`);
  const { body } = await got.post(endpoint, {
    body: {
      username,
      password
    },
    json: true
  });

  return body.token;
};

module.exports = { authenticate };
