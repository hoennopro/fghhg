import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../src/store/store";
import CartItem from "./CartItem";

const Cart: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  if (cartItems.length === 0) {
    return <div>Empty product in your cart</div>;
  }

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th width="4%">STT</th>
            <th>Name</th>
            <th width="15%">Price</th>
            <th width="4%">Quantity</th>
            <th width="25%">Action</th>
          </tr>
        </thead>
        <tbody id="my-cart-body">
          {cartItems.map((item, index) => (
            <CartItem key={item.id} {...item} index={index + 1} />
          ))}
        </tbody>
        <tfoot id="my-cart-footer">
          <tr>
            <td colSpan={4}>
              There are <b>{cartItems.length}</b> items in your shopping cart.
            </td>
            <td colSpan={2} className="total-price text-left">
              {cartItems.reduce(
                (total, item) => total + parseFloat(item.price) * item.quantity,
                0
              )}{" "}
              USD
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Cart;
