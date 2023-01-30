import { configureStore } from "@reduxjs/toolkit";
import currentUser from "./reducers/currentUser";
import { postApi } from "./reducers/postApi";

const store = configureStore({
  reducer: {
    currentUser: currentUser.reducer,
    [postApi.reducerPath]: postApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware),
});

export default store;
