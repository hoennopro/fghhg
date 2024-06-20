import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../src/store/store";
import Product from "./Product";

const ProductList: React.FC = () => {
  const products = useSelector((state: RootState) => state.products.products);

  return (
    <div>
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductList;
