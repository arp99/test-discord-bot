const dotenv = require("dotenv");
dotenv.config();

const { clientId, guildId, token } = require("./config").config;


console.log({ clientId });
console.log({ guildId });
console.log({ token });

