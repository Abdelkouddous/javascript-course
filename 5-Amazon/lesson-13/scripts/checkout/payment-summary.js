//15 : 01 : 00
import { cart } from "../../data/cart.js";
import { getDeliveryOption } from "../../data/delivery-options.js";
import { getProduct } from "../../data/products.js";
import { formatCurrency } from "../utils/money.js";

let paymentSummaryHTML = "";

export function renderPaymentSummary() {
  //main javascript idea
  /*
  1. save the data
  2. generate html
  3.make it interactive
   */
  //part 1 saving the model (model MVC)
  let productPriceCents = 0,
    shippingPriceCents = 0;
  cart.forEach((cartItem) => {
    //here we add the prices to the shipping info
    const product = getProduct(cartItem.productId);
    productPriceCents += product.priceCents * cartItem.quantity;
    const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
    shippingPriceCents = deliveryOption.priceCents;
  });
  const totalBeforeTaxCents = productPriceCents + shippingPriceCents;
  const taxCents = totalBeforeTaxCents * 0.1; //tax
  const totalCents = totalBeforeTaxCents + taxCents; // all payment

  //now we append this into a template string
  //part 2 = step 2 generate HTML (view of MVC)
  //also part 3 make it interactive
  paymentSummaryHTML = `
      <div class="payment-summary-title">Order Summary</div>

              <div class="payment-summary-row">
                <div>Items :</div>
                <div class="payment-summary-money">
                $${formatCurrency(productPriceCents)}</div>
              </div>

              <div class="payment-summary-row">
                <div>Shipping &amp; handling:</div>
                <div class="payment-summary-money">
                $${formatCurrency(shippingPriceCents)}</div>
              </div>

              <div class="payment-summary-row subtotal-row">
                <div>Total before tax:</div>
                <div class="payment-summary-money">
                $${formatCurrency(totalBeforeTaxCents)}</div>
              </div>

              <div class="payment-summary-row">
                <div>Estimated tax (10%):</div>
                <div class="payment-summary-money">
                $${formatCurrency(taxCents)}</div>
              </div>

              <div class="payment-summary-row total-row">
                <div>Order total:</div>
                <div class="payment-summary-money">
                $${formatCurrency(totalCents)}</div>
              </div>

              <button class="place-order-button button-primary">
                Place your order 
              </button>`;

  document.querySelector(".js-payment-summary").innerHTML = paymentSummaryHTML;
}
