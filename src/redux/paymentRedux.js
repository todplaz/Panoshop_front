import { createSlice } from "@reduxjs/toolkit";



const paymentSlice = createSlice({
  name: "payment",
  initialState: {
  },
  reducers: {
    addPayment: (state, action) => {
      return action.payload
    },
    
  },
})

export const { addPayment } = paymentSlice.actions;
export default paymentSlice.reducer;