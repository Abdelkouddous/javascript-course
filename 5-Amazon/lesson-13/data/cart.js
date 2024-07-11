export const cart = [];

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
    matchingItem.quantity += 1;
  } else {
    cart.push({
      productId: productId,
      quantity: 1,
    });
    console.log(cart);
  }
}

/*The selected code defines a function called addToCartQuantity. This function calculates the total quantity of items in the shopping cart by iterating through the cart array and adding up the quantities of each item. The total quantity is then displayed in the HTML element with the class "js-cart-quantity".

The function is called whenever a product is added to the cart, ensuring that the cart quantity is always up-to-date. This is achieved by attaching an event listener to the "Add to Cart" buttons, which calls the addToCart function and then addToCartQuantity.

The addToCartQuantity function is a crucial part of the shopping cart functionality, as it provides real-time updates to the user about the total quantity of items in their cart.*/
export function addToCartQuantity() {
  let cartQuantity = 0;
  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });
  document.querySelector(".js-cart-quantity").innerHTML = cartQuantity;
}
