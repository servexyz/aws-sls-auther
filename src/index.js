import { isAuthorized } from "./auth/orize.js";
import { authenticate } from "./auth/enticate.js";

console.log(`Local aws-sls-auther 2`);

export default { authenticate, isAuthorized };
