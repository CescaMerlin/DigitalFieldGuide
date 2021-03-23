require("dotenv").config();
var parse = require("pg-connection-string").parse;

let pgconfig = null;
if (process.env.DATABASE_URL) {
  pgconfig = parse(process.env.DATABASE_URL);
  pgconfig.ssl = { rejectUnauthorized: false };
}

const dbConfig = {
  development: {
    client: "pg", //this is the postgres client
    connection: {
      host: "127.0.0.1",
      user: process.env.DB_USER,
      password: process.env.DB_PW,
      database: process.env.DB_NAME,
      charset: "SJIS",
    },
    migrations: {
      directory: __dirname + "/data",
    },
    seeds: {
      directory: __dirname + "/data",
    },
  },
  production: {
    client: "pg",
    connection: pgconfig,
    charset: "UTF8",
    migrations: {
      directory: __dirname + "/data",
    },
    seeds: {
      directory: __dirname + "/data",
    },
  },
};

module.exports = dbConfig;
