// import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";
// import { deliveryOptions } from "../data/delivery-options.js";

/// add the ID only without adding images and stuff

export let cart = JSON.parse(localStorage.getItem("cart"));
!cart
  ? JSON.parse(localStorage.getItem("cart"))
  : [
      {
        productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity: 2,
        deliveryOptionId: "1",
      },
      {
        productId: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
        quantity: 1,
        deliveryOptionId: "2",
      },
      {
        productId: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
        quantity: 3,
        deliveryOptionId: "3",
      },
    ];

//
//
export function saveToStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

//dont load the file with <script>
//functions addToCart

//and addToCartQuantity
export function addToCart(productId) {
  let matchingItem; //

  cart.forEach((cartItem) => {
    //if we find a product is in the cart ir not
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  if (matchingItem) {
    //to modify later for product addition more
    //than once
    matchingItem.quantity++;
  } else {
    cart.push({
      productId: productId,
      quantity: 1,
      // note :: 14:24:26
      deliveryOptionId: "1",
    });
    // console.log(cart);
  }
  saveToStorage();
}

/*The selected code defines a function called addToCartQuantity. This function calculates the total quantity of items in the shopping cart by iterating through the cart array and adding up the quantities of each item. The total quantity is then displayed in the HTML element with the class "js-cart-quantity".

The function is called whenever a product is added to the cart, ensuring that the cart quantity is always up-to-date. This is achieved by attaching an event listener to the "Add to Cart" buttons, which calls the addToCart function and then addToCartQuantity.

The addToCartQuantity function is a crucial part of the shopping cart functionality, as it provides real-time updates to the user about the total quantity of items in their cart.*/

let cartQuantity = 0;
export function addToCartQuantity() {
  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });
  document.querySelector(".js-cart-quantity").innerHTML = cartQuantity;
  document.querySelector(".js-checkout-qtt").innerHTML = cartQuantity;
}

export function removeFromCart(productId) {
  const newCart = [];

  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  });
  cart = newCart;
  saveToStorage();
  //
}

// adding a function to update delivery options
//and update the page

//1 - loop through the cart nad find the product
//2 - update the delviery optionId of the product

export function updateDeliveryOption(productId, deliveryOptionId) {
  let matchingItem; // lloop through the cart and find the product
  cart.forEach((cartItem) => {
    // if we find a product is in the cart or not
    // this will give us the cart item
    // that matches the product id
    // and save it in matchingItem variable
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });
  //what i forgot :)
  //adding these two
  matchingItem.deliveryOptionId = deliveryOptionId;
  saveToStorage();

  //extra

  // deliveryOptions.forEach((deliveryOption) => {
  //   // const today = new Date(2024, 6, 13);
  //   //adding date behqaviour
  //   const today = dayjs();
  //   const deliveryDate = today.add(deliveryOption.deliveryDays, "days");
  //   const dateString = deliveryDate.format("dddd, MMMM D");
  //   document.querySelector(".js-delivery-date").innerText =
  //     "Delivery Date: " + dateString;
  // });
}
