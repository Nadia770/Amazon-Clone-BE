const {
  changeProductsKey,
  makeRefObject,
  switchKeyReference,
} = require("../db/utils/utils");

describe("changeProductsKey", () => {
  test("should return an empty array if passed an empty array", () => {
    expect(changeProductsKey([])).toEqual([]);
  });
  test("should return the right key for products name on a single object", () => {
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
        product_url:
          "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.ikohs.com%2Fuk%2F910422%2Fblender-matt-800w-american-style-jug-blender.jpg&imgrefurl=https%3A%2F%2Fwww.ikohs.com%2Fuk%2Fbuy-glass-blenders%2F70674-blender-matt-800w-american-style-jug-blender.html&tbnid=1F_R-zhUWlBmoM&vet=12ahUKEwjiuprEiPvwAhWOwYUKHfwwDUEQMygAegUIARDYAg..i&docid=UgxOQma2QSs60M&w=1500&h=1500&q=blender&ved=2ahUKEwjiuprEiPvwAhWOwYUKHfwwDUEQMygAegUIARDYAg",
        average_rating: 0,
        product_description:
          "Personal Blender, Sboly Smoothie Blender Single Serve Small Blender for Juice Shakes and Smoothie, Smoothie Maker with 20 oz Tritan BPA-Free Blender Cup, UK Plug",
        in_stock: true,
      },
    ];
    expect(
      changeProductsKey(
        input,
        "product_name",
        "name",
        "product_url",
        "image",
        "product_description",
        "description"
      )
    ).toEqual(expected);
  });
  test("should work with multiple objects", () => {
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
      {
        name: "Teddys Toaster",
        price: 100,
        image:
          "https://www.amazon.co.uk/Russell-Hobbs-2-Slice-Toaster-18780/dp/B008HQ63LO?source=ps-sl-shoppingads-lpcontext&psc=1?source=ps-sl-shoppingads-lpcontext&psc=1%27",
        average_rating: 0,
        description:
          "nspiring premium plastic high-gloss textured design complemented by sleek chrome Accents with soft illumination on buttons while in use",
        in_stock: true,
      },
    ];
    let expected = [
      {
        product_name: "Whiz Blender",
        price: 300,
        product_url:
          "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.ikohs.com%2Fuk%2F910422%2Fblender-matt-800w-american-style-jug-blender.jpg&imgrefurl=https%3A%2F%2Fwww.ikohs.com%2Fuk%2Fbuy-glass-blenders%2F70674-blender-matt-800w-american-style-jug-blender.html&tbnid=1F_R-zhUWlBmoM&vet=12ahUKEwjiuprEiPvwAhWOwYUKHfwwDUEQMygAegUIARDYAg..i&docid=UgxOQma2QSs60M&w=1500&h=1500&q=blender&ved=2ahUKEwjiuprEiPvwAhWOwYUKHfwwDUEQMygAegUIARDYAg",
        average_rating: 0,
        product_description:
          "Personal Blender, Sboly Smoothie Blender Single Serve Small Blender for Juice Shakes and Smoothie, Smoothie Maker with 20 oz Tritan BPA-Free Blender Cup, UK Plug",
        in_stock: true,
      },
      {
        product_name: "Teddys Toaster",
        price: 100,
        product_url:
          "https://www.amazon.co.uk/Russell-Hobbs-2-Slice-Toaster-18780/dp/B008HQ63LO?source=ps-sl-shoppingads-lpcontext&psc=1?source=ps-sl-shoppingads-lpcontext&psc=1%27",
        average_rating: 0,
        product_description:
          "nspiring premium plastic high-gloss textured design complemented by sleek chrome Accents with soft illumination on buttons while in use",
        in_stock: true,
      },
    ];
    expect(
      changeProductsKey(
        input,
        "product_name",
        "name",
        "product_url",
        "image",
        "product_description",
        "description"
      )
    ).toEqual(expected);
  });
  test("should not mutate the original array", () => {
    const input = [
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
      {
        name: "Teddys Toaster",
        price: 100,
        image:
          "https://www.amazon.co.uk/Russell-Hobbs-2-Slice-Toaster-18780/dp/B008HQ63LO?source=ps-sl-shoppingads-lpcontext&psc=1?source=ps-sl-shoppingads-lpcontext&psc=1%27",
        average_rating: 0,
        description:
          "nspiring premium plastic high-gloss textured design complemented by sleek chrome Accents with soft illumination on buttons while in use",
        in_stock: true,
      },
    ];
    let actual = changeProductsKey(
      input,
      "product_name",
      "name",
      "product_url",
      "image",
      "product_description",
      "description"
    );

    expect(input).not.toBe(actual);
    expect(input).toEqual([
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
      {
        name: "Teddys Toaster",
        price: 100,
        image:
          "https://www.amazon.co.uk/Russell-Hobbs-2-Slice-Toaster-18780/dp/B008HQ63LO?source=ps-sl-shoppingads-lpcontext&psc=1?source=ps-sl-shoppingads-lpcontext&psc=1%27",
        average_rating: 0,
        description:
          "nspiring premium plastic high-gloss textured design complemented by sleek chrome Accents with soft illumination on buttons while in use",
        in_stock: true,
      },
    ]);
  });
});

