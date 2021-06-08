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
          console.log(data.body.products)
          expect(Array.isArray(data.body.products)).toBe(true);
          expect(data.body.products[0]).toMatchObject({
            product_id: expect.any(Number),
            product_name: expect.any(String),
            price: expect.any(Number),
            average_rating: expect.any(Number),
            product_description: expect.any(String),
            product_url: expect.any(String),
            in_stock: expect.any(Boolean),
          });
        });
    });
    test.only("Status 200, sorts product by average_rating by default ", () => {
      return request(app)
        .get("/api/products?sort_by=average_rating")
        .expect(200)
        .then(({ body }) => {
          expect(Array.isArray(body.products)).toBe(true);
          expect(body.products).toBeSortedBy("average_rating", {
            descending: true,
          });
        });
    });;
  });
});
