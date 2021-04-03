import { configureStore, ThunkAction, Action, getDefaultMiddleware, EnhancedStore } from "@reduxjs/toolkit";
import { createWrapper, MakeStore }                                                 from "next-redux-wrapper";
import appReducer                                                                   from "./features/app/reducer";

const devMode = process.env.NODE_ENV === "development";

export const store = configureStore({
  reducer: {
    app: appReducer
  },
  middleware: [...getDefaultMiddleware()],
  devTools: devMode
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
  RootState,
  unknown,
  Action<string>>;


const setupStore = (context: any): EnhancedStore => store;
const makeStore: MakeStore = (context) => setupStore(context);

export const wrapper = createWrapper(makeStore, {
  debug: devMode
});

export default wrapper;

