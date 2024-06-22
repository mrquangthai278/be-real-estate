require("dotenv").config({ path: `./env/${process.env.NODE_ENV}.env` });

require("ts-node/register");
require("./src/main");