describe("makeRefObject", () => {
  test("should return an empty array if passed an empty array", () => {
    expect(makeRefObject([])).toEqual({});
  });
  test("should return a new reference object", () => {
    let productData = [
      {
        product_id: 1,
        product_name: "Whiz Blender",
        price: 300,
        average_rating: 0,
        product_description:
          "Personal Blender, Sboly Smoothie Blender Single Serve Small Blender for Juice Shakes and Smoothie, Smoothie Maker with 20 oz Tritan BPA-Free Blender Cup, UK Plug",
        product_url:
          "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.ikohs.com%2Fuk%2F910422%2Fblender-matt-800w-american-style-jug-blender.",
        in_stock: true,
      },
    ];

    let actual = { 1: "Whiz Blender" };

    expect(makeRefObject(productData, "product_id", "product_name")).toEqual(
      actual
    );
  });
  test("should return a new reference object from an multiple objects", () => {
    let productData = [
      {
        product_name: "Whiz Blender",
        price: 300,
        image:
          "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.ikohs.com%2Fuk%2F910422%2Fblender-matt-800w-american-style-jug-blender.jpg&imgrefurl=https%3A%2F%2Fwww.ikohs.com%2Fuk%2Fbuy-glass-blenders%2F70674-blender-matt-800w-american-style-jug-blender.html&tbnid=1F_R-zhUWlBmoM&vet=12ahUKEwjiuprEiPvwAhWOwYUKHfwwDUEQMygAegUIARDYAg..i&docid=UgxOQma2QSs60M&w=1500&h=1500&q=blender&ved=2ahUKEwjiuprEiPvwAhWOwYUKHfwwDUEQMygAegUIARDYAg",
        average_rating: 0,
        description:
          "Personal Blender, Sboly Smoothie Blender Single Serve Small Blender for Juice Shakes and Smoothie, Smoothie Maker with 20 oz Tritan BPA-Free Blender Cup, UK Plug",
        in_stock: true,
        product_id: 1,
      },
      {
        product_name: "Teddys Toaster",
        price: 100,
        image:
          "https://www.amazon.co.uk/Russell-Hobbs-2-Slice-Toaster-18780/dp/B008HQ63LO?source=ps-sl-shoppingads-lpcontext&psc=1?source=ps-sl-shoppingads-lpcontext&psc=1%27",
        average_rating: 0,
        description:
          "nspiring premium plastic high-gloss textured design complemented by sleek chrome Accents with soft illumination on buttons while in use",
        in_stock: true,
        product_id: 2,
      },
      {
        product_name: "Russell Hobbs 24360 Inspire Electric Kettle",
        price: 300,
        image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.ikohs.",
        average_rating: 0,
        description:
          "Personal Blender, Sboly Smoothie Blender Single Serve Small Blender for Juice Shakes and Smoothie, Smoothie Maker with 20 oz Tritan BPA-Free Blender Cup, UK Plug",
        in_stock: true,
        product_id: 3,
      },
    ];

    let actual = {
      "Whiz Blender": 1,
      "Teddys Toaster": 2,
      "Russell Hobbs 24360 Inspire Electric Kettle": 3,
    };

    expect(makeRefObject(productData, "product_name", "product_id")).toEqual(
      actual
    );
  });
});

