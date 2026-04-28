import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  phoneNumber: "",
  countryCode: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload.phone;
      state.countryCode = action.payload.country_code;
    },
  },
});

export const { setPhoneNumber } = authSlice.actions;
export default authSlice.reducer;
