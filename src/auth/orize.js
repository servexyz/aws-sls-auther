import got from "got";

//NOTE: Assumption here is that there's only one API (ie. AUTHER_ENDPOINT)
// This would break if there were two endpoints. Or the user would have to
// manually configure AUTHER_ENDPOINT everytime a new API was selected
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