describe("switchKeyReference", () => {
  const refObject = {
    "Whiz Blender": 1,
    "Teddys Toaster": 2,
    "Russell Hobbs 24360 Inspire Electric Kettle": 3,
  };

  test("should return an empty array when called with an empty array", () => {
    expect(switchKeyReference([])).toEqual([]);
  });
  test("should switchKeyReference works on single object", () => {
    const input = [
      {
        body: "Great product, happy with my purchase",
        created_at: 1511354163389,
        author: "AT",
        helpful_count: 5,
        star_count: 5,
        product: "Whiz Blender",
      },
    ];
    const actual = switchKeyReference(
      input,
      refObject,
      "product",
      "product_id"
    );
    const output = [
      {
        body: "Great product, happy with my purchase",
        created_at: 1511354163389,
        author: "AT",
        helpful_count: 5,
        star_count: 5,
        product_id: 1,
      },
    ];

    expect(actual).toEqual(output);
  });
  test("should switchKeyReference works on an array of several objects", () => {
    const input = [
      {
        body: "Great product, happy with my purchase",
        created_at: 1511354163389,
        author: "AT",
        helpful_count: 5,
        star_count: 5,
        product: "Whiz Blender",
      },
      {
        body: "Item looked like it had been used before, requested a refund",
        created_at: 1479818163389,
        author: "Sarah",
        helpful_count: 2,
        star_count: 2,
        product: "Teddys Toaster",
      },
      {
        body: "Regular shmegular",
        created_at: 11416746163389,
        author: "AT",
        helpful_count: 5,
        star_count: 2,
        product: "Russell Hobbs 24360 Inspire Electric Kettle",
      },
    ];

    const actual = switchKeyReference(
      input,
      refObject,
      "product",
      "product_id"
    );
    const output = [
      {
        body: "Great product, happy with my purchase",
        created_at: 1511354163389,
        author: "AT",
        helpful_count: 5,
        star_count: 5,
        product_id: 1,
      },
      {
        body: "Item looked like it had been used before, requested a refund",
        created_at: 1479818163389,
        author: "Sarah",
        helpful_count: 2,
        star_count: 2,
        product_id: 2,
      },
      {
        body: "Regular shmegular",
        created_at: 11416746163389,
        author: "AT",
        helpful_count: 5,
        star_count: 2,
        product_id: 3,
      },
    ];

    expect(actual).toEqual(output);
  });
  test("input array should not equal output array", () => {
    const input = [
      {
        body: "Great product, happy with my purchase",
        created_at: 1511354163389,
        author: "AT",
        helpful_count: 5,
        star_count: 5,
        product: "Whiz Blender",
      },
      {
        body: "Item looked like it had been used before, requested a refund",
        created_at: 1479818163389,
        author: "Sarah",
        helpful_count: 2,
        star_count: 2,
        product: "Teddys Toaster",
      },
      {
        body: "Regular shmegular",
        created_at: 11416746163389,
        author: "AT",
        helpful_count: 5,
        star_count: 2,
        product: "Russell Hobbs 24360 Inspire Electric Kettle",
      },
    ];

    const actual = switchKeyReference(
      input,
      refObject,
      "product",
      "product_id"
    );

    expect(actual).not.toBe(input);
    expect(input).toEqual([
      {
        body: "Great product, happy with my purchase",
        created_at: 1511354163389,
        author: "AT",
        helpful_count: 5,
        star_count: 5,
        product: "Whiz Blender",
      },
      {
        body: "Item looked like it had been used before, requested a refund",
        created_at: 1479818163389,
        author: "Sarah",
        helpful_count: 2,
        star_count: 2,
        product: "Teddys Toaster",
      },
      {
        body: "Regular shmegular",
        created_at: 11416746163389,
        author: "AT",
        helpful_count: 5,
        star_count: 2,
        product: "Russell Hobbs 24360 Inspire Electric Kettle",
      },
    ]);
  });
});
