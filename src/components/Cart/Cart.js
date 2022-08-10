import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  console.log(cart);

  let total = 0;
  let shipping = 0;

  for (const product of cart) {
    total = total + product.price;
    shipping = shipping + product.shipping;
  }

  const tax = (total * 0.1).toFixed(2);
  return (
    <div className="cart">
      <h3>Order Summary</h3>
      <p>Selected Item: {cart.length}</p>
      <p>Total price: $ {total}</p>
      <p>Total Shipping Charge: ${shipping}</p>
      <p>Tax: $ {tax}</p>
      <h4>Grand Total: $</h4>
    </div>
  );
};

export default Cart;
