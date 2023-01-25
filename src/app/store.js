import { configureStore } from "@reduxjs/toolkit";
import currentUser from "./reducers/currentUser";

const store = configureStore({
  reducer: {
    currentUser: currentUser.reducer,
  },
});

export default store;
