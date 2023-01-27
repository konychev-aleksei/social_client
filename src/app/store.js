import { configureStore } from "@reduxjs/toolkit";
import currentUser from "./reducers/currentUser";
import { postApi } from "./reducers/postApi";
import { commentApi } from "./reducers/commentApi";

const store = configureStore({
  reducer: {
    currentUser: currentUser.reducer,
    [postApi.reducerPath]: postApi.reducer,
    [commentApi.reducerPath]: commentApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([postApi.middleware, commentApi.middleware]),
});

export default store;
