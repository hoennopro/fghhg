import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../src/store/store";
import { addItemToCart, setNotification } from "../src/reducers/cartReducer";

interface ProductProps {
  id: number;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  quantity: number;
}

const Product: React.FC<ProductProps> = ({
  id,
  name,
  description,
  price,
  imageUrl,
  quantity,
}) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  const handleAddToCart = () => {
    const cartItem = cartItems.find((item) => item.id === id);
    if (cartItem) {
      if (cartItem.quantity + 1 > quantity) {
        dispatch(
          setNotification("Số lượng sản phẩm vượt quá số lượng trong kho")
        );
        return;
      }
      dispatch(
        addItemToCart({ id, name, price, quantity: cartItem.quantity + 1 })
      );
    } else {
      dispatch(addItemToCart({ id, name, price, quantity: 1 }));
    }
    localStorage.setItem(
      "cartItems",
      JSON.stringify([...cartItems, { id, name, price, quantity: 1 }])
    );
    dispatch(setNotification("Add to cart successfully"));
  };

  return (
    <div className="media product">
      <div className="media-left">
        <a href="#">
          <img className="media-object" src={imageUrl} alt={name} />
        </a>
      </div>
      <div className="media-body">
        <h4 className="media-heading">{name}</h4>
        <p>{description}</p>
        <input
          name="quantity-product"
          type="number"
          value={quantity}
          readOnly
        />
        <a className="price" onClick={handleAddToCart}>
          {price}
        </a>
      </div>
    </div>
  );
};

export default Product;
