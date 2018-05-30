require("dotenv").config();
let TARGET_API = `${process.env.AUTHER_URI}:${process.env.AUTHER_PORT}`;

console.log(TARGET_API);
