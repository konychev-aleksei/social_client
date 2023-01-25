import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  displayName: "",
  email: "",
  photoURL: "",
};

const currentUser = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    setCurrentUser(_, action) {
      return action.payload;
    },
    clearCurrentUser() {
      return initialState;
    },
  },
});

export const { clearCurrentUser, setCurrentUser } = currentUser.actions;

export const getCurrentUser = (state) => state.currentUser;

export default currentUser;
