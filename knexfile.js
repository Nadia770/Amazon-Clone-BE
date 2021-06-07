const ENV = process.env.NODE_ENV || "development";
const { DB_URL } = process.env;

const dbConfig =
  development = {
    client: "pg",
    connection: { database: "amazon_clone" },
    seed: { directory: "./db/seeds" },
  },
  test = {
    client: "pg",
    connection: { database: "amazon_clone_test" },
    seed: { directory: "./db/seeds" },
  };

module.exports = dbConfig[ENV]