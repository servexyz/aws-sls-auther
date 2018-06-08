import got from "got";
import { AUTHER_ENDPOINT } from "babel-dotenv";
//NOTE: Assumption here is that there's only one API (ie. AUTHER_ENDPOINT)
// This would break if there were two endpoints. Or the user would have to
// manually configure AUTHER_ENDPOINT everytime a new API was selected

export default async function(jwt) {
  let endpoint = `${AUTHER_ENDPOINT}/get/protected`;
  const { body } = await got(endpoint, {
    headers: {
      Authorization: jwt
    }
  });
  return body;
}
