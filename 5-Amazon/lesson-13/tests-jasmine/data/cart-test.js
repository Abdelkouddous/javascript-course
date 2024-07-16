import { addToCart, cart } from "../../data/cart.js";
describe("test suite: addToCart", () => {
  it("adds an existing product to the cart", () => {
    // addToCart("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
  });
  it("adds a new product to the cart", () => {
    //MOCKS spyOn function
    //fake versions :))) helps against localStorage
    spyOn(localStorage, "getItem").andcallFake(() => {
      return JSON.stringify([]);
    });
    console.log(localStorage.getItem("cart"));
    addToCart("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
    expect(cart.length).toEqual(1);
    //MOCKS
  });
});
