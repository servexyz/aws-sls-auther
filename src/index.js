import { isAuthorized } from "./auth/orize.js";
import { authenticate } from "./auth/enticate.js";

console.log(`Local aws-sls-auther`);

export default { authenticate, isAuthorized };
