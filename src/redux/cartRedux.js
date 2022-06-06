import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    setQuantity: (state, action) => {

      if (action.payload.type === "decrease") {
        // quantity > 1 && setQuantity(quantity - 1);
        state.products = state.products.map((product) => {
          if (product.id === action.payload.product.id) {
            return {
              ...product,
              quantity: product.quantity - 1
            }
          }
          return product;
        })
      } else {
        state.products = state.products.map((product) => {
          if (product.id === action.payload.product.id) {
            return {
              ...product,
              quantity: product.quantity + 1
            }
          }
          return product;
        })
      }
    }
  },
})

export const { addProduct, setQuantity } = cartSlice.actions;
export default cartSlice.reducer;