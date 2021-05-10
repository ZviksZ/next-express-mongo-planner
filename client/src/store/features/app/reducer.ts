import { createSlice, PayloadAction }                               from "@reduxjs/toolkit";
import { GlobalMessageInterface, AppStateInterface, UserInterface } from "./types";


const initialState: AppStateInterface = {
  globalMessage: null,
  user: null
};

export const appReducer = createSlice({
  name: "@app",
  initialState,
  reducers: {
    setGlobalMessage: (state, action: PayloadAction<GlobalMessageInterface | null>) => {
      state.globalMessage = action.payload;
    },
    setUser: (state, action: PayloadAction<UserInterface | null>) => {
      state.user = action.payload;
    },
  }
});

export const { setGlobalMessage, setUser } = appReducer.actions;


export default appReducer.reducer;
