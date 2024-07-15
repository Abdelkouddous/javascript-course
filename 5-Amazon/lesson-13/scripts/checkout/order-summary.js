//15 : 01 : 00
import {
  updateDeliveryOption,
  cart,
  removeFromCart,
  // cartQuantity,
} from "../../data/cart.js";
import { getProduct, products } from "../../data/products.js";
import { formatCurrency } from "../utils/money.js";
import {
  getDeliveryOption,
  deliveryOptions,
} from "../../data/delivery-options.js";
import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";
import { renderPaymentSummary } from "./payment-summary.js";

// let today = dayjs();
// const deliveryDate = today.add(7, "days");
// deliveryDate.format("dddd, MMMM D");

// console.log(deliveryDate.format("dddd, MMMM D"));
// a genius way to reÍ render all the page by using a function!
export function renderOrderSummary() {
  let checkoutHTML = "";

  let cartSummaryHTML = "";

  checkoutHTML = `
Checkout (<a class="return-to-home-link" href="amazon.html">
          <p class = "js-checkout-qtt">$${"itemsQtt"}</p>
          </a>)
          `;
  document.querySelector(".js-checkout").innerHTML = checkoutHTML;
  cart.forEach((cartItem) => {
    //getting the productID
    const productId = cartItem.productId;
    let matchingProduct = getProduct(productId);

    //adding delivery options dates generator

    // const deliveryOptionsId = cartItem.deliveryOptionId;
    // let deliveryOption;
    // deliveryOptions.forEach((option) => {
    //   option.id === deliveryOptionsId ? (deliveryOption = option) : "";
    // });

    // const today = dayjs();
    // const deliveryDate = today.add(deliveryOption.deliveryDays, "days");
    // const dateString = deliveryDate.format("dddd, MMMM D");

    const deliveryOptionsId = cartItem.deliveryOptionId;
    let deliveryOption = getDeliveryOption(deliveryOptionsId);
    //replaced this code into :
    // let deliveryOption;
    // deliveryOptions.forEach((option) => {
    //   if (option.id === deliveryOptionsId) {
    //     deliveryOption = option;
    //   }
    // });

    const today = dayjs();
    const deliveryDate = today.add(deliveryOption.deliveryDays, "days");
    const dateString = deliveryDate.format("dddd, MMMM D");
    // console.log(dateString);

    //template string for cartSummary
    //added it as a function later
    //re generate HTML
    cartSummaryHTML += `
              <div class="cart-item-container 
                js-cart-item-container-${matchingProduct.id}">
                <div class="delivery-date js-delivery-date">Delivery date: 
                ${dateString}</div>

                <div class="cart-item-details-grid">
                  <img
                    class="product-image"
                    src="${matchingProduct.image}"
                  />

                  <div class="cart-item-details">
                    <div class="product-name">
                      ${matchingProduct.name}
                    </div>
                    <div class="product-price"> $ ${formatCurrency(
                      matchingProduct.priceCents
                    )}
                    </div>
                    <!--->
                    <div class="product-quantity">
                      <span> Quantity: <span class="quantity-label">${
                        cartItem.quantity
                      }
                      </span> </span>
                      <span class="update-quantity-link link-primary">
                        Update
                      </span>
                      <span class="delete-quantity-link link-primary
                      js-delete-quantity-link" data-product-id="${
                        matchingProduct.id
                      }">
                        Delete
                      </span> 
                          <div class="delivery-options">
                              <div class="delivery-options-title">
                                Choose a delivery option:
                              </div>
                              ${deliveryOptionsHTML(matchingProduct, cartItem)}
                      </div>
                  </div>   
              </div>
              `;
  });

  // console.log(typeof matchingProduct);
  // console.log(matchingProduct);

  document.querySelector(".js-order-summary").innerHTML = cartSummaryHTML;
  // console.log(cartSummaryHTML);

  document.querySelectorAll(".js-delete-quantity-link").forEach((link) => {
    link.addEventListener("click", () => {
      // console.log("delete is working");
      const productId = link.dataset.productId;
      //console.log(productId);
      //already done
      removeFromCart(productId);
      //added renderPayment summary
      //to regenerate the payment cost
      renderPaymentSummary();
      console.log(cart);
      const container = document.querySelector(
        `.js-cart-item-container-${productId}`
      );
      container.remove();
      // console.log(container);
    });
  });

  //template string for delivery options in checkout page
  function deliveryOptionsHTML(matchingProduct, cartItem) {
    let html = "";
    //use deliveryOption variable to access to
    //the deliveryOptions item variable
    deliveryOptions.forEach((deliveryOption) => {
      // const today = new Date(2024, 6, 13);
      //adding date behqaviour
      const today = dayjs();
      const deliveryDate = today.add(deliveryOption.deliveryDays, "days");
      const dateString = deliveryDate.format("dddd, MMMM D");

      //adding price string method to show delivery price//
      const priceString =
        deliveryOption.priceCents === 0
          ? "Free"
          : `$${formatCurrency(deliveryOption.priceCents)} - `;
      const isChecked = deliveryOption.id === cartItem.deliveryOptionId;
      html +=
        //    console.log(today);
        `<div class="delivery-option js-delivery-option" 
                data-product-id="${matchingProduct.id}"
                data-delivery-option-id="${deliveryOption.id}">
                  <input
                    type="radio"
                    ${isChecked ? "checked" : ""}
                    
                    class="delivery-option-input"
                    name="delivery-option-${matchingProduct.id}"
                  />
                  <div>
                    <div class="delivery-option-date">${dateString}</div>
                    <div class="delivery-option-price">${priceString} Shipping</div>
                  </div>
                </div>
              </div>`;
    });
    return html;
  }

  document.querySelectorAll(".js-delivery-option").forEach((element) => {
    element.addEventListener("click", () => {
      const { productId, deliveryOptionId } = element.dataset;
      // import delvieryOptions
      //how? create data attribute to acess it on html
      updateDeliveryOption(productId, deliveryOptionId);
      renderPaymentSummary();
      renderOrderSummary();
    });
  });
}
