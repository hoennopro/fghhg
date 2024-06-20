import React from "react";
import { useDispatch } from "react-redux";
import {
  updateCartItem,
  removeItemFromCart,
} from "../src/reducers/cartReducer";

interface CartItemProps {
  id: number;
  name: string;
  price: string;
  quantity: number;
  index: number;
}

const CartItem: React.FC<CartItemProps> = ({
  id,
  name,
  price,
  quantity,
  index,
}) => {
  const dispatch = useDispatch();

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = Math.max(1, parseInt(e.target.value));
    dispatch(updateCartItem({ id, quantity: newQuantity }));
    localStorage.setItem(
      "cartItems",
      JSON.stringify({ id, quantity: newQuantity })
    );
  };

  const handleRemove = () => {
    dispatch(removeItemFromCart(id));
    localStorage.removeItem("cartItems");
  };

  return (
    <tr>
      <th scope="row">{index}</th>
      <td>{name}</td>
      <td>{price}</td>
      <td>
        <input
          name="cart-item-quantity"
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
        />
      </td>
      <td>
        <a
          className="label label-info update-cart-item"
          onClick={handleQuantityChange}
        >
          Update
        </a>
        <a
          className="label label-danger delete-cart-item"
          onClick={handleRemove}
        >
          Delete
        </a>
      </td>
    </tr>
  );
};

export default CartItem;
