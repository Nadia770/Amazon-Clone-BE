const request = require("supertest");
const app = require("../app");

const dbConnection = require("../db/dbConnection");

afterAll(() => {
  return dbConnection.destroy();
});

beforeEach(() => {
  return dbConnection.seed.run();
});

describe("/api", () => {
  describe("/products", () => {
    test.only("Status 200, should return all products ", () => {
      return request(app)
        .get("/api/products")
        .expect(200)
        .then((data) => {
          console.log(data.body);
        });
    });
  });
});
