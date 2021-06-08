const express = require("express");
const app = express();
apiRouter = require("./Router/apiRouter");
const dbConnection = require("./db/dbConnection");

beforeEach(() => dbConnection.seed.run());
afterAll(() => dbConnection.destroy());

describe("Name of the group", () => {
  test("should ", () => {});
});

module.exports = app;
