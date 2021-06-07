const { changeProductsKey } = require("../db/utils/utils");

describe("changeProductsKey", () => {
  test("should return an empty array if passed an empty array", () => {
    expect(changeProductsKey([])).toEqual([]);
  });
  test("should return the right key for products name", () => {
    let input = [
      {
        name: "Whiz Blender",
        price: 300,
        image:
          "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.ikohs.com%2Fuk%2F910422%2Fblender-matt-800w-american-style-jug-blender.jpg&imgrefurl=https%3A%2F%2Fwww.ikohs.com%2Fuk%2Fbuy-glass-blenders%2F70674-blender-matt-800w-american-style-jug-blender.html&tbnid=1F_R-zhUWlBmoM&vet=12ahUKEwjiuprEiPvwAhWOwYUKHfwwDUEQMygAegUIARDYAg..i&docid=UgxOQma2QSs60M&w=1500&h=1500&q=blender&ved=2ahUKEwjiuprEiPvwAhWOwYUKHfwwDUEQMygAegUIARDYAg",
        average_rating: 0,
        description:
          "Personal Blender, Sboly Smoothie Blender Single Serve Small Blender for Juice Shakes and Smoothie, Smoothie Maker with 20 oz Tritan BPA-Free Blender Cup, UK Plug",
        in_stock: true,
      },
    ];
    let expected = [
      {
        product_name: "Whiz Blender",
        price: 300,
        image:
          "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.ikohs.com%2Fuk%2F910422%2Fblender-matt-800w-american-style-jug-blender.jpg&imgrefurl=https%3A%2F%2Fwww.ikohs.com%2Fuk%2Fbuy-glass-blenders%2F70674-blender-matt-800w-american-style-jug-blender.html&tbnid=1F_R-zhUWlBmoM&vet=12ahUKEwjiuprEiPvwAhWOwYUKHfwwDUEQMygAegUIARDYAg..i&docid=UgxOQma2QSs60M&w=1500&h=1500&q=blender&ved=2ahUKEwjiuprEiPvwAhWOwYUKHfwwDUEQMygAegUIARDYAg",
        average_rating: 0,
        description:
          "Personal Blender, Sboly Smoothie Blender Single Serve Small Blender for Juice Shakes and Smoothie, Smoothie Maker with 20 oz Tritan BPA-Free Blender Cup, UK Plug",
        in_stock: true,
      },
    ];
    expect(changeProductsKey(input, "product_name", "name")).toEqual(expected);
  });
});
