import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  quantity: number;
}

interface ProductsState {
  products: Product[];
}

const initialState: ProductsState = {
  products: [
    {
      id: 1,
      name: "Pizza",
      description: "Lorem ipsum...",
      price: "30 USD",
      imageUrl: "src/assets/pizza.jpg",
      quantity: 1,
    },
    {
      id: 2,
      name: "Hamburger",
      description: "Lorem ipsum...",
      price: "15 USD",
      imageUrl: "src/assets/Hamburger.jpg",
      quantity: 4,
    },
    {
      id: 3,
      name: "Bread",
      description: "Lorem ipsum...",
      price: "20 USD",
      imageUrl: "src/assets/bread.jpg",
      quantity: 1,
    },
    {
      id: 4,
      name: "Cake",
      description: "Lorem ipsum...",
      price: "10 USD",
      imageUrl: "src/assets/cake.jpg",
      quantity: 1,
    },
  ],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
