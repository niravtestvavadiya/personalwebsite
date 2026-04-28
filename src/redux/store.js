import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import eventReducer from "./eventsSlice";
import eventRegisterReducer from "./registerEvent";

const store = configureStore({
  reducer: {
    auth: authReducer,
    events: eventReducer,
    registerEvent: eventRegisterReducer,
  },
});

export default store;
