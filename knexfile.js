const ENV = process.env.NODE_ENV || "development";
const { DB_URL } = process.env;

const dbConfig = {
  client: "pg",
  connection: { database: "amazon_clone_test" },
  seed: { directory: "./db/seeds" },
};
