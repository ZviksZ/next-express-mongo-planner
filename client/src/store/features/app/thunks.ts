import { AppThunk } from "../../store";

export const incrementAsync = (amount: number): AppThunk => dispatch => {
  setTimeout(() => {
    //dispatch(incrementByAmount(amount));
  }, 1000);
};
