import got from "got";

const isAuthorized = async jwt => {
  let endpoint = `${process.env.AUTHER_ENDPOINT}/get/protected`;
  const { body } = await got(endpoint, {
    headers: {
      Authorization: jwt
    }
  });
  return body;
};

export { isAuthorized };
