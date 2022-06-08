import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";
import paymentReducer from "./paymentRedux";
import deliveryReducer from "./deliveryRedux";




export default configureStore({
  reducer: {
    cart: cartReducer,
    payment: paymentReducer,
    delivery: deliveryReducer,
  }
});