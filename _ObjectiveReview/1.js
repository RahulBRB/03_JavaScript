/*
Complete the code below to display a message to e-commerce shoppers letting them know whether or not their order total qualifies them for free shipping. If shoppers’ orders total 75 dollars or more, return the freeShippingMessage, otherwise, return the freeShippingPromo.

Then, inside the console.log, call your checkCartTotal function to see its output. Make sure to provide a number argument for the subTotal parameter.
*/

const freeShippingMessage = "Congrats! You are eligible for free shipping on this order.";
const freeShippingPromo = "Get free shipping on all orders of $75 dollars or more.";

function checkCartTotal(subTotal) {
  if (subTotal >= 75) {
    return freeShippingMessage;
  } else {
    return freeShippingPromo;
  }
}

console.log(checkCartTotal(80));
