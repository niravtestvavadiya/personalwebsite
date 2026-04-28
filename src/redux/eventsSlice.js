import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  eventData: []
};

const eventSlice = createSlice({
  name: "Events",
  initialState,
  reducers: {
    setEventRedux: (state, action) => {
      state.eventData = [...state.eventData, ...action.payload];
    },
    setCleanUp: (state, action) => {
      state.eventData = []
    }
  },
});

export const { setEventRedux, setCleanUp } = eventSlice.actions;
export default eventSlice.reducer;
