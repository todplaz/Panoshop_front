import { createSlice } from "@reduxjs/toolkit";



const deliverySlice = createSlice({
  name: "delivery",
  initialState: {
  },
  reducers: {
    addDelivery: (state, action) => {
      return action.payload;
    },
    
  },
})

export const { addDelivery } = deliverySlice.actions;
export default deliverySlice.reducer;