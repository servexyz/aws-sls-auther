import got from "got";
import { AUTHER_ENDPOINT } from "babel-dotenv";

const authenticate = async (username, password) => {
  let endpoint = `${AUTHER_ENDPOINT}/mock/post/login`;
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

export default authenticate;
