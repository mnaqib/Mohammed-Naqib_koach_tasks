import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  id: "",
  users: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLogin: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.id = action.payload.id;
    },
    setUsers: (state, action) => {
      state.users = action.payload.users;
    },
    setSignOut: (state, action) => {
      state.name = null;
      state.email = null;
      state.id = null;
      state.users = null;
    },
  },
});

export const { setUserLogin, setSignOut, setUsers } = userSlice.actions;

export const selectUsername = (state) => state.user.name;
export const selectEmail = (state) => state.user.email;
export const selectUsers = (state) => state.user.users;
export const selectId = (state) => state.user.id;

export default userSlice.reducer;
