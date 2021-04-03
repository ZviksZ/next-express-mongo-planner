import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GlobalMessageInterface, AppStateInterface } from "./types";


const initialState: AppStateInterface = {
  globalMessage: null
};

export const appReducer = createSlice({
  name: "app",
  initialState,
  reducers: {
    setGlobalMessage: (state, action: PayloadAction<GlobalMessageInterface | null>) => {
      state.globalMessage = action.payload;
    }
   /* increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    }*/
  }
});

export const { setGlobalMessage } = appReducer.actions;


export default appReducer.reducer;
