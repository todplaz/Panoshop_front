import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
    },
    setQuantity: (state, action) => {
      state.products = state.products.map((product) => {
        if (product.id === action.payload.product.id) {
          return {
            ...product,
            quantity: action.payload.type === "decrease" ? product.quantity - 1 : product.quantity + 1
          }
        }
        return product;
      })
    }
  },
})

export const { addProduct, setQuantity } = cartSlice.actions;
export default cartSlice.reducer;