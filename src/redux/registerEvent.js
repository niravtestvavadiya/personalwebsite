// src/redux/slices/eventSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedEvent: null,
  selectedQty: 1,
};

const eventRegisterSlice = createSlice({
  name: "eventRegister",
  initialState,
  reducers: {
    setEvent: (state, action) => {
      state.selectedEvent = action.payload;
    },
    setQuantity: (state, action) => {
      state.selectedQty = action.payload;
    },
  },
});

export const { setEvent, setQuantity } = eventRegisterSlice.actions;
export default eventRegisterSlice.reducer;
